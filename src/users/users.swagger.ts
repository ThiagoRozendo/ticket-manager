import { applyDecorators } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse as _ApiResponse,
  ApiResponseOptions,
  ApiParam,
} from '@nestjs/swagger';
import { User } from '@prisma/client';

const ApiResponse = (options: ApiResponseOptions) => _ApiResponse(options);

export function CreateUserApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({
      summary: 'Criar novo usuário',
      description:
        'Cria um novo usuário no sistema. O email deve ser único. Retorna o usuário criado com ID e data de criação.',
    }),
    ApiResponse({
      status: 201,
      description: 'Usuário criado com sucesso.',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'string', example: '550e8400-e29b-41d4-a716-446655440000' },
          name: { type: 'string', example: 'João Silva' },
          email: { type: 'string', example: 'joao.silva@example.com' },
          createdAt: { type: 'string', example: '2026-01-06T18:40:20.000Z' },
        },
      },
    }),
    ApiResponse({
      status: 400,
      description: 'Dados inválidos fornecidos.',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            items: { type: 'string' },
            example: ['email must be an email', 'name should not be empty'],
          },
          error: { type: 'string', example: 'Bad Request' },
          statusCode: { type: 'number', example: 400 },
        },
      },
    }),
    ApiResponse({
      status: 409,
      description: 'Email já está em uso.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Email already exists' },
          statusCode: { type: 'number', example: 409 },
        },
      },
    }),
    ApiResponse({
      status: 500,
      description: 'Erro interno do servidor.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Internal server error' },
        },
      },
    }),
  );
}

export function GetAllUsersApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({
      summary: 'Listar todos os usuários',
      description:
        'Retorna a lista completa de usuários cadastrados no sistema, ordenados por data de criação (mais recentes primeiro).',
    }),
    ApiResponse({
      status: 200,
      description: 'Lista de usuários retornada com sucesso.',
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string', example: '550e8400-e29b-41d4-a716-446655440000' },
            name: { type: 'string', example: 'João Silva' },
            email: { type: 'string', example: 'joao.silva@example.com' },
            createdAt: { type: 'string', example: '2026-01-06T18:40:20.000Z' },
          },
        },
      },
    }),
    ApiResponse({
      status: 500,
      description: 'Erro interno do servidor.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Internal server error' },
        },
      },
    }),
  );
}

export function GetUserByIdApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({
      summary: 'Obter usuário por ID',
      description:
        'Retorna os detalhes completos de um usuário específico através do seu ID.',
    }),
    ApiParam({
      name: 'id',
      type: 'string',
      description: 'ID único do usuário (UUID)',
      example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    ApiResponse({
      status: 200,
      description: 'Usuário encontrado com sucesso.',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'string', example: '550e8400-e29b-41d4-a716-446655440000' },
          name: { type: 'string', example: 'João Silva' },
          email: { type: 'string', example: 'joao.silva@example.com' },
          createdAt: { type: 'string', example: '2026-01-06T18:40:20.000Z' },
        },
      },
    }),
    ApiResponse({
      status: 404,
      description: 'Usuário não encontrado.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'User not found' },
          statusCode: { type: 'number', example: 404 },
        },
      },
    }),
    ApiResponse({
      status: 500,
      description: 'Erro interno do servidor.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Internal server error' },
        },
      },
    }),
  );
}

export function UpdateUserApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({
      summary: 'Atualizar usuário',
      description:
        'Atualiza os dados de um usuário existente. Todos os campos são opcionais. O email, se fornecido, deve ser único no sistema.',
    }),
    ApiParam({
      name: 'id',
      type: 'string',
      description: 'ID único do usuário (UUID)',
      example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    ApiResponse({
      status: 200,
      description: 'Usuário atualizado com sucesso.',
      schema: {
        type: 'object',
        properties: {
          id: { type: 'string', example: '550e8400-e29b-41d4-a716-446655440000' },
          name: { type: 'string', example: 'João Silva Atualizado' },
          email: { type: 'string', example: 'joao.silva.novo@example.com' },
          createdAt: { type: 'string', example: '2026-01-06T18:40:20.000Z' },
        },
      },
    }),
    ApiResponse({
      status: 400,
      description: 'Dados inválidos fornecidos.',
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'array',
            items: { type: 'string' },
            example: ['email must be an email'],
          },
          error: { type: 'string', example: 'Bad Request' },
          statusCode: { type: 'number', example: 400 },
        },
      },
    }),
    ApiResponse({
      status: 404,
      description: 'Usuário não encontrado.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'User not found' },
          statusCode: { type: 'number', example: 404 },
        },
      },
    }),
    ApiResponse({
      status: 409,
      description: 'Email já está em uso por outro usuário.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Email already exists' },
          statusCode: { type: 'number', example: 409 },
        },
      },
    }),
    ApiResponse({
      status: 500,
      description: 'Erro interno do servidor.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Internal server error' },
        },
      },
    }),
  );
}

export function DeleteUserApiResponsesOperation() {
  return applyDecorators(
    ApiOperation({
      summary: 'Deletar usuário',
      description:
        'Remove permanentemente um usuário do sistema. Esta ação não pode ser desfeita.',
    }),
    ApiParam({
      name: 'id',
      type: 'string',
      description: 'ID único do usuário (UUID)',
      example: '550e8400-e29b-41d4-a716-446655440000',
    }),
    ApiResponse({
      status: 204,
      description: 'Usuário deletado com sucesso. Sem conteúdo retornado.',
    }),
    ApiResponse({
      status: 404,
      description: 'Usuário não encontrado.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'User not found' },
          statusCode: { type: 'number', example: 404 },
        },
      },
    }),
    ApiResponse({
      status: 500,
      description: 'Erro interno do servidor.',
      schema: {
        type: 'object',
        properties: {
          message: { type: 'string', example: 'Internal server error' },
        },
      },
    }),
  );
}
