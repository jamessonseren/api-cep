import { Request, Response } from "express";
import { CepUsecase } from "../Usecase/cep.usecase";

export class CepController{
    constructor(){}

    async handle(req: Request, res: Response){
        try{
            const cep = req.params.cep as string

            const usecase = new CepUsecase()
    
            const result = await usecase.execute(cep)
    
            return res.json(result)
        }catch(err: any){
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
        
    }
}