# Pizza Manager 
## - Billing & Item Management System

This project is a Billing & Item Management system for a Pizza Shop. It allows the shop to manage items (e.g., pizzas, toppings, beverages) and create invoices for customers. The system includes CRUD operations for both items and invoices.

## Features
- Add, update, and delete items in the menu (Pizza, Toppings, Beverages).
- Manage invoices for customers.
- Automatically calculate item totals and taxes for each invoice.
- Store and retrieve invoice details with associated items.
- Built with Go (Golang) and GORM for MySQL database management.

## Requirements
- Go 1.23+ (for building and running the backend)
- MySQL (or Docker for MySQL)
- Docker (optional for running MySQL in a container)

## Installation and Setup

### Step 1: Clone the repository
```bash
git clone https://github.com/ThakshilaJayathilake/PizzaManager.git
```

### Step 2: Navigate to the backend folder
```bash
cd PizzaManager/backend
```

### Step 3: Set up the Go Modules
```bash
go mod tidy
```

### Step 4: Run MySQL

Option 1: Run MySQL Locally
Install MySQL and create a database pizza_shop.

Option 2: Run MySQL with Docker
```bash
docker-compose up -d
```

### Step 5: Run the Backend Application
```bash
go build
.\backend.exe
```



