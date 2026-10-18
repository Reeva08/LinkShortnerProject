# UI Components

Use shadcn/ui for all application UI. Do not create custom UI components or hand-build controls and widgets.

## Component usage

- Use the existing components from `@/components/ui` and compose them directly in the page or feature that needs them.
- If a required shadcn/ui component is not present, add the official component using the shadcn CLI or registry. Do not create an app-specific substitute.
- Follow the project's configured shadcn style (`base-nova`), aliases, and component APIs. Do not replace or fork shadcn implementations to create a separate design system.
- Use semantic HTML for page structure and content, but use shadcn/ui components for interactive controls and other UI elements.