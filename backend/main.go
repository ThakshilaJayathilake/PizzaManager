package main

import (
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func initializeRouter() {
	r := mux.NewRouter()

	// Item Management
	r.HandleFunc("/items", GetItems).Methods("GET")
	r.HandleFunc("/items/{id}", GetItem).Methods("GET")
	r.HandleFunc("/items", CreateItem).Methods("POST")
	r.HandleFunc("/items/{id}", UpdateItem).Methods("PUT")
	r.HandleFunc("/items/{id}", DeleteItem).Methods("DELETE")

	// Invoice Management
	r.HandleFunc("/invoices", GetInvoices).Methods("GET")
	r.HandleFunc("/invoices/{id}", GetInvoice).Methods("GET")
	r.HandleFunc("/invoices", CreateInvoice).Methods("POST")

	// CORS handler to wrap the router
	corsHandler := handlers.CORS(
		// allow req from frontend origin
		handlers.AllowedOrigins([]string{"http://localhost:5173"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"}),
		handlers.AllowedHeaders([]string{"Content-Type"}),
	)(r)

	log.Fatal(http.ListenAndServe(":9001", corsHandler))
}

func main() {
	InitialMigration()
	initializeRouter()
}
