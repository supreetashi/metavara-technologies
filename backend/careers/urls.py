from django.urls import path
from . import views

urlpatterns = [
    path('positions/', views.list_positions, name='list_positions'),
    path('positions/<int:position_id>/', views.get_position, name='get_position'),
    path('submit/', views.submit_application, name='submit_application'),
    path('list/', views.list_applications, name='list_applications'),
    path('<int:application_id>/resume/', views.download_resume, name='download_resume'),
]
