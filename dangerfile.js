import {message, warn, fail, markdown, danger} from "danger"

const editedPackage = danger.git.modified_files.includes("package.json") || danger.git.modified_files.includes("example/package.json")
if (editedPackage) {
  warn("Looks like you edited a package.json file. Sometimes that indicates that you changed the dependencies of the project. See [this doc](https://github.com/foundersclubsoftware/eslint-shareable-web/blob/master/docs/versioning.md) to learn more.")
}