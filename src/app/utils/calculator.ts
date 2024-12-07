import React from 'react';

type TypeFunc = React.Dispatch<React.SetStateAction<number>>;

export const costСalculation = (
  tPest: HTMLInputElement | string,
  tRoom: HTMLInputElement | string,
  aRoom: HTMLInputElement | string,
  nRoom: HTMLInputElement | string,
  setResult: TypeFunc,
): void => {

  const areaRoom = Number(aRoom);
  // const numberRoom = Number(nRoom);


  const apartmentCF =
    (tPest === 'cockroach' || tPest === 'flea') && tRoom === 'apartment';
  const apartmentB = tPest === 'bug' && tRoom === 'apartment';
  const apartmentM = tPest === 'mouse' && tRoom === 'apartment';

  const houseCF =
    (tPest === 'cockroach' || tPest === 'flea') && tRoom === 'house';
  const houseB = tPest === 'bug' && tRoom === 'house';
  const houseM = tPest === 'mouse' && tRoom === 'house';

  let priceSquareMeter: number = 0;

  if (apartmentCF && areaRoom <= 80) {
    priceSquareMeter = 23;
  } else if (apartmentCF && areaRoom > 80) {
    priceSquareMeter = 20;
  }
  if (apartmentB && areaRoom <= 80) {
    priceSquareMeter = 30;
  } else if (apartmentB && areaRoom > 80) {
    priceSquareMeter = 27;
  }
  if (apartmentM && areaRoom <= 80) {
    priceSquareMeter = 15;
  } else if (apartmentM && areaRoom > 80) {
    priceSquareMeter = 13;
  }

  if (houseCF && areaRoom <= 100) {
    priceSquareMeter = 20;
  } else if (houseCF && areaRoom > 100) {
    priceSquareMeter = 18;
  }
  if (houseB && areaRoom <= 100) {
    priceSquareMeter = 25;
  } else if (houseB && areaRoom > 100) {
    priceSquareMeter = 22;
  }
  if (houseM && areaRoom <= 100) {
    priceSquareMeter = 12;
  } else if (houseM && areaRoom > 100) {
    priceSquareMeter = 10;
  }

  const result: number = areaRoom * priceSquareMeter;

  if ((apartmentCF || houseCF) && result <= 1200) {
    return setResult(1200);
  }
  if ((apartmentB || houseB) && result < 1500) {
    return setResult(1500);
  }
  if ((apartmentM || houseM) && result < 1000) {
    return setResult(1000);
  }

  setResult(result);
};
