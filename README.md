# iStaging Static Content

This is a Svelte static SPA made to serve additional content on the iStaging platform as embedded i-frames.

### Why Svelte?

This is done mostly as an experiment. Svelte is ideal for tiny size applications with limited interactivity. It should also be extremely fast (not that we need a lot of performance). Yes, it needs a specific compiler to produce usable output, but with modern tooling this is no different than webpack/rollup IMO.

## Get started

Install the dependencies...

1. Clone project to local directory
2. Open terminal, change directory to project
3. Install dependencies with `npm install`
4. Start development server with `npm run dev`

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimized version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript (currently not used)

The `setupTypeScript.js` is suppose to convert the project to a TypeScript environment. Not tested, currently not used.

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deployment

Once the project is built, the static files will be produced in the `./public/` directory. You can copy these files to any web server, or in my case I branch called `gh-pages` is setup such that github will update and serve these files on every push.
