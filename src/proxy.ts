import { chainMiddleware } from './middlewares/chain';
import { withNonce } from './middlewares/with-nonce';
import { withCSP } from './middlewares/with-csp';
import { withPrefersColorScheme } from './middlewares/with-prefers-color-scheme';
import { withAuth } from './middlewares/with-auth-middleware';
import { withI18n } from './middlewares/with-i18n-middleware';

export default chainMiddleware([
  withNonce,
  withCSP,
  withPrefersColorScheme,
  withAuth,
  withI18n,
]);

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
