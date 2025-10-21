import { NextFetchEvent, NextRequest } from 'next/server';
import { MiddlewareFactory } from './types';

export const withNonce: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
    request.headers.set('x-nonce', nonce);
    return next(request, event);
  };
};
