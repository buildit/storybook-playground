# Storybook Playground
Playground for storybook plugins etc.

Please note that, for now, you will need to be added to the Buildit NPM organisation for this to work. Alternatively, pull the two plugin repos and install via npm locally.

## Developing with Add-ons locally

As per the [Storybook Addons documentation](https://storybooks.js.org/docs/react-storybook/addons/writing-addons/#local-development), you can use locally developed addons with the playground by updating the `package.json` to reference the location in the file system e.g.

```
{
  ...
  "dependencies": {
    "@buildit/storybook-addon-blabbr": "file:///home/username/myrepo",
  }
  ...
}
```