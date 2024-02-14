This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Purpose
The purpose of this project is to demonstrate how to create a ToDo App using Firebase Authentication, Firebase Firestore, and Google Cloud Functions while leveraging features offered by NextJS 14 such as the new App Router routing convention, parallel routing, server actions, and more.

## YouTube
The development of this app was recorded and published via Code Hackery YouTube Channel.  Here is the link to the playlist.

##  Things to know before you get started
- The main <b>app</b> folder is final using server actions.  As of February 13, 2024, server actions does not work via Firebase Hosting.  However, it does work when hosted on Vercel, which is demonstrated in the YouTube video.
- The <b>app-firebase-hosting</b> folder contains code that leverages Cloud Functions so that the app can work when hosted on Firebase.  Unfortunately, that means it's not using server actions.  This was a great opportunity to demonstrate the use of Google Cloud functions as an alternative solution.  You can access the Cloud Functions code here.
-  If you want to use the <b>app-firebase-hosting</b> folder, simply rename the current <b>app</b> folder to something different (e.g. app-main) and then rename the <b>app-firebase-hosting</b> folder to just <b>app</b>.

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
