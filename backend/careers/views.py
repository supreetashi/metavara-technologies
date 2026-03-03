from django.core.exceptions import ValidationError
from django.http import FileResponse
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes, permission_classes
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response

from .models import Application, Position


@api_view(["GET"])
@permission_classes([AllowAny])
def list_positions(request):
    positions = Position.objects.filter(is_active=True)
    data = [{
        "id": pos.id,
        "title": pos.title,
        "location": pos.location,
        "job_type": pos.job_type,
        "job_type_display": pos.get_job_type_display(),
        "description": pos.description,
        "requirements": pos.requirements,
        "created_at": pos.created_at.strftime("%Y-%m-%d"),
    } for pos in positions]

    return Response({
        "success": True,
        "positions": data,
        "count": len(data),
    })


@api_view(["GET"])
@permission_classes([AllowAny])
def get_position(request, position_id):
    position = get_object_or_404(Position, id=position_id, is_active=True)
    position_data = {
        "id": position.id,
        "title": position.title,
        "location": position.location,
        "job_type": position.job_type,
        "job_type_display": position.get_job_type_display(),
        "description": position.description,
        "requirements": position.requirements,
        "created_at": position.created_at.strftime("%Y-%m-%d"),
    }
    return Response({
        "success": True,
        "position": position_data,
        **position_data,
    })


@api_view(["POST"])
@permission_classes([AllowAny])
@parser_classes([MultiPartParser, FormParser])
def submit_application(request):
    name = request.data.get("name", "").strip()
    email = request.data.get("email", "").strip()
    phone = request.data.get("phone", "").strip()
    position = request.data.get("position", "").strip()
    resume = request.FILES.get("resume")

    if not all([name, email, phone, position]):
        return Response(
            {
                "success": False,
                "error": "All fields except resume are required",
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    application = Application(
        name=name,
        email=email,
        phone=phone,
        position=position,
        resume=resume,
    )

    try:
        application.full_clean()
        application.save()
    except ValidationError as exc:
        return Response(
            {
                "success": False,
                "error": getattr(exc, "message_dict", str(exc)),
            },
            status=status.HTTP_400_BAD_REQUEST,
        )

    return Response(
        {
            "success": True,
            "message": "Application submitted successfully",
            "application_id": application.id,
        },
        status=status.HTTP_201_CREATED,
    )


@api_view(["GET"])
@permission_classes([IsAdminUser])
def list_applications(request):
    applications = Application.objects.all()
    data = [{
        "id": app.id,
        "name": app.name,
        "email": app.email,
        "phone": app.phone,
        "position": app.position,
        "has_resume": app.has_resume,
        "resume_url": None,
        "resume_download_url": (
            request.build_absolute_uri(f"/api/applications/{app.id}/resume/")
            if app.has_resume
            else None
        ),
        "submitted_at": app.submitted_at.strftime("%Y-%m-%d %H:%M:%S"),
    } for app in applications]

    return Response({
        "success": True,
        "applications": data,
        "count": len(data),
    })


@api_view(["GET"])
@permission_classes([IsAdminUser])
def download_resume(request, application_id):
    application = get_object_or_404(Application, id=application_id)
    if not application.has_resume:
        return Response(
            {"success": False, "error": "Resume not found"},
            status=status.HTTP_404_NOT_FOUND,
        )

    response = FileResponse(application.resume.open("rb"))
    extension = application.resume.name.split(".")[-1]
    response["Content-Disposition"] = (
        f'attachment; filename="{application.name}_resume.{extension}"'
    )
    return response
