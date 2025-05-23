'use client';
import { costСalculation } from '@/utils/calculator';
import styles from './FormCalc.module.scss';
import { FormEvent, useState } from 'react';
import { PriceList } from './PriceList/PriceList';
import { SectionTypeRoom } from './SectionTypeRoom/SectionTypeRoom';
import { SectionInfoRoom } from './SectionInfoRoom/SectionInfoRoom';

export const FormCalc = () => {
  const [resultPrice, setResultPrice] = useState<number>(0);
  const [typePest, setTypePest] = useState<string>('');
  const [squareMeter, setSquareMeter] = useState<string>('');
  const [numberRooms, setNumberRooms] = useState<string>('');
  const [typeRoom, setTypeRoom] = useState<string>('apartment');

  const handleResetCalc = () => {
    setResultPrice(0);
    setSquareMeter('');
    setNumberRooms('');
    setTypeRoom('apartment');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    costСalculation(
      typePest,
      typeRoom,
      squareMeter,
      numberRooms,
      setResultPrice,
    );
  };

  return (
    <form onSubmit={handleSubmit} className={styles.calculatorForm}>
      <p className={styles.calculatorLabel}>Оберіть шкідника:</p>
      <PriceList resultPrice={resultPrice} setTypePest={setTypePest} />
      <div className={styles.wrapperParameter}>
        <SectionTypeRoom resultPrice={resultPrice} setTypeRoom={setTypeRoom} />
        <SectionInfoRoom
          numberRooms={numberRooms}
          setNumberRooms={setNumberRooms}
          squareMeter={squareMeter}
          resultPrice={resultPrice}
          typeRoom={typeRoom}
          setSquareMeter={setSquareMeter}
        />
      </div>
      {resultPrice === 0 ? (
        <button
          disabled={Number(squareMeter) === 0}
          className={styles.submitBtn}
          type="submit"
        >
          Розрахувати
        </button>
      ) : (
        <div className={styles.wrapperResultCalc}>
          <p className={styles.resultPriceLabel}>{resultPrice}грн</p>
          <button
            className={styles.resetBtnCalc}
            type="button"
            onClick={handleResetCalc}
          >
            Обнулити
          </button>
        </div>
      )}
    </form>
  );
};
