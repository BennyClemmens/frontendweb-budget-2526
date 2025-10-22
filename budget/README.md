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

### Production

- Build the app using `pnpm build`. This will generate a `dist` folder with the compiled files.
- Serve this folder using a static service like Apache, Nginx or others.
