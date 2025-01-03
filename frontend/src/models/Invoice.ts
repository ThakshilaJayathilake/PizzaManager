export interface InvoiceItem {
    id: number;
    itemId: number;
    invoiceId: number;
    quantity: number;
    subtotal: number;
  }
  
  export interface Invoice {
    id: number;
    customerName: string;
    items: InvoiceItem[];
    tax: number;
    total: number;
  }
  