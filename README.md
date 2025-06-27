## To Run:

#### Open EngineeringHackathonGroup2 in VSCode


#### Install npm/node (using chocolatey):
- choco install nodejs-lts


#### Ensure npm and node are updated:
- update npm: npm install -g npm
- update node: npm install -g node


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
- run npm install
- run ng serve


Application will run on http://localhost:4200