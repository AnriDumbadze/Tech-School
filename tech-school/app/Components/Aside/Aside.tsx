"use client";

import React, { useState, useEffect } from 'react';
import styles from './Aside.module.scss';
import Icon from '../Icon/Icon';
import MenuItem from '../MenuItem/MenuItem';
import Cookie from 'js-cookie';
import { useRouter, usePathname } from 'next/navigation';

export const getCookie = (key: string) => {
  return Cookie.get(key);
};

const AsideMenu = () => {
  const [themeColor, setThemeColor] = useState<string | undefined>(getCookie("theme"));
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get the current route path

  const handleMenuItemClick = (name: string, route: string) => {
    router.push(route); // Navigate to the selected route
  };

  useEffect(() => {
    const isAdminCookie = Cookie.get("isAdmin");
    if (isAdminCookie === 'admin') {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div className={`${styles.aside} ${themeColor === 'dark' ? styles.darkAside : ''}`}>
      <div className={styles.siderContent}>
        <div className={styles.logo}>
        <img src="/Images/logo.png" alt="Logo" width="120px" />

        </div>
        <div className={styles.menuItems}>
          <MenuItem
            name={"home"}
            isActive={pathname === "/"} // Active if on the home page
            onClick={() => handleMenuItemClick("home", "/")}
          />
          <MenuItem
            name={"leaderboard"}
            isActive={pathname === "/leaderboard"} // Active if on the leaderboard page
            onClick={() => handleMenuItemClick("leaderboard", "/leaderboard")}
          />
        </div>
      </div>

      <div className={styles.lightDarkContainer}></div>
    </div>
  );
};

export default AsideMenu;
