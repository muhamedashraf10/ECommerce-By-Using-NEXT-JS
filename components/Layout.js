import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import ButtonToScrollUp from "./buttonScrollUp";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ButtonToScrollUp />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
