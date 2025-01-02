package main

import "gorm.io/gorm"

// items model
type Item struct {
	gorm.Model
	Name     string  `json:"name"`
	Category string  `json:"category"` // Pizza, Topping, Beverage
	Price    float64 `json:"price"`
}

// invoices model
type Invoice struct {
	gorm.Model
	CustomerName string       `json:"customerName"`
	Items        []InvoiceItem `gorm:"foreignKey:InvoiceID" json:"items"`
	Tax          float64      `json:"tax"`
	Total        float64      `json:"total"`
}

// since 1-many 
type InvoiceItem struct {
	gorm.Model
	InvoiceID uint    `json:"invoiceId"`
	ItemID    uint    `json:"itemId"`
	Quantity  int     `json:"quantity"`
	Subtotal  float64 `json:"subtotal"`
}
