'use client';
import {useEffect, useState} from 'react';
import styles from './PriceList.module.scss';
import {CockroachIcon} from '../../../CustomIcons/CockroachIcon/CockroachIcon';
import {PriceCard} from '@/app/components/Price/FromCalc/PriceList/PriceCard/PriceCard';
import {CockroachActiveIcon} from '../../../CustomIcons/CockroachIcon/CockroachActiveIcon';
import {BugActiveIcon} from '../../../CustomIcons/BugIcon/BugActiveIcon';
import {FleaActiveIcon} from '../../../CustomIcons/FleaIcon/FleaActiveIcon';
import {MouseActiveIcon} from '../../../CustomIcons/MouseIcon/MouseActiveIcon';
import {BugIcon} from '../../../CustomIcons/BugIcon/BugIcon';
import {FleaIcon} from '../../../CustomIcons/FleaIcon/FleaIcon';
import {MouseIcon} from '../../../CustomIcons/MouseIcon/MouseIcon';

const calcItems = [
    {
        label: 'Таргани',
        typePest: 'cockroach',
        Icon: <CockroachIcon/>,
        ActiveIcon: <CockroachActiveIcon/>,
    },
    {
        label: 'Клопи',
        typePest: 'bug',
        Icon: <BugIcon/>,
        ActiveIcon: <BugActiveIcon/>,
    },
    {
        label: 'Блохи',
        typePest: 'flea',
        Icon: <FleaIcon/>,
        ActiveIcon: <FleaActiveIcon/>,
    },
    {
        label: 'Гризуни',
        typePest: 'mouse',
        Icon: <MouseIcon/>,
        ActiveIcon: <MouseActiveIcon/>,
    },
];

export const PriceList = ({resultPrice, setTypePest}: {
    resultPrice: number,
    setTypePest: (typePest: string) => void
}) => {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    useEffect(() => {
        if (resultPrice > 0) {
            return setActiveCard(null);
        }
    }, [resultPrice]);

    return (
        <ul className={styles.calculatorList}>
            {calcItems.map(({label, Icon, ActiveIcon, typePest}) => {
                return (
                    <PriceCard
                        selected={activeCard === typePest}
                        resultPrice={resultPrice}
                        activeCard={activeCard}
                        setActiveCard={setActiveCard}
                        setTypePest={setTypePest}
                        key={label}
                        label={label}
                        typePest={typePest}
                        Icon={Icon}
                        ActiveIcon={ActiveIcon}
                    />
                );
            })}
            <input
                className={styles.input}
                name="pest"
                type="text"
                defaultValue={activeCard || ''}
            />
        </ul>
    );
};
