import { Owner } from "src/owner/entities/owner.entity"
import { Carcompany } from "../entities/carcompany.entity"

export class CreateCarcompanyDto {

    carcompanyname: string
    companydescription:string
    owner:Owner
    
}
