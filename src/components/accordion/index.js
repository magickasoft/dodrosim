import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./styles.module.css";

export const Accordion = ({ title, children }) => {
  const [open, setOpen] = React.useState(false);
  const showBlock = useSpring(
    open
      ? {
          maxHeight: "1000px",
          opacity: 1,
          transform: "translateY(0)",
          delay: 0,
        }
      : {
          opacity: 0,
          transform: "translateY(-20px)",
          delay: 30,
          maxHeight: "0px",
        }
  );
  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.title} ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      <animated.div style={showBlock} className={styles.content}>
        {children}
      </animated.div>
    </div>
  );
};

