import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Reach out for any queries, support, or collaborations.
        </p>

        {/* FORM CARD */}
        <div className="contact-form-card">
          <form>

            <div className="form-group">
              <label>Name *</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label>School Name *</label>
              <input type="text" placeholder="Your school name" />
            </div>

            <div className="form-group">
              <label>Address *</label>
              <input type="text" placeholder="Full address" />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="example@mail.com" />
            </div>

            <div className="form-group">
              <label>Phone Number *</label>
              <small>Include country code (e.g., +1 for USA, +91 for India)</small>
              <input type="text" placeholder="+919876543210" />
            </div>

            <button className="submit-btn">Submit</button>

          </form>
        </div>

        {/* ADDRESS CARDS */}
        {/* <div className="contact-address-grid">

          <div className="address-card">
            {/* <h3><FaMapMarkerAlt /> India</h3>
            <p>
              1st floor, Legend Platinum, Jubilee Enclave, Kondapur Village,
              Serilingampally Mandal, Hitech City, Hyderabad, RR District - 500081.
            </p>
            <p><FaPhoneAlt /> +91 (720) 710 7334</p>
            <p><FaEnvelope /> contact@learningpadedu.com</p> */}
          </div>

          <div className="address-card">
            {/* <h3><FaMapMarkerAlt /> USA</h3> */}
            <p>
              {/* 3333 Warrenville Road, Suite #200 Lisle,
              Illinois 60532 USA */}
            </p>
            {/* <p><FaPhoneAlt /> +1 (630) 270 2250</p> */}
            {/* <p><FaEnvelope /> contact@learningpadedu.com</p> 
          </div>

        </div> */}

      </div>
    </section>
  );
}

export default Contact;
