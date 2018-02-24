// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD38auj4eWpJGJNQrnoBNWpyEA5XJmGw4I",
    authDomain: "testform-9c9d2.firebaseapp.com/",
    databaseURL: "https://testform-9c9d2.firebaseio.com/",
    projectId: "testform-9c9d2",
    storageBucket: "gs://testform-9c9d2.appspot.com",
    messagingSenderId: "testform-9c9d2@appspot.gserviceaccount.com",
  }
};
