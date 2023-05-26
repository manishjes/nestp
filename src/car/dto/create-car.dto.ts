import { IsNotEmpty, IsNumberString, IsString,   } from "class-validator"
import { Carcompany } from "src/carcompany/entities/carcompany.entity"
import { Owner } from "src/owner/entities/owner.entity"

export class CreateCarDto {
 


    @IsNotEmpty()
    @IsString()
    
    carname:string


    @IsNotEmpty()
    cardescription:string 
 
    @IsNotEmpty()
    @IsNumberString({}, { message: 'Please enter correct number' })
    carqty:number

    carcompany:Carcompany

    owner:Owner
}   
 