// Application configuration

export function getConfig() {
  return {
    cspEnabled: process.env.NEXT_PUBLIC_CSP_ENABLED === 'true' || false,
  };
}

export function getCSPHeader(nonce: string | null) {
  const cspDirectives = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline'`,
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ];

  return cspDirectives.join('; ');
}
