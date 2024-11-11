"use client"
import { useState, useEffect } from "react";
import { getCookie } from "../Aside/Aside";
import Icon from "../Icon/Icon";
import styles from "./Header.module.scss";

const Header = () => {

  
  return (
    <div className={styles.header}>
        <div className={styles.headerContent}>
          <Icon name={"user"}/>
          <span className={styles.user}>User</span>
          <Icon name={"arrowDown"}/>
        </div>
    </div>
  );
}

export default Header;