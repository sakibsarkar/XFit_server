# Mongoose Car wash

## Introduction

Welcome to the Project Name repository! This README file will guide you through the steps required to set up and run the project on your local computer.

## Getting Started

To get started with the project, follow the instructions below:

### Prerequisites

Make sure you have the following software installed on your machine:

- Git
- Node.js (v20.9.0 recommended)
- Yarn

### Cloning the Repository

First, clone the repository using the following command:

```
git clone https://github.com/sakibsarkar/mogoose_carwash.git

```

### Installing Dependencies

Open the project file in terminal and run `yarn install`

```
yarn install

```

### Setting Up Environment Variables

Create a .env file in the root directory of the project and add your MongoDB credentials:

```
MONGO_NAME=your mongodb username
MONGO_PASS=your mongodb password
MONGO_DB=your database name
NODE_ENV="development"
JWT_ACCESS_SECRET=secret key for jwt token
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
