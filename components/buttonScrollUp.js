import React, { useEffect, useState } from "react";

const ButtonToScrollUp = () => {
  const [backToTop, setBackTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <button
          onClick={scrollUp}
          style={{
            position: "fixed",
            bottom: "50px",
            left: "96%",
            top: "91%",
            width: "50px",
            height: "50px",
            borderRadius: 40,
            backgroundColor: "#f7444e",
            color: "#fff",
          }}
        >
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default ButtonToScrollUp;
