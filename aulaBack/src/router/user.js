import {Router} from 'express'
import { ClientContrller } from '../controllers/clientContrller'
const clientRota = Router()
clientRota.post("/criar",ClientContrller.criar);
clientRota.get("/buscar",ClientContrller.pegarTodos)

