# Backend Hello

## Install dependencies
```
npm i
```

## Resources
- https://www.npmjs.com/

## Express
Fast, unopinionated, minimalist web framework for Node.js.
```
npm i express 
```
## Access control
```
npm install cors
```
## Run Server
```
node index.js
```

## Docker
### Build image
```
docker build -t node-hello .
```
### Run
```
docker run -d -p 3000:3000 --name hello --restart on-failure node-hello:latest
```