import { async } from "@firebase/util";
import { doc, getDoc, setDoc,addDoc } from "firebase/firestore";
import { db } from "../config/FireBaseConfig";

export const getDailyTip = async () => {
  const tipRef = doc(db, "DailyTip", "7ZJAkwSXInec3IVK6EOV");
  const tipSnap = await getDoc(tipRef);
  if (tipSnap.exists()) {
    const val = tipSnap.data()?.tip;
    return val;
  } else {
    console.log("No such document!");
  }
};

export const getTasks = async () => {
    const taskRef = doc(db, "Tasks", "being_kevin");
    const taskSnap = await getDoc(taskRef);
    if (taskSnap.exists()) {
      const val = taskSnap.data()?.task;
      return val;
    } else {
      console.log("No such document!");
    }
  };

export const updateTask = async (task) => {
  setDoc(doc(db, "Tasks", "being_kevin"),{task}).then(()=>{
  }).catch(()=>{
    console.log('err')
  })

} 