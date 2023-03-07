import * as React from "react";
import { Layout } from "../components/Layout";
import { ContactForm } from "../components/ContactForm";

const metaData = {
  metaTitle: "Contact Us | Advanced Pro Systems",
  metaDescription: "APS wants to hear from you. How may we optimize your bioprocess today?",
  metaCanonicalUrl: "https://www.advancedprosystems.com/contact/"
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
