# credit-kapp - Effortless File Attribution Tool ✍️

credit-kapp is a CLI tool designed to automatically add custom copyright and attribution messages to your project's source files. Whether you're managing open-source projects or need to quickly credit your work, credit-kapp simplifies the process by appending customized comments to files in your project.

```bash
npm i credit-kapp@latest -g
```

## Features 🌟
- **File Commenting**: Automatically add attribution comments to your project's files.
- **Language Support**: Supports a variety of programming languages such as JavaScript, Python, TypeScript, HTML, and more.
- **Gitignore Parsing**: Automatically ignores files and directories defined in `.gitignore`.
- **Custom Messages**: Easily customize the message to include your name, GitHub handle, and a personal note.
- **Force Mode**: Use the `--force` flag to bypass checks and add comments even if they already exist.
- **Smart Insertion**: Detects cases like `"use server"` and places the comment below, rather than overriding the content.

## Getting Started 🛠️

### Prerequisites
- [Node.js](https://nodejs.org/) v14.x or higher
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kars1996/credit-kapp.git
   cd credit-kapp-cli
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Compile the TypeScript code:
   ```bash
   npm run build
   ```

4. Optionally, link the CLI globally (recommended for easier access):
   ```bash
   npm link
   ```

### Usage

Once installed, you can use credit-kapp to add comments to your project's files:

1. Start the CLI by running:
   ```bash
   credit-kapp
   ```

2. Follow the prompts to enter your name, GitHub handle, and custom message.

3. Provide the directory path, and credit-kapp will handle the rest, appending comments to all valid files.

### Options

- **`--force`**: Use this flag to bypass checks and add comments even if comments already exist in the files.
   ```bash
   credit-kapp --force
   ```

### File Structure

```plaintext
credit-kapp-cli/
├── src/
│   ├── utils.ts          # Utility functions for file parsing and operations.
│   ├── ui.ts             # Custom UI elements and interactions.
│   ├── index.ts          # Main CLI logic and user input handling.
│   └── types.ts          # Type definitions used throughout the project.
├── package.json          # NPM dependencies and scripts.
├── tsconfig.json         # TypeScript configuration.
└── README.md             # Project documentation (you are here).
```

### Customizing Messages 🧩

credit-kapp allows for customization of the messages added to your files:

1. In the CLI, follow the prompt to input your custom copyright message.
2. To further extend credit-kapp, you can modify the logic in `src/index.ts` to support additional languages or customize the output format.

---

Made with 💙 by [Kars](https://kars.bio) - [GitHub](https://github.com/Kars1996)