# Budget app

## Setup

Install all dependencies using the following command:

```bash
pnpm install
```

## Start the app

- Make sure you have a `.env` file in the root of the project with this content:

```dotenv
VITE_API_URL='http://localhost:3000/api'
```

### Development

- Start the app using `pnpm dev`. It runs on <http://localhost:5137> by default.

### Testing

- Start the cypress tests using `pnpm test`.Make sure the website is running on <http://localhost:5137>, and the backend database is seeded.

### Production

- Build the app using `pnpm build`. This will generate a `dist` folder with the compiled files.
- Serve this folder using a static service like Apache, Nginx or others.
