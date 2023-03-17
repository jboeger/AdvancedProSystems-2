import * as React from "react";
import { Layout } from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import heroHomeImg from "../images/hero-home-01a-big.jpg";

const metaData = {
  title: "Contact Us | Advanced Pro Systems",
  description: "APS wants to hear from you. How may we optimize your bioprocess today?",
  canonicalUrl: "https://www.advancedprosystems.com/contact",
  img: "https://www.advancedprosystems.com/static/hero-home-01a-big-bcdf49ad1d926b6cb410bdf5b82ea7c3.jpg",
  imgAlt: "",
  imgWidth: "1840", 
  imgHeight: "814",
  imgType: "image/jpg"
}

const ContactPage = () => {
  return (
    <Layout metaData={metaData}>
      <form hidden method="post" name="contact" netlify data-netlify="true">
        <input type="hidden" name="form-name" value="contact"></input>
        <input type="hidden" name="name"></input>
        <input type="hidden" name="phone"></input>
        <input type="hidden" name="email"></input>
        <input type="hidden" name="country"></input>
        <input type="hidden" name="region"></input>
        <input type="hidden" name="message"></input>
        <button type="submit">Submit</button>
      </form>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
