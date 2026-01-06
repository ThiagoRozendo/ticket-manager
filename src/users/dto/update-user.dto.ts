import { IsString, IsEmail, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Nome completo do usuário',
    example: 'João Silva Atualizado',
    minLength: 1,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Email único do usuário',
    example: 'joao.silva.novo@example.com',
    format: 'email',
  })
  @IsEmail()
  @IsOptional()
  email?: string;
}
