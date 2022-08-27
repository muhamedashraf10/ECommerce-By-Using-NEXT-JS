import Head from "next/head";
import BackgroundHome from "../components/BackgroundHome";
import BackgroundHome2 from "../components/BackgroundHome2";
import Product from "../components/Products";
import Styles from "../styles/home.module.css";
import AboutComponent from "../components/About";
const Home = ({ products }) => {
  console.log(products);
  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div>
        <BackgroundHome />
      </div>
      <AboutComponent />
      <div>
        <BackgroundHome2 />
      </div>

      <div className={Styles.content}>
        <h1 className={Styles.h1}>
          <span className={Styles.span}>Our</span> Product
        </h1>

        <div className={Styles.main}>
          {products.map((el) => (
            <Product products={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props: {
      products,
    },
  };
}
