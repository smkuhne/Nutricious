import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAM2MqZydUEB0HE5RbC1hfdKRT8VHVmzeY",
    authDomain: "driven-actor-231302.firebaseapp.com",
    databaseURL: "https://driven-actor-231302.firebaseio.com",
    projectId: "driven-actor-231302",
    storageBucket: "driven-actor-231302.appspot.com",
    messagingSenderId: "1020454092376"
};

let app = Firebase.initializeApp(config);

export const db = app.database();