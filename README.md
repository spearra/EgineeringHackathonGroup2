## To Run:

#### Clone repository


#### Open the repository in VSCode


#### Install npm/node (using chocolatey or nvm):
- choco install nodejs-lts
- nvm install --lts


#### Ensure npm and node are updated:
- npm install -g npm
- npm install -g node


#### Make sure you have npm and angular-cli installed:
- nvm install --lts
- npm install -g @angular/cli


#### Place your API key in src/environments/environment.ts
```typescript
export const environment = {
  production: false,
  apiKey: KEY_GOES_HERE
};
```


#### Run web app
- cd kitchen-helper
- run npm install
- run ng serve


Application will run on http://localhost:4200