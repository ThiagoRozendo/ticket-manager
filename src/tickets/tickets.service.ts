import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket, Prisma } from '@prisma/client';

@Injectable()
export class TicketsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const userExists = await this.prisma.user.findUnique({
      where: { id: createTicketDto.userId },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${createTicketDto.userId} not found`);
    }

    return this.prisma.ticket.create({
      data: {
        showName: createTicketDto.showName,
        eventDate: new Date(createTicketDto.eventDate),
        price: new Prisma.Decimal(createTicketDto.price),
        userId: createTicketDto.userId,
      },
      include: {
        user: true,
      },
    });
  }

  async findAll(): Promise<Ticket[]> {
    return this.prisma.ticket.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string): Promise<Ticket> {
    const ticket = await this.prisma.ticket.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!ticket) {
      throw new NotFoundException(`Ticket with ID ${id} not found`);
    }

    return ticket;
  }

  async findByUserId(userId: string): Promise<Ticket[]> {
    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return this.prisma.ticket.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
      },
    });
  }

  async update(id: string, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    await this.findOne(id);

    if (updateTicketDto.userId) {
      const userExists = await this.prisma.user.findUnique({
        where: { id: updateTicketDto.userId },
      });

      if (!userExists) {
        throw new NotFoundException(`User with ID ${updateTicketDto.userId} not found`);
      }
    }

    const data: any = { ...updateTicketDto };
    
    if (updateTicketDto.eventDate) {
      data.eventDate = new Date(updateTicketDto.eventDate);
    }

    if (updateTicketDto.price !== undefined) {
      data.price = new Prisma.Decimal(updateTicketDto.price);
    }

    return this.prisma.ticket.update({
      where: { id },
      data,
      include: {
        user: true,
      },
    });
  }

  async remove(id: string): Promise<void> {
    await this.findOne(id);
    await this.prisma.ticket.delete({ where: { id } });
  }
}
