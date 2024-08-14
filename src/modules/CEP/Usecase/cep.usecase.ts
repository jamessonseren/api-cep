import { api } from "../../../axios/config";
import { CustomError } from "../../../errors/custom.error";
import { OutputCepDTO } from "../dto/cep.dto";

export class CepUsecase {
    constructor() { }

    async execute(cep: string) {

        //awesomecep api call
        try {

            const awesomecep = await api.get(`https://cep.awesomeapi.com.br/json/${cep}`)

            return {
                cep: awesomecep.data.cep,
                rua: awesomecep.data.address_name,
                bairro: awesomecep.data.district,
                cidade: awesomecep.data.city,
                estado: awesomecep.data.state,
                lat: awesomecep.data.lat,
                long: awesomecep.data.lng,
                cidade_ibge: awesomecep.data.city_ibge,
                ddd: awesomecep.data.ddd
            }
        } catch (err: any) {
        }
        
        //via cep api call
        try {
            const viacep = await api.get(`https://viacep.com.br/ws/${cep}/json/`)
            return {
                cep: viacep.data.cep,
                rua: viacep.data.logradouro,
                bairro: viacep.data.bairro,
                cidade: viacep.data.localidade,
                estado: viacep.data.uf,
                lat: '',
                long: '',
                cidade_ibge: viacep.data.ibge,
                ddd: viacep.data.ddd
            }

        } catch (err: any) {
        }




        throw new CustomError("Não foi possível buscar a api", 400)
    }


}