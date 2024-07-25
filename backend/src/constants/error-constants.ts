export const STATUS = {
  NOT_FOUND: 404,
  CREATED: 201,
  OK: 200,
  CONFLICT: 409,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NO_CONTENT: 204,
} as const;

export const STATUS_MESSAGE = {
  SUCCESS: 'Success',
  ERROR: 'Error',
  CONFLICT: 'Conflict',
  NOT_FOUND: 'Not Found',
  UNAUTHORIZED: 'Unauthorized',
  BAD_REQUEST: 'Bad Request',
  NO_CONTENT: 'No Content',
} as const;
