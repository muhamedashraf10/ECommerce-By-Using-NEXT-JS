import Link from "next/link";
import Styles from "./../styles/backgroundHome2.module.css";
const BackgroundHome2 = () => {
  return (
    <div className={Styles.back}>
      <div className={Styles.content}>
        <h1 className={Styles.h1}>#New Arrivals</h1>
        <p className={Styles.p}>
          Explicabo esse amet tempora quibusdam laudantium, laborum <br /> eaque
          magnam fugiat hic? Esse dicta aliquid error repudiandae <br />
          earum suscipit fugiat molestias, veniam, vel architecto veritatis
          <br /> delectus repellat modi impedit sequi.
        </p>
        <Link href={"/product"}>
          <div>
            <button className={Styles.button}>Shop Now</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BackgroundHome2;
