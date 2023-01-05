## **Introduction**

This project is a vite react-typescript scaffolding with pre-configured libraries that includes:

-   cypress
-   storybook
-   tailwindcss
-   eslint
-   prettier

## **Pre-Requisite Installation**

The following dependencies must be available before building (versions current as of 2022/12/25):

    node: ~= 16.14.2 (see https://nodejs.org/en/download/package-manager/)

    npm: ~= 9.2.0 (distributed with node - no need to install it separately)

## **Available Scripts**

In the project directory, you can run the following:

### `npm run dev`

Runs the app in the development mode.<br />

### `npm run build`

Builds the app for production.<br />

### `npm run preview`

Locally preview production build.<br />

### `npm run lint`

Performs static lint test using the eslint rules declared in .eslintrc

### `npm run format`

Performs static lint test using the eslint rules and formats documents using prettier rules declared in .prettierrc

### `npm run storybook`

Runs storybook server

### `npm run build-storybook`

Builds storybook

## **Application Details**

### **Development Environment**

It is highly recommented to VS Code as IDE to take advantage of the Prettier settings.
When using VS Code, please install the following the plugins

-   Prettier Formatter for Visual Studio Code (esbenp.prettier-vscode)

### **Other Notes**

-   Due to storybook react version you may need to use `--legacy-peer-deps` during installation.
