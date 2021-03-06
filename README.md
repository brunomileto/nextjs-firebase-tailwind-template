This is a [Next.js](https://nextjs.org/) template bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This template uses [TailwindCSS](https://tailwindcss.com/) and [Radix](https://www.radix-ui.com/) and [HeadlessUI] (https://headlessui.dev/) for CSS-in-JS, [Firebase Firestore](https://firebase.google.com/) as database, [SWR](https://swr.vercel.app/) for data-fetching and [Jest](https://jestjs.io/), [Testing Library](https://testing-library.com/) and [Cypress](https://www.cypress.io/) for tests.

## Getting Started

First, install de dependecies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology stack:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://github.com/facebook/react)
- [Next.js](https://github.com/zeit/next.js)
- [Firebase Firestore & Auth](https://firebase.google.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [HeadlessUI](https://headlessui.dev/)
- [Radix](https://www.radix-ui.com/)
- [SWR](https://swr.vercel.app/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
- [Cypress](https://www.cypress.io/)
- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)

## Firebase Configuration

#### Step 1. Create [Firebase account](https://console.firebase.google.com)

<p align='center'>
  <img src='https://raw.githubusercontent.com/suevalov/next-blog-firestore/master/docs/create-firebase-project.png' width='300' alt='Create Firebase account'>
</p>

#### Step 2. Setup Authentication Method

- Click **Set up sign-in method** on Authentication section.
- Enable **just** Google authentication provider.
- Add your domain (if you have one) to **Authorized domains**.

<p align='center'>
  <img src='https://raw.githubusercontent.com/suevalov/next-blog-firestore/master/docs/setup-authentication.png' width='300' alt='Setup authentication'>
</p>

#### Step 3. Create Firestore database

- Go to **Database** section and create Firestore instance.

<p align='center'>
  <img src='https://raw.githubusercontent.com/suevalov/next-blog-firestore/master/docs/create-firestore.png' width='300' alt='Create Firestore database'>
</p>

#### Step 4. Set up Firebase secret keys for our app.

- Create **`.env`** at the root of the project. Do not commit this file. It is personal data that should not be available for everyone.
- Go to **Project settings** in Firebase console (click on the gear icon next to **Project Overview**).
- Copy data from this page to **`.env`** in the following format:

```bash
F_PROJECT_ID=<your Project ID>
F_AUTH_DOMAIN=<your Project ID>.firebaseapp.com
F_API_KEY=<your Web API Key>
```

#### Step 5. Set up Firebase Admin SDK key for importing/exporting data from database.

In order to be able to initialize database with initial seed we need to generate private Firebase Admin service key.

- Go to **Project Settings** > **Service Accounts** and click **Generate new private key** button.
- Save downloaded file as **`firebase-service-key.json`** at project root.
  \*\* Do not commit this file. It's added to `.gitignore` by default.

#### Step 7. Initialize.

We almost finished. Let's initialize what we have done.

```bash
yarn
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## License

Licensed under the MIT License, Copyright ?? 2022-present Bruno M. D. Assun????o

See [LICENSE](./LICENSE) for more information.
