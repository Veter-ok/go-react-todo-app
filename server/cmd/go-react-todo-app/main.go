package main

import (
	"log"
	"net/http"

	"github.com/Veter-ok/go-react-todo-app/internal/routes"
)

func main(){
    mux := routes.StartRoutes()

    err := http.ListenAndServe(":4000", mux)
    if err != nil {
        log.Fatal(err)
    }
}