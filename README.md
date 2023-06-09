This is a [Next.js 13.x](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run The App Locally

First, run the development server:

```bash
$ npm run dev
# or
$ yarn dev
# or
$ pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**you can change the port number if needed using `-p [port numb]` switch.**

```bash
$ yarn dev -p 3001
```
## Deployed on Liara

Check out the deployed version on [Liara](https://liara.ir/) for a more realistic analysis on the link below:

[https://vm-service.iran.liara.run](https://vm-service.iran.liara.run/)

## Features & Functionality

-   This app uses `eslint` & `prettier` as well as `TypeScript` to validate & format the code. A `husky` pre-commit hook is also configured alongside with `lint-staged` in order to automate the validation process before each commit to the git.

-   The stepper component is personally developed, and is in sync with changes of the state. It's not two way bounded so you cannot click on the steps
and change the current state. The steps' state is managed using `Context API`. As a future feature to be developed, we can use `localStorage` to manage the data in all 5 steps, so if the users click on the refresh button they don't lose progress.

## Challenges

One of the most frustrating challenges during development, was the state management...
