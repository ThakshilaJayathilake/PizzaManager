import axios from "axios";
import { Item } from "../models/Item";
import { Invoice } from "../models/Invoice";

const API_BASE_URL = "http://localhost:5000";

export const getItems = async (): Promise<Item[]> => {
  const response = await axios.get(`${API_BASE_URL}/items`);
  return response.data as Item[];;
};

export const createItem = async (item: any) => {
  const response = await axios.post(`${API_BASE_URL}/items`, item);
  return response.data;
};

export const getInvoices = async (): Promise<Invoice[]> => {
  const response = await axios.get(`${API_BASE_URL}/invoices`);
  return response.data as Invoice[];
};

export const createInvoice = async (invoice: any) => {
  const response = await axios.post(`${API_BASE_URL}/invoices`, invoice);
  return response.data;
};
