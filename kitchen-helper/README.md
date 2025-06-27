To Run:

Open EngineeringHackathonGroup2 in VSCode

Make sure you have npm and angular-cli installed:
nvm install --lts
npm install -g @angular/cli

Place your API key in src/environments/environment.ts
export const environment = {
  production: false,
  apiKey: KEY_GOES_HERE
};

run npm install
run ng serve

Application will run on hhtp://localhost:4200