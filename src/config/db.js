import Firebase from 'firebase';

let config = {
    //PrivateInfo
};

let app = Firebase.initializeApp(config);

export const db = app.database();
