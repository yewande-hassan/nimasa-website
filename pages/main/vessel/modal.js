import { Spinner } from "react-bootstrap";
import React, { useState } from 'react'
import styles from '../../../styles/addVessel.module.css'

export default function Index() {
  const [formState, setFormState] = useState({
    vesselname:"",
    country:"",
    IMOnumber:"",
    email:"",
    contact:"",
    GRT:"",
  })
   const handleOnSubmit = (e) =>{
     e.preventDefault();
    //  const {vesselname, country, IMOnumber, email, contact, GRT} = formState;
   }
   const handleOnChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value });
  };
  return (
   <>
   
    <form className="d-grid gap-4 col-5 mx-auto mt-5" onSubmit={handleOnSubmit}>
    <h3  className={`${styles.text}`}>Add Vessel</h3>
        <input 
        id="vesselname"
        name="vesselname"
        type="text||number"
        placeholder="Vessel name (i.e TERAX-19003)"
        className={`${styles.addVesselInput}`}
        onChange={handleOnChange}
        value={formState.vesselname}
        />
        <input 
        id="country"
        name="country"
        type="text"
        placeholder="Country"
        className={`${styles.addVesselInput}`}
        onChange={handleOnChange}
        value={formState.country}
        />
        <input 
        id="IMOnumber"
        name="IMOnumber"
        type="text"
        placeholder="IMO number (i.e 9000323321)"
        className={`${styles.addVesselInput}`}
        onChange={handleOnChange}
        value={formState.IMOnumber}
        />
        <input 
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        className={`${styles.addVesselInput}`}
        onChange={handleOnChange}
        value={formState.email}
        />
        <input 
        id="contact"
        name="contact"
        type="text"
        placeholder="Contact number"
        className={`${styles.addVesselInput}`}
        onChange={handleOnChange}
        value={formState.contact}
        />
        <input 
        id="GRT"
        name="GRT"
        type="text||number"
        placeholder="GRT range (i.e 0493kfz-fe0dol)"
        className={`${styles.addVesselInput}`}
        onChange={handleOnChange}
        value={formState.GRT}
        />
        <button
                    type="submit"
                    className={`btn btn-success form-control ${styles.button}`}
                  >
                    SUBMIT   {
                    <Spinner variant="dark" animation="border" />
                  }
                  </button>
    </form>
   </>
  );
}

