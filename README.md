# React Toastify Pro

A fully-featured toast notification system built with React, offering customizable toast types, auto-dismiss functionality, progress indicators, and queue management. Designed for ease of use, accessibility, and smooth user experience.

## Features

- **Multiple Toast Types**: `success`, `info`, `warning`, `error` with distinct colors and styles.
- **Auto-Close**: Toasts automatically disappear after a configurable duration.
- **Progress Bar**: Visual indication of the remaining time before a toast closes.
- **Queue Management**: Limit the number of visible toasts (e.g., max 3). Oldest toast fades out automatically when new ones appear.
- **Custom Duration per Toast**: Each type can have its own timeout duration.
  - Example: success (3s), info (5s), warning (7s), error (10s)
- **Reusable Toast Hook**: Easily trigger toasts from any component using a custom `useToast()` hook.
- **Close Button**: Users can manually dismiss any toast.
- **Accessibility**: Screen reader friendly with `role="alert"` and `aria-live="assertive"` attributes.
- **Smooth Animations**: Toasts slide in/out gracefully with CSS animations.
