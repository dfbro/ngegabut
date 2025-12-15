# Application Blueprint

## Overview

This is a Next.js application built with the App Router, providing a modern, server-centric approach to building web applications. The project is integrated with Material-UI (MUI) for a rich set of UI components and follows best practices for styling, font management, and component architecture.

## Implemented Features & Design

This section documents all the features, styles, and design choices implemented in the application from the initial version to the current one.

### 1. Project Structure & Core Setup

- **Framework:** Next.js with App Router.
- **Routing:** File-based routing located in the `src/app` directory.
- **Initial Route:** An `about` page has been created at `src/app/about/page.tsx`.

### 2. UI & Styling

- **UI Library:** Material-UI (MUI) is fully integrated.
- **Styling Engine:** Emotion (`@emotion/react`, `@emotion/styled`) is used, as it's the default for MUI.
- **Utility-First CSS:** **Tailwind CSS is fully configured and can be used alongside MUI.**
    - Utility classes can be added via the `className` prop on any component.
    - The `globals.css` file includes the necessary Tailwind directives (`@import "tailwindcss";`).
    - Demonstrated combining `next/font` classes with multiple Tailwind utility classes (`text-blue-600`, `drop-shadow-lg`).
- **Server-Side Rendering (SSR) for Styles:** A `ThemeRegistry` component (`src/components/ThemeRegistry.tsx`) has been implemented to correctly handle MUI styles with Next.js App Router, preventing style flashes on initial load.
- **Layout:** The root layout (`src/app/layout.tsx`) is wrapped with the `ThemeRegistry` to provide the MUI theme and CSS baseline to the entire application.

### 3. Component Library

- **MUI Components Used:**
    - `Container`: To center and constrain content width.
    - `Box`: For general layout and styling purposes (can be styled with `sx` or Tailwind `className`).
    - `Typography`: For all text content, ensuring consistent typography.
    - `Button`: Demonstrated `contained`, `outlined`, and `text` variants.
    - `Stack`: Used to arrange components (like buttons) in a flexbox layout with consistent spacing.

### 4. Typography & Fonts

- **Primary Font Management:** Handled via the MUI theme file at `src/theme.ts`.
- **Default Application Font:** The primary font for the entire application is **Poppins**, loaded efficiently via `next/font/google`.
- **Local Custom Font:**
    - A system has been implemented to use custom local font files.
    - A dedicated font management file is at `src/styles/fonts.ts`.
    - **Current Font:** The active custom font is `ms.ttf`, loaded from `public/ms.ttf`.
    - This custom font is applied specifically to the main title on the `About` page.

## Current Plan

- No active plan. Awaiting next user request.
