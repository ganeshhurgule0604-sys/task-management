import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(configService:ConfigService){
        super(
            {
                jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
                ignoreExpiration:false,
                secretOrKey:configService.get<string>('SECRET')
            }
        )
    }
    validate(payload:any){
        return{
            userId: payload.sub,
            email: payload.email,
            role: payload.role,
        }
    }
}

