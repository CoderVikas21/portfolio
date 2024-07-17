import React from 'react'
import Profile from "./Profile"
import Contact from "../components/Contact"

const Contact_Profile = () => {

  const send = "https://api.web3forms.com/submit";

  return (
    <div className="contact_profile ">
          <Profile/>
          <Contact/>
    </div>
  )
}

export default Contact_Profile
