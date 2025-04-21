import { InputTypeRoom } from '../InputTypeRoom/InputTypeRoom';
import styles from './SectionTypeRoom.module.scss';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type Props = {
  resultPrice: number;
  setTypeRoom: Dispatch<SetStateAction<string>>;
};

export const SectionTypeRoom = ({ resultPrice, setTypeRoom }: Props) => {
  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTypeRoom(value);
  };

  return (
    <div className={styles.typeRoom}>
      <h3 className={styles.typeRoomTitle}>Вид приміщення:</h3>
      <div className={styles.groupInputs}>
        <InputTypeRoom
          id="apartment"
          value="apartment"
          disabled={resultPrice > 0}
          type="radio"
          name="typeRoom"
          onChange={handleChangeRadio}
          label="Квартира"
          defaultChecked
        />

        <InputTypeRoom
          id="house"
          value="house"
          disabled={resultPrice > 0}
          type="radio"
          name="typeRoom"
          onChange={handleChangeRadio}
          label="Будинок"
        />

        <InputTypeRoom
          id="commercial"
          value="commercial"
          disabled={resultPrice > 0}
          type="radio"
          name="typeRoom"
          onChange={handleChangeRadio}
          label="Комерція"
        />
      </div>
    </div>
  );
};
