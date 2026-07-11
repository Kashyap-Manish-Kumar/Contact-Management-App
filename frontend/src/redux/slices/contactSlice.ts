import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  status: string;
}

interface ContactState {
  contacts: Contact[];
  selectedContact: Contact | null;
  loading: boolean;
  search: string;
}

const initialState: ContactState = {
  contacts: [],
  selectedContact: null,
  loading: false,
  search: "",
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (
      state,
      action: PayloadAction<Contact[]>
    ) => {
      state.contacts = action.payload;
    },

    setSelectedContact: (
      state,
      action: PayloadAction<Contact | null>
    ) => {
      state.selectedContact = action.payload;
    },

    updateContact: (
      state,
      action: PayloadAction<Contact>
    ) => {
      state.contacts = state.contacts.map((contact) =>
        contact._id === action.payload._id
          ? action.payload
          : contact
      );

      state.selectedContact = action.payload;
    },

        clearContacts: (state) => {
      state.contacts = [];
      state.selectedContact = null;
      state.loading = false;
      state.search = "";
    },

    deleteContact: (
      state,
      action: PayloadAction<string>
    ) => {
      state.contacts = state.contacts.filter(
        (contact) => contact._id !== action.payload
      );

      if (state.selectedContact?._id === action.payload) {
        state.selectedContact = null;
      }
    },

    setLoading: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },

    setSearch: (
      state,
      action: PayloadAction<string>
    ) => {
      state.search = action.payload;
    },
  },
});

export const {
  setContacts,
  setLoading,
  setSelectedContact,
  updateContact,
  deleteContact,
  setSearch,
  clearContacts,
} = contactSlice.actions;

export default contactSlice.reducer;