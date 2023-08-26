import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';

//useEffect hook is used when to display things at the time component opens
//we used ngOnInit in angular here in react its useEffect


function Home() {
  //state to hold datas
  const [contacts,setContacts] = useState([]);



  //api to get all contacts from db.json

  //asyn and await ---ajax  instead of .then 
  const fetchContact = async() => {
    var result = await fetch('/db.json')
    
    //convert result to javascript from json

    // result.json().then(data => {
    //   console.log(data.contacts);
    // })

    result.json().then(data => setContacts(data.contacts))

  }

  console.log(contacts);

  useEffect(()=> {
    fetchContact()
  },[])
  // we have to add [] everytime . else useEffect will work all the time whenever a change is made


  return (
    <div>
      
            <ContactCard data={contacts}></ContactCard>
          
    </div>
  )
}

export default Home