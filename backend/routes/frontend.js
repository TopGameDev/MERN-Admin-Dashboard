import express from "express"
import { getProducts, getCustomers, getTransactions } from "../controllers/frontend.js"

const router = express.Router()

router.get("/products", getProducts)
router.get("/customers", getCustomers)
router.get("/transactions", getTransactions)

export default router;