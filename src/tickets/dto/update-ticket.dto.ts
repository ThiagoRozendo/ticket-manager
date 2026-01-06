import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsNumber, IsUUID } from 'class-validator';

export class UpdateTicketDto {
  @ApiPropertyOptional({
    description: 'Name of the show',
    example: 'Rock Concert 2026',
  })
  @IsString()
  @IsOptional()
  showName?: string;

  @ApiPropertyOptional({
    description: 'Date of the event',
    example: '2026-12-31',
  })
  @IsDateString()
  @IsOptional()
  eventDate?: string;

  @ApiPropertyOptional({
    description: 'Price of the ticket',
    example: 150.00,
  })
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({
    description: 'ID of the user who owns the ticket',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  @IsOptional()
  userId?: string;
}
