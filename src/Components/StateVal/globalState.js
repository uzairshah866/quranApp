import { app } from '../../base';
let naats=[]
app.database().ref('/naats').on("value",snapshot=>{
   naats=[]
    snapshot.forEach(snap=>{
        naats.push(snap.val())
    });
    
});

const globalState = {
    id: naats.key,
    title:naats.title,
    artist:naats.artist,
    icon:naats.icon,
    duration:naats.duration
  };

export const globalStateContext = React.createContext(globalState);