import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '../Logo';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <Logo />
        <div className={styles.footerCopyright}>
          Copyright ©2025 Movie Explorer
        </div>
      </div>
    </footer>
  );
};
