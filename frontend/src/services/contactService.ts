import api from "../config/axios";

export const getContacts = async () => {
  const response = await api.get("/contacts");
  return response.data.contacts;
};

export const getContact = async (id: string) => {
  const response = await api.get(`/contacts/${id}`);
  return response.data.contact;
};

export const createContact = async (data: any) => {
  const response = await api.post("/contacts", data);
  return response.data.contact;
};

export const updateContact = async (
  id: string,
  data: any
) => {
  const response = await api.put(`/contacts/${id}`, data);
  return response.data.contact;
};

export const deleteContact = async (id: string) => {
  const response = await api.delete(`/contacts/${id}`);
  return response.data;
};