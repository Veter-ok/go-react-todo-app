package routes

import (
	"net/http"
)

func RegisterUserHandler(mux *http.ServeMux) {
    mux.HandleFunc("GET /user/", HandleGetAllUsers)
    mux.HandleFunc("GET /user/{id}/", HandleGetUser)
    mux.HandleFunc("POST /user/", HandlePostUser)
    mux.HandleFunc("DELETE /user/{id}/", HandleDeleteUser)
}

func HandleGetAllUsers(respose http.ResponseWriter, request *http.Request) {
    respose.Write([]byte("Get all users"))
}

func HandleGetUser(respose http.ResponseWriter, request *http.Request) {
    id := request.PathValue("id")
    respString := "Get user with id: " + id
    respose.Write([]byte(respString))
}

func HandlePostUser(respose http.ResponseWriter, request *http.Request) {
    respose.Write([]byte("Add user"))
}

func HandleDeleteUser(respose http.ResponseWriter, request *http.Request) {
    id := request.PathValue("id")
    respString := "Delete user with id: " + id
    respose.Write([]byte(respString))
}