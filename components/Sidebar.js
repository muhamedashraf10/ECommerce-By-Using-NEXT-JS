import Styles from "./sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.content}>
        <button className={Styles.btn1}>
          <i className="fa-brands fa-facebook-square"></i>
        </button>
      </div>
      <div className={Styles.content}>
        <button className={Styles.btn2}>
          <i className="fa-brands fa-instagram"></i>
        </button>
      </div>
      <div className={Styles.content}>
        <button className={Styles.btn3}>
          <i className="fa-brands fa-twitter"></i>
        </button>
      </div>
      <div className={Styles.content}>
        <button className={Styles.btn4}>
          <i className="fa-brands fa-linkedin"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
