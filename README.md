# Storybook Playground
Playground for storybook plugins etc.

Please note that, for now, you will need to be added to the Buildit NPM organisation for this to work. Alternatively, pull the two plugin repos and install via npm locally.

## Configuration

You can configure various aspects of the plugin by creating a configuration file anywhere in your project and then setting up the webpack config to resolve it. To do that either add the following to the `resolve` section in your `webpack.config.js` file in `.storybook/`:

```
  alias: {
    'blabbr-config': path.join(path.resolve(__dirname), '../<PATH_TO_YOUR_CONFIG>')
  }
```

or, if you don't have a `webpack.config.js` in your `.storybook` folder, extend the base config to have the above alias setup. Please see the
[Storybook documentation](https://getstorybook.io/docs/react-storybook/configurations/custom-webpack-config#full-control-mode) on how to do this.

By default a sample config file, `blabbr-config.sample.js` is copied into the `.storybook` folder after installing the package.

### DB

Currently it is setup to work with CouchDB and uses PouchDB as the library and API over Couch. To configure the connection to CouchDB (either a local CouchDB or hosted on Cloudant) you need to add the following to your config:

```
const db = {
  user: '<YOUR_API_KEY>',
  pwd: '<YOUR_API_PASSWORD>',
  host: '<YOUR_HOST_NAME>',
};
export { db };
```

### Slack

If you would like to see all comments on a slack channel then setup the slack integration and add the following to your config file:

```
const slack = {
  endPoint: '<YOUR_ENDPOINT>',
};

export { slack };

```

### UI Options

You can setup a number of UI options as follows:

```
const ui = {
  avatar: false,
  ...
};

export { ui };
```

The available options are:
- `avatar`: `true`/`false` to show avatars or not

### Version

You can set the version of the project/library you are working against using

```
const version = `<YOUR_VERSION_NO>`;
```

Alternatively you can tie it to the version specified in `package.json` like this:

```
const version = require('../package.json').version;
```

Ensure the path to `package.json` is correct relative to your blabbr config.