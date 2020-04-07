# @foundersclubsoftware/eslint-shareable-web

[Sharable eslint config file](https://eslint.org/docs/developer-guide/shareable-configs) we use on the web team. 

# Mission of this project 

This config file is not meant to replace the entire Vuejs eslint config file. It's meant to extend it with more functionality. On this team, we write tests with Jest, we use babel, and we use typescript. These rules are meant to add more rules to eslint to write more consistent and safe code. 

Vuejs is changing all the time. It would be difficult to make 1 config file that worked for all vue projects all the time. If this was a vanilla typescript nodejs app, creating a single config file would be more possible. This project's sharable config file contains mostly typescript and jest rules but can also contain other rules as well. 

# Getting started 

1. Install your dependencies: 

```bash
npm install -D @foundersclubsoftware/eslint-shareable-web

# These are modules that are required by the shareable config
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. Enable the config by adding to your existing `.eslintrc.js` file:

```
{
    extends: "@foundersclubsoftware/eslint-shareable-web"
}
```

3. Modify your project's lint script in `package.json`. Change `"lint": "vue-cli-service lint"` to `"lint": "vue-cli-service lint --ext .ts,.js,.vue ."`. This is needed because if you do not pass in arguments to `vue-cli-service lint`, it will [automatically lint only .js and .vue files in src/ and tests/](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-eslint/README.md#injected-commands). We want to also enable `.ts` files. 

# Development 

* Setup 

```
npm install
```

* Use the example project located in `example/` to test out your changes to the config project. 

* This project follows a strict semantic versioning policy. The policy is enforced on the CI server where it will not allow you to merge your PR unless your commit messages are in the correct format. To learn more, check out [this doc](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). 

* Make a PR, the team will merge it in, the a release will be made. 

# License 

See [LICENSE](LICENSE.md)