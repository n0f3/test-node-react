# Test app cobalt

Simple React web application hosted on an express web server.

Backend routes are mounted on /api and are as follows:

* `/api/parse?endpoint=www.cobalt.io&tag=h1`: This will return all the matching tags at the desired endpoint. Http is added automatically so it's not necessary. It's possible to pass in multiple tags by separating them with a comma such as `/api/parse?endpoint=www.cobalt.io&tag=h1,h2,h3`
The return object is a JSON object:
```
{
  "h1": [
    {
      "innerText": "...",
      "innerHTML": "...",
    },
    ...
  ],
  ...
}
```
* `/api/contains?endpoint=www.cobalt.io&tag=h1&text`: This will return whether or not the given endpoint contains a tag of the specified type that has certain text inside. Return object is a json object:
```
{
  "exists": "true",
}
```

The main reason to separate backend endpoints under `/api` was to allow rendering of react bundle for all other requests. In a more elaborate react application you would then have React Router take over routing of the single page application, and utilize server for API endpoints.

This provides a nice separation between the two components and it's possible to have both live on the same server instance.

## Folder Structure

```
src
├── client
│   ├── actions
│   │   ├── actionTypes.js
│   │   └── index.js
│   ├── components
│   │   ├── App.js
│   │   ├── ErrorMessage.js
│   │   ├── FindTag.js
│   │   ├── Root.js
│   │   ├── TagElementList.js
│   │   ├── TagInfo.js
│   │   └── TagResult.js
│   ├── containers
│   │   ├── FindTagContainer.js
│   │   └── TagResultContainer.js
│   ├── index.js
│   ├── reducers
│   │   └── getTag.js
│   ├── store.js
│   └── styles
│       ├── FindTag.scss
│       ├── Root.scss
│       ├── TagInfo.scss
│       └── TagResult.scss
└── server
    ├── app.js
    ├── configApp.js
    ├── index.js
    ├── routes
    │   ├── apiRouter.js
    │   ├── contains.js
    │   └── parse.js
    └── utils
        └── scraper.js
```

## Webpack

The project is running a customized webpack config that is devided between production and development.

For development purposes it's possible to start the build process by running `npm run dev`. This will build the server and bundle the react application to be served.

To build the production application the command is `npm run prod`.

To deploy the production app there's a Heroku integrated process for deployment through the heroku cli.

## Misc

Javascript linter file is provided for development. It's following a custom hybrid config with airbnb style guide as a base.

Stage-2 and Stage-3 features are being used in the babel config.

Both normalize.css and Autoprefixer are being run on stlesheet.
