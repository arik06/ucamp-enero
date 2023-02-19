


import  express from "express";
import { createTour  } from "./../controllers/tourController.js";
const router = express.Router();

///creacion nuevo tour

router.post('/', createTour)

//actualizar



export default router ;