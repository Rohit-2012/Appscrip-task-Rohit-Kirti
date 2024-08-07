"use client";
import { useRef } from "react";
import styles from "./footerForm.module.css";

const FooterForm = () => {
  const buttonRef = useRef(null);

  const handleInputChange = () => {
    buttonRef.current.disabled = false;
  };
  return (
    <form className={styles.subscription__form}>
      <input
        type="email"
        placeholder="Enter your e-mail..."
        onChange={handleInputChange}
      />
      <button type="submit" ref={buttonRef} disabled={true}>
        SUBSCRIBE
      </button>
    </form>
  );
};

export default FooterForm;
