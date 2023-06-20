import * as React from "react";
import { useViewport } from "./Layout";
import {
  textInput,
  formContainer,
  optionLabel,
  optionTextInput,
  dropdown,
} from "./ContactForm.module.css";
import TextareaAutosize from "react-textarea-autosize";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
const bootstrap =
  typeof window !== `undefined` ? require("bootstrap/dist/css/bootstrap.min.css") : null;

export function ContactForm(props) {
  const { width } = useViewport();
  const breakpoint = 768;

  const optionsMsgs = {
    "option1": "I have equipment that needs to get repaired.",
    "option2": "I need a hassle-free facility and/or equipment management contract.",
    "option3": "I need my equipment calibrated right away.",
    "option4": "I need upstream or downstream Process Consulting Services.",
    "option5": "I need help with specifying, supplying, and/or modifying my equipment. ",
    "option6": "Other"
  }

  const [formData, setFormData] = React.useState({
    country: "United States",
    region: "",
    name: "",
    email: "",
    phone: "",
    radioSelection: "option1",
    option: optionsMsgs.option1,
    message: ""
  });

  const handleChange = e => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    });
  }

  const setRadioSelection = e => {
    setFormData((prevState) => {
      return {
        ...prevState,
        radioSelection: e.target.value,
        option: optionsMsgs[e.target.value]
      }
    });
  }

  const setMessage = val => {
    setFormData((prevState) => {
      return {
        ...prevState,
        message: val,
      }
    });
  }

  const setCountry = (val) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        country: val
      }
    });
  };

  const setRegion = (val) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        region: val
      }
    });
  };

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));
    e.preventDefault();
    console.log("form submit");
    console.log(formData);
  }

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const desktop = (
    <div
      className="container"
      style={{
        // border: "3px solid gray",
        maxWidth: "800px",
        borderRadius: "10px",
        background: "rgb(255,255,255,.5)",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit} name="contact" method="post" netlify data-netlify="true">
        <input type="hidden" name="form-name" value="contact"></input>
        <div className={formContainer}>
          <h1 className="text-center">Get More Info</h1>
          <div id="options" className="row justify-content-center py-2 gy-2" name="radioSelection">
            <div className="col-10">
              <h5>Which best describes you?</h5>
            </div>
            {Object.entries(optionsMsgs).map(([key, val]) => (
              <div className="col-9">
                <input key={key} id={key} type="radio" value={key} name={key} checked={formData.radioSelection == key} onChange={setRadioSelection} />
                <label className={optionLabel} for={key}>
                  {val}
                </label>
              </div>
            ))}
          </div>
          <div className="row justify-content-center py-2 gy-2">
            <div className="col-10">
              <TextareaAutosize className={optionTextInput} minRows="3" name="message" onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="col-5">
              <label for="nameInput fw-bold">Name</label>
              <input className={textInput} id="nameInput" name="name" onChange={handleChange}></input>
            </div>
            <div className="col-5">
              <label for="nameInput fw-bold">Company</label>
              <input className={textInput} id="companyInput" name="company" onChange={handleChange}></input>
            </div>
            <div class="w-100"></div>
            <div className="col-5">
              <label for="nameInput fw-bold">Email</label>
              <input className={textInput} id="emailInput" name="email" onChange={handleChange}></input>
            </div>
            <div className="col-5">
              <label for="nameInput fw-bold">Best Phone</label>
              <input className={textInput} id="phoneInput" name="phone" onChange={handleChange}></input>
            </div>
            <div class="w-100"></div>
          </div>
          <input type="hidden" name="country" value={formData.country}></input>
          <input type="hidden" name="region" value={formData.region}></input>
          <div className="row justify-content-center py-2">
            <div className="col-5">
              <CountryDropdown
                className={dropdown}
                value={formData.country}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div className="col-5">
              <RegionDropdown
                country={formData.country}
                className={dropdown}
                value={formData.region}
                onChange={(val) => setRegion(val)}
                disableWhenEmpty
              />
            </div>
          </div>
          <div className="row justify-content-center py-3">
            <div className="col-10">
              <button className="btn btn-primary" style={{ width: "100%" }} type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  const mobile = (
    <div
      className="container"
      style={{
        border: "3px solid gray",
        maxWidth: "800px",
        borderRadius: "10px",
        background: "rgb(255,255,255,.5)",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit} name="contact" method="post" netlify data-netlify="true">
        <div className={formContainer}>
          <h1 className="text-center">Get More Info</h1>
          <div id="options" className="row justify-content-center py-2 gy-2">
            <div className="col-12">
              <h5>Which best describes you?</h5>
            </div>
            {Object.entries(optionsMsgs).map(([key, val]) => (
              <div style={{display: "flex"}}>
                <input id={key} type="radio" value={key} name={key} checked={formData.radioSelection === key} onChange={setRadioSelection} />
                <label className={optionLabel} for={key}>
                  {val}
                </label>
              </div>
            ))}
          </div>
          <div className="row justify-content-center py-2 gy-2">
            <div className="col-12">
              <TextareaAutosize className={optionTextInput} minRows="3" name="message" onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="col-6">
              <label for="nameInput fw-bold">Name</label>
              <input className={textInput} id="nameInput" name="name" onChange={handleChange}></input>
            </div>
            <div className="col-6">
              <label for="nameInput fw-bold">Company</label>
              <input className={textInput} id="nameInput" name="company" onChange={handleChange}></input>
            </div>
            <div class="w-100"></div>
            <div className="col-6">
              <label for="nameInput fw-bold">Email</label>
              <input className={textInput} id="nameInput" name="email" onChange={handleChange}></input>
            </div>
            <div className="col-6">
              <label for="nameInput fw-bold">Best Phone</label>
              <input className={textInput} id="nameInput" name="phone" onChange={handleChange}></input>
            </div>
            <div class="w-100"></div>
          </div>
          <div className="row justify-content-center py-2">
            <div className="col-6">
              <CountryDropdown
                className={dropdown}
                value={formData.country}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div className="col-6">
              <RegionDropdown
                country={formData.country}
                className={dropdown}
                value={formData.region}
                onChange={(val) => setRegion(val)}
                disableWhenEmpty
              />
            </div>
          </div>
          <div className="row justify-content-center py-3">
            <div className="col-12">
              <button className="btn btn-primary" style={{ width: "100%" }} type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <section style={{ background: props.bgColor, padding: "20px 0 20px 0" }}>
      {width > breakpoint ? desktop : mobile}
    </section>
  );
}
