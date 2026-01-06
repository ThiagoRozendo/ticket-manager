import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';

export function CreateTicketApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({ 
      summary: 'Create a new ticket',
      description: 'Creates a new ticket for a show and associates it with a user'
    }),
    ApiResponse({
      status: 201,
      description: 'Ticket successfully created',
      schema: {
        example: {
          id: '123e4567-e89b-12d3-a456-426614174000',
          showName: 'Rock Concert 2026',
          eventDate: '2026-12-31T00:00:00.000Z',
          price: '150.00',
          userId: '987e4567-e89b-12d3-a456-426614174000',
          createdAt: '2026-01-06T19:00:00.000Z',
          user: {
            id: '987e4567-e89b-12d3-a456-426614174000',
            name: 'John Doe',
            email: 'john@example.com',
            createdAt: '2026-01-06T18:00:00.000Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Invalid request data',
      schema: {
        example: {
          statusCode: 400,
          message: ['showName should not be empty', 'price must be a number'],
          error: 'Bad Request'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'User not found',
      schema: {
        example: {
          statusCode: 404,
          message: 'User with ID 987e4567-e89b-12d3-a456-426614174000 not found',
          error: 'Not Found'
        }
      }
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error'
    })
  );
}

export function GetAllTicketsApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({ 
      summary: 'Get all tickets',
      description: 'Returns a list of all tickets ordered by creation date (newest first)'
    }),
    ApiResponse({
      status: 200,
      description: 'List of tickets retrieved successfully',
      schema: {
        example: [
          {
            id: '123e4567-e89b-12d3-a456-426614174000',
            showName: 'Rock Concert 2026',
            eventDate: '2026-12-31T00:00:00.000Z',
            price: '150.00',
            userId: '987e4567-e89b-12d3-a456-426614174000',
            createdAt: '2026-01-06T19:00:00.000Z',
            user: {
              id: '987e4567-e89b-12d3-a456-426614174000',
              name: 'John Doe',
              email: 'john@example.com',
              createdAt: '2026-01-06T18:00:00.000Z'
            }
          }
        ]
      }
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error'
    })
  );
}

export function GetTicketByIdApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({ 
      summary: 'Get a ticket by ID',
      description: 'Returns a single ticket with the specified ID'
    }),
    ApiParam({
      name: 'id',
      description: 'Ticket ID (UUID)',
      example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    ApiResponse({
      status: 200,
      description: 'Ticket retrieved successfully',
      schema: {
        example: {
          id: '123e4567-e89b-12d3-a456-426614174000',
          showName: 'Rock Concert 2026',
          eventDate: '2026-12-31T00:00:00.000Z',
          price: '150.00',
          userId: '987e4567-e89b-12d3-a456-426614174000',
          createdAt: '2026-01-06T19:00:00.000Z',
          user: {
            id: '987e4567-e89b-12d3-a456-426614174000',
            name: 'John Doe',
            email: 'john@example.com',
            createdAt: '2026-01-06T18:00:00.000Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Ticket not found',
      schema: {
        example: {
          statusCode: 404,
          message: 'Ticket with ID 123e4567-e89b-12d3-a456-426614174000 not found',
          error: 'Not Found'
        }
      }
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error'
    })
  );
}

export function GetTicketsByUserIdApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({ 
      summary: 'Get all tickets of a specific user',
      description: 'Returns all tickets associated with a specific user ID'
    }),
    ApiParam({
      name: 'userId',
      description: 'User ID (UUID)',
      example: '987e4567-e89b-12d3-a456-426614174000'
    }),
    ApiResponse({
      status: 200,
      description: 'Tickets retrieved successfully',
      schema: {
        example: [
          {
            id: '123e4567-e89b-12d3-a456-426614174000',
            showName: 'Rock Concert 2026',
            eventDate: '2026-12-31T00:00:00.000Z',
            price: '150.00',
            userId: '987e4567-e89b-12d3-a456-426614174000',
            createdAt: '2026-01-06T19:00:00.000Z',
            user: {
              id: '987e4567-e89b-12d3-a456-426614174000',
              name: 'John Doe',
              email: 'john@example.com',
              createdAt: '2026-01-06T18:00:00.000Z'
            }
          }
        ]
      }
    }),
    ApiResponse({
      status: 404,
      description: 'User not found',
      schema: {
        example: {
          statusCode: 404,
          message: 'User with ID 987e4567-e89b-12d3-a456-426614174000 not found',
          error: 'Not Found'
        }
      }
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error'
    })
  );
}

export function UpdateTicketApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({ 
      summary: 'Update a ticket',
      description: 'Updates ticket information. All fields are optional.'
    }),
    ApiParam({
      name: 'id',
      description: 'Ticket ID (UUID)',
      example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    ApiResponse({
      status: 200,
      description: 'Ticket successfully updated',
      schema: {
        example: {
          id: '123e4567-e89b-12d3-a456-426614174000',
          showName: 'Rock Concert 2026 - Updated',
          eventDate: '2026-12-31T00:00:00.000Z',
          price: '180.00',
          userId: '987e4567-e89b-12d3-a456-426614174000',
          createdAt: '2026-01-06T19:00:00.000Z',
          user: {
            id: '987e4567-e89b-12d3-a456-426614174000',
            name: 'John Doe',
            email: 'john@example.com',
            createdAt: '2026-01-06T18:00:00.000Z'
          }
        }
      }
    }),
    ApiResponse({
      status: 400,
      description: 'Invalid request data',
      schema: {
        example: {
          statusCode: 400,
          message: ['price must be a number'],
          error: 'Bad Request'
        }
      }
    }),
    ApiResponse({
      status: 404,
      description: 'Ticket or user not found',
      schema: {
        example: {
          statusCode: 404,
          message: 'Ticket with ID 123e4567-e89b-12d3-a456-426614174000 not found',
          error: 'Not Found'
        }
      }
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error'
    })
  );
}

export function DeleteTicketApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({ 
      summary: 'Delete a ticket',
      description: 'Deletes a ticket from the system'
    }),
    ApiParam({
      name: 'id',
      description: 'Ticket ID (UUID)',
      example: '123e4567-e89b-12d3-a456-426614174000'
    }),
    ApiResponse({
      status: 204,
      description: 'Ticket successfully deleted'
    }),
    ApiResponse({
      status: 404,
      description: 'Ticket not found',
      schema: {
        example: {
          statusCode: 404,
          message: 'Ticket with ID 123e4567-e89b-12d3-a456-426614174000 not found',
          error: 'Not Found'
        }
      }
    }),
    ApiResponse({
      status: 500,
      description: 'Internal server error'
    })
  );
}
