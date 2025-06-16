import * as React from "react";
import { Layout } from "../components/Layout";
import { ContactForm } from "../components/ContactForm";
import heroHomeImg from "../images/hero-home-01a-big.jpg";

const ContactPage = () => {
  return (
    <Layout>
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
export { Head } from "../components/Head.js";
