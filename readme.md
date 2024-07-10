# Xfit Fitness server

## Introduction

Welcome to the Project repository!.
fitness application Server allows users to create, edit, and delete products. Users can filter products by category, minimum/maximum price, and search by product title.

This README file will guide you through the steps required to set up and run the project on your local computer.

## Technology Stack

- Node js
- Express js
- Typescript
- MongoDB

## Getting Started

To get started with the project, follow the instructions below:

### Prerequisites

Make sure you have the following software installed on your machine:

- Git
- Node.js (v20.9.0 recommended)
- Yarn or any package installer

### Cloning the Repository

First, clone the repository using the following command:

```
https://github.com/sakibsarkar/XFit_server.git

```

### Installing Dependencies

Open the project file in terminal and run `yarn install`

```
yarn install

```

### Setting Up Environment Variables

Create a .env file in the root directory of the project and add your MongoDB credentials:

```
MONGO_NAME= Mongodb user name
MONGO_PASS= mongodb password
MONGO_DB= Mongodb collection name
SALT_ROUND=10
NODE_ENV="development"
```

### Running the Project

Once you have set up the environment variables, you can run the project locally.

```
yarn dev

```

### Accessing the Project

```
http://localhost:5000
```
