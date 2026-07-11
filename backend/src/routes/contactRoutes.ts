import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";

import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/contactController";

const router = Router();

router.use(authMiddleware);

router.post("/", createContact);

router.get("/", getContacts);

router.get("/:id", getContactById);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

export default router;