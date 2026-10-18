# Authentication

Use Clerk as the sole authentication provider for this application. Do not add another auth provider or implement custom credentials, sessions, or token handling.

## Route behavior

- `/dashboard` is private. Require an authenticated Clerk user before rendering protected content or accessing protected data; client-side checks alone are not sufficient.
- Redirect unauthenticated dashboard visitors to Clerk sign-in, presented as a modal.
- Redirect authenticated visitors from `/` to `/dashboard`.

## Sign-in and sign-up

- All sign-in and sign-up flows must use Clerk and open in a modal.
- Use Clerk's modal presentation for sign-in and sign-up triggers. Do not render standalone sign-in or sign-up pages.
- Keep Clerk session and user state as the source of truth; do not duplicate it in custom auth state.

## Implementation

- Use the existing Clerk provider and middleware integration, and enforce authorization at the server or middleware boundary where protected routes and data are handled.
- When changing Clerk integration or route protection, inspect the current Next.js and Clerk documentation installed with the project and verify both authenticated and unauthenticated navigation.