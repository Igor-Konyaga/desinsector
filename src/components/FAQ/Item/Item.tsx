'use client';
import { useEffect, useRef, useState } from 'react';
import { TObj as Props } from '../FAQ';
import styles from './Item.module.scss';
import { ArrowIcon } from '../../CustomIcons/ArrowIcon/ArrowIcon';

export const Item = ({ title, desc }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const [height, setHeight] = useState(0);

  const contentRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <li className={styles.item}>
      <button
        onClick={() => setOpen(!open)}
        className={styles.btn}
        type="button"
      >
        <span className={styles.title}>{title}</span>
        <ArrowIcon active={open} className={styles.icon} />
      </button>
      <p
        ref={contentRef}
        style={{
          height: open ? `${height}px` : '0px',
        }}
        className={open ? `${styles.desc} ${styles.open}` : styles.desc}
      >
        {desc}
      </p>
    </li>
  );
};
