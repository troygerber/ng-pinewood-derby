import { AuthProviders, AuthMethods } from 'angularfire2';

export const myFirebaseConfig = {
    apiKey: 'AIzaSyAHzFTbXY0QO5eJN8PlyVeLiAQmozsUcVs',
    authDomain: 'ng-pinewood-derby.firebaseapp.com',
    databaseURL: 'https://ng-pinewood-derby.firebaseio.com',
    projectId: 'ng-pinewood-derby',
    storageBucket: 'gs://ng-pinewood-derby.appspot.com/',
    messagingSenderId: '1063031405090'
};

export const myFirebaseAuthConfig = {
    provider: AuthProviders.Google,
    method: AuthMethods.Redirect
};
