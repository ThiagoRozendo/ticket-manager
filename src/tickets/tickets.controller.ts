import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import {
  CreateTicketApiResponsesOperation,
  GetAllTicketsApiResponsesOperation,
  GetTicketByIdApiResponsesOperation,
  GetTicketsByUserIdApiResponsesOperation,
  UpdateTicketApiResponsesOperation,
  DeleteTicketApiResponsesOperation,
} from './tickets.swagger';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  @CreateTicketApiResponsesOperation()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get()
  @GetAllTicketsApiResponsesOperation()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  @GetTicketByIdApiResponsesOperation()
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Get('user/:userId')
  @GetTicketsByUserIdApiResponsesOperation()
  findByUserId(@Param('userId') userId: string) {
    return this.ticketsService.findByUserId(userId);
  }

  @Patch(':id')
  @UpdateTicketApiResponsesOperation()
  update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketsService.update(id, updateTicketDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @DeleteTicketApiResponsesOperation()
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(id);
  }
}
