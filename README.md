# csiztom.com

This is the repository for my personal website / portfolio.

The idea for this project is to overengineer a personal website to a degree which might still make sense, but showcases what kind of website will take me no time to make.

I decided on SvelteKit as it provides an easy flow between backend and frontend, while it is also inegrated with Vercel. Granted, I could have made it any other way (React, AWS Lambda, Python, etc), this seemed the most appropriate.

## Developing

Once installed the VS Code extensions recommended,

Install dependencies with

```bash
npm install
```

Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
