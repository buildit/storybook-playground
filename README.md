# Storybook Playground
Playground for storybook plugins etc.

If you want to run the static builds and browse the versions then:
```
npm i
npm run serve-static
```

At a bare minimum you will need to create a storybook-config.json file in static-storybook and put the following in:

```
{
  "storybook": {
    "versions": {
      "availableVersions": [
        "0_0_1",
        "0_0_2",
        "0.2.13",
        "0.3.4"
      ],
      "regex": "\/([^\/]+?)\/?$"
    }
  }
}
```

then open http://localhost:8000.


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
