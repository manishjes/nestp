import { IsNotEmpty, IsNumberString, IsString,   } from "class-validator"

export class CreateCarDto {
 


    @IsNotEmpty()
    @IsString()
    
    carname:string


    @IsNotEmpty()
    cardescription:string 
 
    @IsNotEmpty()
    @IsNumberString({}, { message: 'Please enter correct number' })
    carqty:number
}   
 