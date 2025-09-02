package routes

import (
	"net/http"
)

func RegisterProjectHandler(mux *http.ServeMux) {
    mux.HandleFunc("GET /project/", HandleGetAllProjects)
    mux.HandleFunc("GET /project/{id}/", HandleGetProject)
    mux.HandleFunc("POST /project/", HandlePostProject)
    mux.HandleFunc("DELETE /project/{id}/", HandleDeleteProject)
}

func HandleGetAllProjects(respose http.ResponseWriter, request *http.Request) {
    respose.Write([]byte("Get all users"))
}

func HandleGetProject(respose http.ResponseWriter, request *http.Request) {
    id := request.PathValue("id")
    respString := "Get user with id: " + id
    respose.Write([]byte(respString))
}

func HandlePostProject(respose http.ResponseWriter, request *http.Request) {
    respose.Write([]byte("Add user"))
}

func HandleDeleteProject(respose http.ResponseWriter, request *http.Request) {
    id := request.PathValue("id")
    respString := "Delete user with id: " + id
    respose.Write([]byte(respString))
}