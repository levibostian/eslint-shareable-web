# Versioning 

Shareable eslint config files may have plugins, parsers, or other dependencies inside of them like this:

```js
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended"
  ]
}
```
> In the example above, you need to install `@typescript-eslint/eslint-plugin @typescript-eslint/parser` to make it work. 

However, [if you have plugins in your sharable eslint config file, projects that use your sharable config file must install these dependencies on their own](https://github.com/eslint/eslint/issues/3458).

This could potentially break eslint for projects that depend on this config file. What if we add a new plugin to the sharable config file without telling the end user? That would not be good. 

To combat this, we use [semantic versioning](https://semver.org/). When we make a change to the sharable eslint config file in a non breaking way (such as modifying rules), then a minor or patch bump in the semantic version will be no big deal. But if our sharable config makes a big change such as modifying the plugins required in the config file, then we need to perform the following changes:

1. Make sure our git commit message includes a [Breaking Change](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines) inside of it to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). 
2. Modify the `README.md` file's Getting Started section on what dependencies the eslint sharable config requires. 
3. Create a new doc in `docs/migration/XtoY.md` where X is the old major version of the software and Y is the next major version that will be released. This doc will simply give instructions to existing users of this sharable plugin on what things they need to change in their existing project to begin using the new version of the sharable config file. 

