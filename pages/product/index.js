import Product from "../../components/Products";
import Styles from "../../styles/products.module.css";
import Head from "next/head";

const Products = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Product</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div className={Styles.nav}>
        <h2>Product Grid</h2>
      </div>
      <h1 className={Styles.h1}>
        <span className={Styles.span}>Our</span> Product
      </h1>

      <div className={Styles.main}>
        {products.map((el) => (
          <Product products={el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  return {
    props: {
      products,
    },
  };
}
