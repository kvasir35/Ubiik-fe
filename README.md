# Ubiik Interview Test - Frontend

Small React Front-end to simulate message send to different services

## Quick Start

### Prerequisites

-   Node.js 20+
-   Backend server running on `http://localhost:8000`

### Installation

1. **Clone and setup**

```bash
git clone <repository-url>
cd ubiik-frontend
npm install
```

2. **Environment setup**
   Create `.env` file:

```bash
VITE_API_DEVICE=http://localhost:8001
VITE_API_MESSAGE_GATEAWAY=http://localhost:8000
```

3. **Start development server**

```bash
npm run dev
```

Application runs on `http://localhost:5173`

## Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Backend Integration

Requires the Services "device-service", "message-gateaway" and "reading-service" to be running.

## License

MIT License

**Contact**: yohann.person@hotmail.fr

---

## Related Repositories

-   **Backend**: [ubiik-services](https://github.com//kolo-ai-backend)
