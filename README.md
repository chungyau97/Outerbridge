# Outerbridge - Automate Web3 and Web2 applications

Outerbridge is a low code/no code workflow automation application, focusing on integrating both on-chain and off-chain applications.

![Outerbridge](./assets/outerbridge_brand.png)

![Outerbridge Screenshot](./assets/screenshot_outerbridge.jpg)

Project is in beta stage. Welcoming pull requests, issues, ideas and [discussions](https://github.com/Outerbridgeio/Outerbridge/discussions). 


## Why another workflow automation tool?

There are many awesome automation tools out there, however there isn't one that has the built-in logic of interacting/consuming information from blockchains. Hence, Outerbridge is created to allow people building workflows involving on-chain and off-chain applications, with simple drag and drop interface. 

## Environment Setup

Lerna and MongoDB have to be installed before setting up the project.

### Lerna

Outerbridge has 3 different modules in a single mono repository.
- `server`: Node backend to serve API logics
- `ui`: React frontend
- `components`: Nodes and Credentials of applications

Lerna is used to link these modules together.
```
npm install -g lerna
```

### MongoDB

Outerbridge uses MongoDB as database. Download and install one [here](https://www.mongodb.com/try/download/community?tck=docs_server).


## Setup
1. Clone the repository
	```
	git clone https://github.com/<your_github_username>/Outerbridge.git
	```

2. Go into repository folder
	```
	cd Outerbridge
	```

3. Install all dependencies of all modules and link them together:
	```
	lerna bootstrap --hoist
	```

4. Build all the code:
	```
	yarn run build
	```
    
    If you don't have yarn installed:
    ```
    npm install --global yarn
    ```

5. Start the app:
	```
	yarn run start
	```

You can now access the app on `http://localhost:3000/`.

## Development
For development build, run: `yarn run dev`. Any code changes will reload the app automatically on `http://localhost:8080/`.

## License
Free for personal use and limited commercial use (max 25 users).
[Fair Source License, version 0.9](LICENSE.md)
