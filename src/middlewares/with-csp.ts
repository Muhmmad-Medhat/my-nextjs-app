// https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy

import { NextFetchEvent, NextRequest } from 'next/server';
import { MiddlewareFactory } from './types';
import { getConfig, getCSPHeader } from '@/middlewares/config';

export const withCSP: MiddlewareFactory = (next) => {
  const config = getConfig();
  return async (request: NextRequest, event: NextFetchEvent) => {
    if (config.cspEnabled && request.headers.get('x-nonce') != null) {
      const nonce = request.headers.get('x-nonce');
      const cspHeader = getCSPHeader(nonce);
      // CSP headers should only be set on the response, not the request.
      // The browser reads CSP directives from response headers to enforce security policies.
      const response = await next(request, event);
      response.headers.set('Content-Security-Policy', cspHeader);
      return response;
    } else {
      return next(request, event);
    }
  };
};
