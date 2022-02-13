import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Exampleform from '../Exampleform/Exampleform';
import './CalendarComp.css';





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




const firebaseApp = initializeApp({
  apiKey: "AIzaSyC_iHDVZc4s5rlDsW2YrL4LBHAax6UNOBM",
  authDomain: "stivo-9ebcd.firebaseapp.com",
  projectId: "stivo-9ebcd"
});

console.log(firebaseApp);


const db = getFirestore();



async function addToDb() {
  try {
    const docRef = await addDoc(collection(db, "bookedTimes"), {
      date: document.querySelector("input[name='Datum:']").value,
      time: document.querySelector("#validationCustom04").value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}




async function checkIfAvailable () {


  const querySnapshot = await getDocs(collection(db, "bookedTimes"));
  querySnapshot.forEach((doc) => {

  const dataToArray = Object.values(doc.data());
  console.log(dataToArray);

  
  let timeOptionsArr = document.querySelectorAll("option");
  const dateValue = document.querySelector("input[name='Datum:']").value;

  
  
  if(dataToArray.includes(dateValue)) {
    timeOptionsArr.forEach((e)=>{
      if(dataToArray.includes(e.value)) {
        
     
       document.getElementById("validationCustom04").options.namedItem(`${e.value}`).disabled = true;
      }
    });
  
  }
  
});
}






function CalendarComp() {
    const [value, onChange] = useState(new Date());

    const [formState, setFormState] = useState();





    const openForm = () => {
      setFormState("open");
      
      checkIfAvailable();
      
    }


    const cancelFormFunc = () => {
      setFormState(null);
    }


    

  
    return (
      <div>
        <Calendar onChange={onChange} onClickDay={openForm} minDate={new Date()}  value={value} />

        {formState && <Exampleform dayValue={value.toLocaleDateString()} cancelForm={cancelFormFunc}  addBooking={addToDb} />}

      </div>
    );
  }

export default CalendarComp;