# Squibler Task

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

Angular cli version

```bash
12.2.12
```

Node version

```bash
16.13.1
```

## GIF of implementation
> https://github.com/Emad4067/squiblertask/blob/main/SquiblerFrontendTaskImplementation.gif

## Video of implementation:
> https://www.loom.com/share/c5896245bf3d4717a1f8c3713af8e258

## Run Locally

Clone the project

```bash
  git clone https://github.com/Emad4067/squiblertask.git
```

Go to the project directory

```bash
  cd squiblertask
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  ng s
```

## Details regarding implementation

```bash
  > focused on structure 
    > ibook (module)
    > interceptor
    > interfaces
    > services
    > shared
        > components
        > directives
        > modules (created one module file for including all relevant material modules)
    > utilities (it includes a config for fetching relevant API URLs)
    > environment (added apiURL, apiKey, apiHost here, since it was required by rapid API endpoint)
  > used the following endpoint for retrieving the definition of word: /definitions
  > added form validations for share screen (The submit button would be disabled until the user fills in the form)
  > the button under the quill-editor would be disabled until two words are there in the editor
  > Tried to use BEM style conventions
```

## What could have been improved if I had more time?
```bash
  > Implemented unit tests.
  > utilized NgRx.
  > refactored the code a bit.
```
