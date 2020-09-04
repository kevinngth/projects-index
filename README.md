# Class Projects Index

An index to showcase students' projects

This app is split into 2 modules, client and server.

## Client

`cd client` & `npm i`

### For development

Change `src/config.js` according to your configurations. `npm start`

### For production

Run `npm build`. Once completed, move the build folder from `client` to `server`

## Server

`cd server` & `npm i`

### For development

Create a `.env` file based on the example provided in `.env.sample` on the same level. This will contain your environment variables for your server to run. Then `npm run dev`.

### For production

`git remote add heroku https://git.heroku.com/my-app` then from the root of project, push to heroku using `git subtree push --prefix server heroku master`.

#### Credits

<sub>Tutorial by Sam Barros [here](https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66)</sub>
