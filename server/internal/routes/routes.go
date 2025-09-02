package routes

import "net/http"

func StartRoutes() *http.ServeMux {
    mux := http.NewServeMux();

    mux.HandleFunc("/", indexHandler)
    RegisterUserHandler(mux)

    return mux
}

func indexHandler(respose http.ResponseWriter, request *http.Request) {
    respose.Write([]byte("Server of GO-REACT-TODO-APP works!"))
}