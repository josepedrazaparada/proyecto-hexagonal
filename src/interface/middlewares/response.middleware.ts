import { Request, Response, NextFunction } from 'express';
import ApplicationResponse from '../../domain/responses/ApplicationResponse';

const responseMiddleware = (response: ApplicationResponse, _req: Request, res: Response, next: NextFunction) => {
  res.status(response.getResponse().code).json(response.getResponse());
  next();
};

export default responseMiddleware;
