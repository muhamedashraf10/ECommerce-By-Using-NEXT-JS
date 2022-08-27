import Head from "next/head";
import Styles from "../../styles/about.module.css";
import BackgroundHome2 from "../../components/BackgroundHome2";
import AboutComponent from "../../components/About";

const About = () => {
  return (
    <div>
      <div className={Styles.nav}>
        <h2>About Us</h2>
      </div>
      <Head>
        <title>About</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <AboutComponent />
      <BackgroundHome2 />
    </div>
  );
};

export default About;
