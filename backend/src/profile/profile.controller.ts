import {Controller, Get, Post, UseGuards, Req, UnauthorizedException} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {RequestWithUser} from '../types/request-with-user';
import {UserDTO} from "../user/user.dto";

@Controller('profile')
export class ProfileController {
    @Get('get')
    @UseGuards(AuthGuard('jwt'))
    getProfile(@Req() req: RequestWithUser): UserDTO {
        return {id: req.user.id, email: req.user.email, role: req.user.role};
    }
}
