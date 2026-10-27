# MEAN Stack Static Content Display

A simple MEAN stack app that shows static text and images (a "Discover Egypt" page). The Angular frontend renders the content and the Express backend serves the built files. No database, API calls or user input.

## Tech stack
- Angular 22 (zoneless, standalone components)
- Node.js and Express (static file server)

## Requirements
- Node.js 22 or newer
- npm

## Run locally
```bash
cd client && npm install && npm run build
cd ../server && npm install && npm start
```
Open http://localhost:3000. To use another port: `PORT=3002 npm start`.

## Structure
```
client/   Angular app (app.ts, app.html, app.css, images in public/images)
server/   Express server that serves client/dist/client/browser
```
