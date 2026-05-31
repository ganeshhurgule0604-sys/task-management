import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[
    JwtModule.registerAsync({
      inject:[ConfigService],
      useFactory:(configService:ConfigService)=>({
        secret:configService.get<string>('SECRET'),
        signOptions:{
          expiresIn:'1d'
        }
      }) ,
    })
  ],
  controllers: [AuthController],
  providers:[JwtStrategy]
})
export class AuthModule {}
