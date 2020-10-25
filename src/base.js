import firebase from 'firebase'
import 'firebase/storage'

export const app=firebase.initializeApp({
    apiKey: "AIzaSyBz0wfYe05oAbeCd3UK1roKQbsP_67uQzU",
    authDomain: "nintynin-96f20.firebaseapp.com",
    databaseURL: "https://nintynin-96f20.firebaseio.com",
    projectId: "nintynin-96f20",
    storageBucket: "nintynin-96f20.appspot.com",
    messagingSenderId: "658302771699",
    appId: "1:658302771699:web:d80f4a6594c339f4fd7286",
    measurementId: "G-MZV95CQ5MN"
})

export function  getData() {
    let naats=[]
    app.database().ref('/naats').on("value",snapshot=>{
        snapshot.forEach(snap=>{
            var data=snap.val()
            naats.push({
                title:data.title,
                icon:data.icon,
                duration:data.duration,
                artist:data.artist,
                id:snap.key
            })
        });
        
    });
    return naats;
    
}