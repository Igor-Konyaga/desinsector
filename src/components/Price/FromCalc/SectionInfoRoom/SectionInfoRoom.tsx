import { InputInfoRoom } from '../InputInfoRoom/InputInfoRoom';
import styles from './SectionInfoRoom.module.scss';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type Props = {
  squareMeter: string;
  resultPrice: number;
  typeRoom: string;
  numberRooms: string;
  setNumberRooms: Dispatch<SetStateAction<string>>;
  setSquareMeter: Dispatch<SetStateAction<string>>;
};

export const SectionInfoRoom = ({
  squareMeter,
  setSquareMeter,
  setNumberRooms,
  numberRooms,
  resultPrice,
  typeRoom,
}: Props) => {
  const handleChangeSquareMeter = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSquareMeter(value);
  };

  const handleChangeNumberRooms = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNumberRooms(value);
  };

  return (
    <div className={styles.roomInfo}>
      <InputInfoRoom
        label="Розмір приміщення (м²):"
        disabled={resultPrice > 0}
        type="number"
        name="areaRoom"
        id="areaRooms"
        onChange={handleChangeSquareMeter}
        value={squareMeter}
      />
    </div>
  );
};
