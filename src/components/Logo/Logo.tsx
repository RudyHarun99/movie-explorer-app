import React from 'react';
import styles from './Logo.module.scss';
import logoTv from '@/assets/Vector.png';

export const Logo: React.FC = () => {
  return (
    <div className={styles.brand}>
      <img className={styles.icon} src={logoTv} alt='logo' />
      <span className={styles.brandText}>Movie</span>
    </div>
  );
};
