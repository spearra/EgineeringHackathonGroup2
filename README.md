## To Run:

#### 1) Clone repository


#### 2) Open the repository in VSCode


#### 3) Install npm/node (using chocolatey or nvm):
- choco install nodejs-lts
- nvm install --lts


#### 4) Ensure npm and node are updated:
- npm install -g npm
- npm install -g node


#### 5) Make sure you have npm and angular-cli installed:
- nvm install --lts
- npm install -g @angular/cli


#### 6) Place your API key in src/environments/environment.ts
```typescript
export const environment = {
  production: false,
  apiKey: KEY_GOES_HERE
};
```


#### 7) Run web app
- cd kitchen-helper
- npm install
- ng serve --open


Application will run on http://localhost:4200