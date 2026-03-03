// api.js

const API_BASE_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:8000/api"
        : "https://backend.metavaratechnologies.com/api";

async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const config = {
        ...options,
        headers: {
            ...options.headers,
        },
    };

    // Only set JSON header if body is NOT FormData
    if (!(options.body instanceof FormData)) {
        config.headers["Content-Type"] = "application/json";
    }

    try {
        const response = await fetch(url, config);

        const contentType = response.headers.get("content-type");

        // If not JSON (example: file download)
        if (contentType && !contentType.includes("application/json")) {
            if (!response.ok) throw new Error("Request failed");
            return response;
        }

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data?.error || data?.message || "Request failed");
        }

        return data;

    } catch (error) {
        console.error("API Request Error:", error);
        return null;
    }
}

const apiService = {

    // 🔹 Careers - Get All Positions
    getPositions: async () => {
        const response = await apiRequest("/applications/positions/");

        if (!response) return [];

        if (Array.isArray(response)) return response;
        if (Array.isArray(response?.positions)) return response.positions;
        if (Array.isArray(response?.results)) return response.results;

        return [];
    },

    // 🔹 Get Single Position
    getPosition: async (id) => {
        return await apiRequest(`/applications/positions/${id}/`);
    },

    // 🔹 Submit Job Application
    submitApplication: async (applicationData, resumeFile = null) => {
        const formData = new FormData();
        formData.append("name", applicationData.name);
        formData.append("email", applicationData.email);
        formData.append("phone", applicationData.phone);
        formData.append("position", applicationData.position);

        if (resumeFile) {
            formData.append("resume", resumeFile);
        }

        return apiRequest("/applications/submit/", {
            method: "POST",
            body: formData,
        });
    },

    // 🔹 Admin - List Applications
    getApplications: async (token) => {
        return await apiRequest("/applications/list/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },

    // 🔹 Download Resume
    downloadResume: async (applicationId, token) => {
        return apiRequest(`/applications/${applicationId}/resume/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },

    // 🔹 Leads - Contact Form
    submitLead: async (leadData) => {
        return apiRequest("/leads/contact/", {
            method: "POST",
            body: JSON.stringify(leadData),
        });
    },
};

export default apiService;