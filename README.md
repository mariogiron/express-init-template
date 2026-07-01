# Express Base Application for API Creation

This is a basic Express application template designed to help you create APIs
quickly. It includes essential configurations and setup for starting an Express
server.

> **⚠️ Note:** Since `v2.0.0` this template uses **ES Modules (ESM)** syntax
> (`import`/`export`). If you need the legacy CommonJS version
> (`require`/`module.exports`), clone the `v1.5.0-cjs` tag:
>
> ```bash
> git clone -b v1.5.0-cjs https://github.com/mariogiron/express-init-template.git project-name
> ```

## Features

- Basic Express server setup with **ES Modules**
- CORS enabled
- Environment configuration with `.env` support
- Linting and formatting with [Biome](https://biomejs.dev/)

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine. You can download them
from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/mariogiron/express-init-template.git project-name
```

2. **Navigate to the project directory:**

```bash
cd project-name
```

3. **Install the dependencies:**

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the root of the project and configure your environment
variables. An example `.env` file might look like this:

```
PORT=3000
```

### Running the Application

#### Start the server

Start the server by running:

```bash
npm start
```

The server will start and listen on the port defined in your `.env` file, or
default to port 3000 if not specified.

#### Development mode

To start the server in development mode with `nodemon`, which will automatically
restart the server on file changes, run:

```bash
npm run dev
```

### Available Scripts

- **start**: Runs `node index.js` to start the server.
- **dev**: Runs `nodemon index.js` to start the server in development mode with
  automatic restarts on file changes.
- **lint**: Runs `biome lint` to check the code for issues.
- **format**: Runs `biome check --write` to format the code and fix issues.

### Project Structure

    ├── src
    │   ├── app.js          # Express app configuration
    │   ├── models          # Data models
    │   ├── controllers     # Route controllers
    │   ├── routes          # Application routes
    ├── .env                # Environment variables
    ├── index.js            # Server creation and configuration
    ├── package.json        # Project metadata and dependencies

### Adding Routes

Routes are imported using ESM syntax. Remember to include the `.js` extension:

```js
// src/app.js
import apiRoutes from "./routes/api.routes.js";
app.use("/api", apiRoutes);
```

### Contributing

Feel free to submit issues and pull requests to improve the project. For major
changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License - see the LICENSE file for
details.
