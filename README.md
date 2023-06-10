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

## Run Using Docker

There is a `Dockerfile` in the root directory of the project that provides you the production deployment of this Front-End service. You can build & run the app by creating a docker image, then starting a container using the created image:

```bash
# first `cd` to the root directory
$ docker build -t [image_name]:[image_tag] .

$ docker run -itd --rm -p 3000:3000 --name [container_name] [image_name]:[image_tag]
```

## Deployed on Liara

Check out the deployed version on [Liara](https://liara.ir/) for a more realistic analysis on the link below:

[https://vm-service.iran.liara.run](https://vm-service.iran.liara.run/)

## Features & Functionality

- This app uses `eslint` & `prettier` as well as `TypeScript` to validate & format the code. A `husky` pre-commit hook is also configured alongside with `lint-staged` in order to automate the validation process before each commit to the git.

- The stepper component is personally developed, and is in sync with changes of the state. It is two way bounded so you can click on the steps
  and change the current state. As changing steps from stepper does not have validation on state, we can add that as a future feature.

- The steps' state is managed using `Context API`. As a future feature to be developed, we can use `localStorage` to manage the data in all 5 steps, so if the users click on the refresh button they don't lose progress.
- Data fetching in **client components** is done using `axios` & `react-query` alongside with the new server-side components of Next.js 13. Requests are **pre-fetchted** & **cached**, so the loading of each step is faster.
- Usin the new **server components** in Next.js v13, sidebar menu items are fetched on server & cached automatically using the `force-cache` option in `fetch` function that is set by default in Next.js v13.
- For mock data, I used `json-server` new feature. There is a `db.json` file in the root of the project. A server is automatically configured at `https://my-json-server.typicode.com/[github_username]/[repo_name]/`, so requests are sent to `https://my-json-server.typicode.com/rezapazan/vm-service/`. This service is like `jsonplaceholder`.

## Challenges

One of the most frustrating challenges during development, was the state management. I wanted to develop the steps funcionality **route-independent** as it is now, but the `dispatch` function did not send data to `reducer`. I spent 2 days figuring out the problem. :grimacing:

I event tried to change the mindset & started to develop the stepper functionality route-dependent in `feature/reza/stepperRoutes` branch. The routes are like `/instances/new/[location | type | etc.]`

Then I found out I was fetching data in a **client components** as it is a **server component**, so I used `react-query` to get the data in client components & the problem was solved. :man_facepalming:

## Libraries

- **ESLint:** some of the packages installed are used in `ESLint` to automatically lint & format code.
- **axios/react-query**: used for client-side data fetching.
- **iconsax react**: used as the icon package for the app.
- **sass/tailwindcss**: used for styling. TailwindCSS is now installed as a default package with Next.js v13.
- **huksy/lint-staged**: used for running pre-commit hooks.
