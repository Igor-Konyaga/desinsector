'use client';
import {ReactElement, useEffect, useState} from 'react';
import styles from './PriceCard.module.scss';

type Props = {
    selected: boolean;
    label: string;
    typePest: string;
    Icon: ReactElement;
    ActiveIcon: ReactElement;
    setActiveCard: (typeCard: string) => void;
    setTypePest: (typePest: string) => void;
    activeCard: string | null;
    resultPrice: number;
};

export const PriceCard = ({
                              selected,
                              label,
                              Icon,
                              ActiveIcon,
                              typePest,
                              setActiveCard,
                              setTypePest,
                              activeCard,
                              resultPrice,
                          }: Props) => {


    const handleClickCard = () => {
        setActiveCard(typePest);
        setTypePest(typePest)
    };
    return (
        <li className={styles.calculatorListItem}>
            <button
                type="button"
                className={
                    selected
                        ? `${styles.calculatorListBtn} ${styles.active}`
                        : `${styles.calculatorListBtn}`
                }
                data-typepest={typePest}
                onClick={handleClickCard}
            >
                {selected
                    ? ActiveIcon : Icon}
                <h3 className={styles.itemTitle}>{label}</h3>
            </button>
        </li>
    );
};
