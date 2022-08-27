import Head from "next/head";
import Styles from "../../styles/contact.module.css";
import BackgroundHome2 from "../../components/BackgroundHome2";

const Contact = () => {
  return (
    <div>
      <div className={Styles.nav}>
        <h2>Contact Us</h2>
      </div>
      <div className={Styles.contact}>
        <Head>
          <title>Contact</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          />
          <link rel="icon" href="./favicon.png" />
        </Head>
        <div className={Styles.containers}>
          <div className={Styles.contactInfo}>
            <div>
              <h2>Contact Info</h2>
              <ul className={Styles.info}>
                <li>
                  <span>
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span>
                    25 Nessiem El Gazar street <br />
                    Ismailia, Egypy.
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-envelope"></i>
                  </span>
                  <span>muhamedashref02@gmail.com</span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-mobile"></i>
                  </span>
                  <span>+20 | 01276567619</span>
                </li>
              </ul>
            </div>
            <ul className={Styles.sci}>
              <li>
                <a
                  href="https://www.facebook.com/elmagik.toshka"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/muhamed-ashraf-052a64242/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={Styles.contactForm}>
            <h2>Send a Message</h2>
            <div className={Styles.formBox}>
              <div className={Styles.inputBox}>
                <input type="text" required />
                <span>First Name</span>
              </div>
              <div className={Styles.inputBox}>
                <input type="text" required />
                <span>Last Name</span>
              </div>
              <div className={Styles.inputBox}>
                <input type="email" required />
                <span>Email</span>
              </div>
              <div className={Styles.inputBox}>
                <input type="text" required />
                <span>Mobile</span>
              </div>
              <div className={Styles.inputBox}>
                <textarea required></textarea>
                <span>Write your message</span>
              </div>
              <div className={Styles.w100}>
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundHome2 />
    </div>
  );
};

export default Contact;
