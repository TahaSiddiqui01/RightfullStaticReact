import React from "react";
import "./ContactForm.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown from "react-bootstrap/Dropdown";
import Specialties from "./SpecialtiesData";
import Select from "react-select";
import SpecialtiesData from "./SpecialtiesData";
import swal from "sweetalert";
import { MultiSelect } from "react-multi-select-component";

const options = Specialties.map((specialties) => {
  return { value: specialties, label: specialties };
});

function ContactForm() {
  const [selected, setSelected] = useState([]);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    location: "",
    Profession: "",
    Specialties: "",
    FeeSchedule: "",
    Fees: "",
    // FeesInputs: "",
    resume: "",
    privacyAndPolicy: "off",
    // profilePicture: "",
  });

  const handleOnChangeVal = (e) => {
    // console.log(e.target.value);
    if (e.target.name === "profile-pic") {
      setContactData({ ...contactData, profilePicture: e.target.value });
    } else if (e.target.name === "upload-resume") {
      setContactData({ ...contactData, resume: e.target.value });
    } else if (e.target.name === "FeeSchedule") {
      setContactData({
        ...contactData,
        FeeSchedule: contactData.FeeSchedule + ", " + e.target.value,
      });
    } else {
      setContactData({ ...contactData, [e.target.name]: e.target.value });
    }
  };

  // Following function is used to return all input fields as a json:

  const getDataInJson = (e) => {
    e.preventDefault();
    let formData = localStorage.getItem("formData");
    console.log(selected, "selected");
    setContactData((contactData["Specialties"] = [...selected]));

    if (!formData) {
      let formDataArray = [];
      formDataArray.push(contactData);
      localStorage.setItem("formData", JSON.stringify(formDataArray));
      setContactData({
        name: "",
        email: "",
        location: "",
        Profession: "",
        Specialties: "",
        Fees: "",
        FeesInputs: "",
        file: "",
        privacyAndPolicy: "off",
      });
    } else {
      setContactData({
        ...contactData,
        Specialties: selected,
      });

      let parseData = JSON.parse(formData);
      localStorage.setItem(
        "formData",
        JSON.stringify([...parseData, contactData])
      );
      setContactData({
        name: "",
        email: "",
        location: "",
        Profession: "",
        Specialties: "",
        Fees: "",
        FeesInputs: "",
        file: "",
        privacyAndPolicy: "off",
      });
    }

    swal(
      "Thank you for joining Rightful",
      "Please check your email for confirmation"
    );
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <div className="contact-form d-flex justify-content-center align-items-center flex-column">
        <h1 className="contact-heading">Create Rightful User Profile</h1>

        <form className="form_main">
          <div className="d-flex justify-content-between align-items-center gap-4">
            <InputGroup className="" size="lg">
              <Form.Control
                onChange={handleOnChangeVal}
                value={contactData?.name}
                name="name"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                className="px-4 py-3 contact-input"
                placeholder="Name"
              />
            </InputGroup>

            <InputGroup className="" size="lg">
              <Form.Control
                onChange={handleOnChangeVal}
                value={contactData?.email}
                name="email"
                type="email"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                className="px-4 py-3 contact-input"
                placeholder="Email"
              />
            </InputGroup>
          </div>

          <InputGroup className="" size="lg">
            <Form.Control
              value={contactData?.location}
              name="location"
              onChange={handleOnChangeVal}
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              className="px-4 py-3 contact-input"
              placeholder="City, State, Country"
            />
          </InputGroup>

          <div className="checkboxes-main d-flex flex-wrap justify-content-between align-items-center">
            <div
              key={`inline-radio-5`}
              className="mb-3 my-4  w-50 checkboxes-child"
            >
              <h4>Profession</h4>

              <div className="d-flex justify-content-start flex-column">
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Barrister"
                  name="Profession"
                  value={"Barrister"}
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Solicitor"
                  name="Profession"
                  value={"Solicitor"}
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Lawyer"
                  name="Profession"
                  type="radio"
                  value={"Lawyer"}
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Paralegal"
                  name="Profession"
                  value={"Paralegal"}
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Other"
                  name="Profession"
                  value={"Other"}
                  type="radio"
                  id={`inline-radio-1`}
                />
              </div>
            </div>

            <div
              key={`inline-radio-6`}
              className="mb-3 my-4 w-50 checkboxes-child align-self-start"
            >
              {/* <Dropdown className="specialties-dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Specialties
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {
                    Specialties.map((specialties)=>{
                      return <Dropdown.Item href="#/action-1">{specialties}</Dropdown.Item>
                    })
                  }
                </Dropdown.Menu>
              </Dropdown> */}

              <h4>Specialties</h4>
              {/* <Form.Select
                name="Specialties"
                style={{ height: "62px" }}
                onChange={handleOnChangeVal}
                aria-label="Default select example"
              >
                <option disabled selected>
                  Select Specialties
                </option>
                {SpecialtiesData.map((specialty) => {
                  return <option value={specialty}>{specialty}</option>;
                })}
              </Form.Select> */}

              <MultiSelect
                name="Specialties"
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>


            <div
              key={`inline-radio-8`}
              className="mb-3 my-4 w-50 checkboxes-child"
            >
              <h4>Fee Schedule</h4>

              <div className="d-flex justify-content-start flex-column">
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Fixed Fees"
                  name="FeeSchedule"
                  value={"Fixed Fees"}
                  type="checkbox"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Free Consultation"
                  name="FeeSchedule"
                  value={"Free Consultation"}
                  type="checkbox"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="No Direct Briefs"
                  name="FeeSchedule"
                  value={"No Direct Briefs"}
                  type="checkbox"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Accredited Specialist"
                  name="FeeSchedule"
                  value={"Accredited Specialist"}
                  type="checkbox"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Under Supervision"
                  name="FeeSchedule"
                  value={"Under Supervision"}
                  type="checkbox"
                  id={`inline-radio-1`}
                />
              </div>
            </div>

            <div
              key={`inline-radio-7`}
              style={{ padding: "0px 1.4rem 0px 0px" }}
              className="mb-3 my-4 w-50 checkboxes-child align-self-start"
            >
              <h4>Fees</h4>

              <div className="d-flex justify-content-start flex-column">
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Hourly Price"
                  name="Fees"
                  value={"Hourly Price"}
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="Per Day Rate"
                  name="Fees"
                  value={"Per Day Rate"}
                  type="radio"
                  id={`inline-radio-1`}
                />
                {/* <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="200-300/h"
                  name="Fees"
                  value={"200-300/h"}
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="300-400/h"
                  name="Fees"
                  value={"300-400/h"}
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  onChange={handleOnChangeVal}
                  inline
                  label="400-500/h"
                  name="Fees"
                  value={"400-500/h"}
                  type="radio"
                  id={`inline-radio-1`}
                /> */}

                <InputGroup className="" size="lg">
                  <Form.Control
                    value={contactData?.FeesInputs}
                    onChange={handleOnChangeVal}
                    name="FeesInputs"
                    type="number"
                    aria-label="Large"
                    aria-describedby="inputGroup-sizing-sm"
                    className="px-4 py-3 contact-input"
                    placeholder={contactData.Fees === "Hourly Price" ? "Hourly" : "Daily"}
                  />
                </InputGroup>
              </div>
            </div>

          </div>

          <div className="d-flex  align-items-center flex-wrap my-2" style={{gap:"35px"}}>
            <div className="">
            <h4>Upload Profile Picture</h4>
            <input
              name="profile-pic"
              onChange={handleOnChangeVal}
              type={"file"}
            />
            </div>

            <div className="">
              <h4>Upload Resume</h4>
              <input
                name="upload-resume"
                onChange={handleOnChangeVal}
                type={"file"}
              />
            </div>
          </div>

          <div className="my-4">
            <input
              onChange={handleOnChangeVal}
              name="privacyAndPolicy"
              type="checkbox"
            />
            <span className="mx-2">
              Agree to{" "}
              <span style={{ color: "#0990f2" }}>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.rightful.com.au/privacy"
                >
                  Privacy Policy
                </a>
              </span>
            </span>
          </div>

          <div className="d-flex justify-content-center align-items-center my-2">
            <button onClick={getDataInJson} className="my-3 w-50 submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
