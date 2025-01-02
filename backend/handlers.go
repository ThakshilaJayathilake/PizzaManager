package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

// Item Handlers
func GetItems(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var items []Item
	DB.Find(&items)
	json.NewEncoder(w).Encode(items)
}

func GetItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var item Item
	DB.First(&item, params["id"])
	json.NewEncoder(w).Encode(item)
}

func CreateItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var item Item
	json.NewDecoder(r.Body).Decode(&item)
	DB.Create(&item)
	json.NewEncoder(w).Encode(item)
}

func UpdateItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var item Item
	DB.First(&item, params["id"])
	json.NewDecoder(r.Body).Decode(&item)
	DB.Save(&item)
	json.NewEncoder(w).Encode(item)
}

func DeleteItem(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var item Item
	DB.Delete(&item, params["id"])
	json.NewEncoder(w).Encode("Item deleted successfully!")
}

// Invoice Handlers
func GetInvoices(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var invoices []Invoice
	DB.Preload("Items").Find(&invoices)
	json.NewEncoder(w).Encode(invoices)
}

func GetInvoice(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r)
	var invoice Invoice
	DB.Preload("Items").First(&invoice, params["id"])
	json.NewEncoder(w).Encode(invoice)
}

func CreateInvoice(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var invoice Invoice
	json.NewDecoder(r.Body).Decode(&invoice)

	// Calculate total and tax
	var total float64
	for i := range invoice.Items {
		var item Item
		DB.First(&item, invoice.Items[i].ItemID)
		invoice.Items[i].Subtotal = float64(invoice.Items[i].Quantity) * item.Price
		total += invoice.Items[i].Subtotal
	}
	invoice.Tax = total * 0.1 // if mske 10% tax
	invoice.Total = total + invoice.Tax

	DB.Create(&invoice)
	json.NewEncoder(w).Encode(invoice)
}
