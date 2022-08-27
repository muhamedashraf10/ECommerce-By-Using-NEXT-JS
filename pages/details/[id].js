import Image from "next/image";
import Head from "next/head";
import Styles from "../../styles/details.module.css";

const SingleProduct = ({ products }) => {
  return (
    <div>
      <div className={Styles.nav}>
        <h2>Details product</h2>
      </div>
      <div className="flex justify-center items-center	py-10 ">
        <Head>
          <title>Details</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          />
          <link rel="icon" href="./favicon.png" />
        </Head>
        <a
          href="#"
          className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={products.image}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {products.title}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {products.description}
            </p>
            <p className="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">
              {products.price}$
            </p>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{products.category}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
    // <div>
    //   <Image
    //     className="p-8 rounded-t-lg"
    //     src={products.image}
    //     alt="product image"
    //     width="384px"
    //     height="350px"
    //   />
    //   <h2>{products.title}</h2>
    //   <p>{products.price}</p>
    //   <h4>{products.description}</h4>
    // </div>
  );
};

export default SingleProduct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((el) => {
    return {
      params: { id: el.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await req.json();

  return {
    props: { products },
  };
}
