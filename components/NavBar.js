import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Styles from "./navbar.module.css";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  useEffect(() => {
    cartTotalQuantity;
  }, [cartTotalQuantity]);
  const router = useRouter();
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-20 py-2 rounded dark:bg-gray-900 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <div className={Styles.div}>
            <img
              src="./favicon.png"
              alt=""
              style={{
                width: "92px",
                height: "75px",
                cursor: "pointer",
              }}
            />
            <h2>
              Sh<span>o</span>pping
            </h2>
          </div>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex text-5xl flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
            <li className="text-xl">
              <Link href="/">
                <a
                  className={
                    router.pathname === "/" ? Styles.active : Styles.notactive
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="text-xl">
              <Link href="/about">
                <a
                  className={
                    router.pathname === "/about"
                      ? Styles.active
                      : Styles.notactive
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li className="text-xl">
              <Link href="/product">
                <a
                  className={
                    router.pathname === "/product"
                      ? Styles.active
                      : Styles.notactive
                  }
                >
                  Product
                </a>
              </Link>
            </li>
            <li className="text-xl">
              <Link href="/contact">
                <a
                  className={
                    router.pathname === "/contact"
                      ? Styles.active
                      : Styles.notactive
                  }
                >
                  Contact
                </a>
              </Link>
            </li>
            <li className="text-xl">
              <Link href="cart">
                <a
                  className={
                    router.pathname === "/cart"
                      ? Styles.active
                      : Styles.notactive
                  }
                >
                  <div className={Styles.bags}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      fill="currentColor"
                      className="bi bi-handbag-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                    </svg>
                  </div>
                  <span className={cartTotalQuantity === 0 ? "" : Styles.span}>
                    <span>
                      {cartTotalQuantity === 0 ? "" : cartTotalQuantity}
                    </span>
                  </span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
