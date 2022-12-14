import React, { useState } from "react";
import countrydata from "./Countrydata.json";

function Htmlform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [contactErr, setContactErr] = useState(false);
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
    //console.log(getcountryId);
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
      <section
        className="contact-page inner-page"
        style={{ border: "5px solid green" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div
              className="col-md-4 "
              style={{
                marginTop: 60,
                border: "1px solid red",
                marginBottom: 60,
                backgroundColor: "rgb(210 210 210)",
              }}
            >
              <div className="widget">
                <div className="widget-body">
                  <form onSubmit={RegisterHandle} method="POST">
                    <p>Can you please provide your personal details ?</p>

                    <div className="row">
                      <div className="form-group col-sm-12">
                        <label for="exampleInputEmail1">
                          <b>Name</b>
                        </label>
                        <input
                          type="string"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Enter Name"
                          onChange={userName}
                          required
                        />
                        {nameErr ? <span>UserName Not Valid</span> : ""}
                      </div>
                      <div className="form-group col-sm-12">
                        <label for="exampleInputEmail1">
                          <b>Date of Birth</b>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          name="dob"
                          placeholder="Enter Name"
                          required
                        />
                      </div>
                      <div className="form-group col-sm-12">
                        <label for="exampleInputEmail1">
                          <b>Email Address</b>
                        </label>
                        <input
                          className="form-control"
                          placeholder="Enter Email Address"
                          type="email"
                          name="email"
                          id="email"
                          onChange={userEmail}
                          required
                        />
                        {emailErr ? <span>Email Not Valid</span> : ""}
                      </div>
                      <div className="form-group col-sm-12">
                        <label for="exampleInputPassword1">
                          <b>Contact Number</b>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="contact"
                          name="contact"
                          placeholder="Enter Contact Number"
                          onChange={userContact}
                          required
                        />
                        {contactErr ? <span>Email Not Valid</span> : ""}
                        <span
                          id="message"
                          style={{ color: "red", fontweight: "bold" }}
                        ></span>
                      </div>
                      <div className="form-group col-sm-12">
                        <label for="exampleInputEmail1">
                          <b>Country</b>
                        </label>{" "}
                        <br />
                        <select
                          name="country"
                          className="form-control"
                          onChange={(e) => handlecounty(e)}
                        >
                          <option value="">--Select Country--</option>
                          {countrydata.map((getcountry, index) => (
                            <option value={getcountry.country_id} key={index}>
                              {getcountry.country_name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group col-sm-12">
                        <label for="exampleInputEmail1">
                          <b>State</b>
                        </label>{" "}
                        <br />
                        <select
                          name="states"
                          className="form-control"
                          onChange={(e) => handlestate(e)}
                        >
                          <option value="">--Select State--</option>
                          {state.map((getstate, index) => (
                            <option value={getstate.state_id} key={index}>
                              {getstate.state_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-4">
                        <p>
                          <button type="submit" className="btn btn-success">
                            Submit
                          </button>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Htmlform;
