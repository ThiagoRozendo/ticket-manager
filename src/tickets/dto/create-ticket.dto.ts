import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDateString, IsNumber, IsUUID } from 'class-validator';

export class CreateTicketDto {
  @ApiProperty({
    description: 'Name of the show',
    example: 'Rock Concert 2026',
  })
  @IsString()
  @IsNotEmpty()
  showName: string;

  @ApiProperty({
    description: 'Date of the event',
    example: '2026-12-31',
  })
  @IsDateString()
  @IsNotEmpty()
  eventDate: string;

  @ApiProperty({
    description: 'Price of the ticket',
    example: 150.00,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'ID of the user who owns the ticket',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}
