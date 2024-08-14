import { Router } from "express";
import { cepController } from "../modules/CEP";

const router = Router()

router.get("/address/:cep", async (request, response) => {
    await cepController.handle(request, response)
})

export { router }