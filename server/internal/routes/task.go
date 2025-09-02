package routes

import (
	"net/http"
)

func RegisterTaskHandler(mux *http.ServeMux) {
    mux.HandleFunc("GET /task/", HandleGetAllTasks)
    mux.HandleFunc("GET /task/{id}/", HandleGetTask)
    mux.HandleFunc("POST /task/", HandlePostTask)
    mux.HandleFunc("DELETE /task/{id}/", HandleDeleteTask)
}

func HandleGetAllTasks(respose http.ResponseWriter, request *http.Request) {
    respose.Write([]byte("Get all users"))
}

func HandleGetTask(respose http.ResponseWriter, request *http.Request) {
    id := request.PathValue("id")
    respString := "Get user with id: " + id
    respose.Write([]byte(respString))
}

func HandlePostTask(respose http.ResponseWriter, request *http.Request) {
    respose.Write([]byte("Add user"))
}

func HandleDeleteTask(respose http.ResponseWriter, request *http.Request) {
    id := request.PathValue("id")
    respString := "Delete user with id: " + id
    respose.Write([]byte(respString))
}