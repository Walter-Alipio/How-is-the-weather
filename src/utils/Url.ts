import { ICoordinate, ILanguage, IUnit } from "../interfaces/interfaces";


interface Props {
  unit: IUnit;
  coordinate: ICoordinate;
  lang: ILanguage;
}

export function urlAPI({unit, coordinate,lang}: Props){
  //montando url da api openweather
  const units = unit.unit;
  const language = lang.lang;
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;

  return `http://api.openweathermap.org/data/3.0/onecall?lat=${coordinate.lat}&lon=${coordinate.lng}&units=${units}&appid=${API_KEY}&lang=${language}`
}