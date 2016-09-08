
# Slush RolfKoenders

> My personal template for node apps

## What? 🤓
By running this slush generator you bootstrap your next javascript/node project with all the files you need to get started. It provides you with a simple directory setup and lets you immediately focus on the code instead of creating the project structure.

It comes with `convict` for your config, pre-setup `gulp`file for your build tasks a sample `Dockerfile` to build a image of your project.

Your project structure will look like this:
```
config/
  index.js
lib/
test/
  unit/
    test.js
.editorconfig
.gitignore
.nvmrc
docker-compose.yml
Dockerfile
gulpfile.js
index.js
package.json
README.md
```

Check out the `/templates/defaults` for the exact details.


## Installation
Install `slush-rolfkoenders` globally:

```bash
$ npm install -g slush-rolfkoenders
```

### Usage
Create a new folder for your project:

```bash
$ mkdir test-slush-rolfkoenders
```

Run the generator from within the new folder:

```bash
$ cd test-slush-rolfkoenders && slush rolfkoenders
```

## Getting To Know Slush
Slush is a tool that uses Gulp for project scaffolding.
To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).
