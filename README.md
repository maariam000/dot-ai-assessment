This is a [Next.js] (https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Then open http://localhost:3000 in your browser to see the application in action.

You can begin editing the app by modifying the app/page.tsx file. Changes are reflected automatically.

## Assumptions Made
- Default Product Image: The API endpoint for images returns a 404 error, so a default image is used for all products.

## Features Implemented
- Cart Management: Implemented using Context API, allowing items to be added, removed, cleared, and counted.
- Loading State: Added loading indicators to enhance user experience during data fetches.
- Error Handling: An error screen has been implemented to manage and display errors effectively.
- Toast Messages: Added toast notifications for user actions such as adding items to the cart.
- Link Management: Ensured all buttons and links are functional and redirect to appropriate pages.
# Styling and State Management
- Tailwind CSS: Used for rapid and responsive styling throughout the application.
- TanStack Query: Used for managing server state, data fetching, caching, and synchronization.

# Improvements Planned
## If given more time, the following improvements would be implemented:

- Media Responsiveness: Enhance media responsiveness for improved usability on all devices.
Form Validation: Add validation to ensure correct data submission.
- Unit Testing: Increase code reliability by adding comprehensive unit tests.
- Enhanced Page Rendering: Optimize page loading and transition for a more seamless experience.
