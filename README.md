# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Outstanding Todo List

I need to figure out how to use github actions or this task.
- Task #1: Fix the issue with the overall page height. Use the other websites as an example. The footer should become visible shortly after scrolling down, but the middle section (body) should continue to scroll downwards.
- Change LinkedIn icon in top naviation panel to have a white background in the image.

Add some Reactivity
- Reactivity: Create a drop-down menu from the projects layout to go straight to that particular project. If just to main project is selected, set a default project variable for the slug.
- Create grey shading on the navigation bar to indicate which page the user is on.
- Modify the projects/[slug]/+page.server.js to be a regular +page.js file. Solve issue where it gets value correctly at first, but then keeps updating the component and fails eventually. What's the right way to handle this (prbably in the tutorial).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

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

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
