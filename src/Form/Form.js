import React, { useState,} from "react";
function Form() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [contactErr, setContactErr] = useState(false);
  const [countryid, setCountryid] = useState("");
  const [stateData, setState] = useState([]);
  const [stateid, setStateid] = useState("");

  const handlecounty = async(e) => {
    const getcountryId = e.target.value;
    const countryApi = await fetch("https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json");
    const apiData = await countryApi.json();
    const getStatedata = apiData.find(
      (country) => country.name === getcountryId
    ).states;
    setState(getStatedata);
   
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    //console.log(stateid);
    setStateid(stateid);
  };

  function RegisterHandle(e) {
    if (contact === "") {
      alert('"Error!", "Please fill the contact number", "error"');
    }
    if (isNaN(contact)) {
      alert('"Sorry!", "Only numeric value allowed in mobile number", "error"');
    }
    if (contact.length < 10 || contact.length > 10) {
      alert(
        '"Sorry!", "Contact number length should be in between 4-10 characters", "error"'
      );
    } else {
      alert('"Success :" "All fields are valid."');
    }
    e.preventDefault();
  
  }

  function userName(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(item);
  }
  function userEmail(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(item);
  }
  function userContact(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setContactErr(true);
    } else {
      setContactErr(false);
    }
    setContact(item);
  }

    return (
        <>
    

        </>
    )
}

export default Form