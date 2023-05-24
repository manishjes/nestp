import { CanActivate, Injectable } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common";



@Injectable()
export class CarGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        return true
    }

}