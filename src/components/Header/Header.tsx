'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import { Navigation } from '../Navigation/Navigation';
import { MenuIcon } from '../CustomIcons/MenuIcon/MenuIcon';
import { RxCross1 as IconCross } from 'react-icons/rx';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo.jpg';

export const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const handleClickMenu = () => {
    setVisibleMenu(!visibleMenu);
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <Link className={styles.logoLink} href={'/'}>
            <Image className={styles.logo} src={logo} alt="logo" />
          </Link>
        </div>

        <Navigation setOpenMenu={setVisibleMenu} openMenu={visibleMenu} />

        <button onClick={handleClickMenu} className={styles.menuBtn}>
          <p className={styles.menuText}>Menu</p>
          {visibleMenu ? (
            <IconCross className={styles.iconCross} />
          ) : (
            <MenuIcon className={styles.iconMenu} />
          )}
        </button>
      </div>
    </header>
  );
};
