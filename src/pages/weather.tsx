import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICoordinate, ILanguage, IUnit } from '../types/interfaces';

import { urlAPI } from '../utils/Url';

interface Props {
  city: string;
  unit: IUnit;
  coordinate: ICoordinate;
  lang: ILanguage;
};

export default function Weather({ city, unit, coordinate, lang }: Props){

  
  const [weather,setWeather] = useState<string>('');
  const [temp,setTemp] = useState<number>(0);
  const [maxTemp,setMaxTemp] = useState<number>(0);
  const [minTemp,setMinTemp] = useState<number>(0);
  const [icon, setIcon] = useState('');
  const [load, setLoad] = useState(true);

  const url = urlAPI({unit,coordinate,lang});
  
  useEffect(()=>{
    const getWeather = async () => {
      setLoad(true);
      const res = await fetch(url).then(data => {
        setLoad(false);
        return data.json();
      }).catch(err=>console.log(err));

      // console.log(res);
      setWeather(res.current.weather[0].description);
      setTemp(parseInt(res.current.temp));
      setMaxTemp(parseInt(res.daily[0].temp.max));
      setMinTemp(parseInt(res.daily[0].temp.min));
      setIcon(res.current.weather[0].icon);
    }
    getWeather();
  },[unit, lang]);

  return (
    <section className='flex flex-col items-center gap-1 max-w-[44.375rem] md:min-w-[40rem] text-white'>
      <h1 className='font-bold text-3xl text-center uppercase md:text-5xl'>{city}</h1>
      {
        load ? 
        <div className='flex items-center gap-3'>
          <span className='w-6 h-6 block border-4 border-solid border-gray-500 rounded-3xl border-t-gray-800 animate-spin'></span>
          <p className='text-base font-semibold'>. . . Loading</p>
        </div>
        :
        <>
          <span className='text-sm first-letter:uppercase text-center md:text-xl'>{weather}</span>

          <div className='flex items-center'>
            <span className='text-5xl md:text-6xl'>{temp}°</span>
            {
              icon !== '' ? 
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={weather} 
              
                className='w-14 h-14 md:w-24 md:h-24'
              />
              : ''
            }
          </div>

          <div className='flex text-xl gap-2 md:text-xl'>
            <span className='uppercase font-bold'>Max:</span>
            <span>{maxTemp}°</span>
            <span className='uppercase font-bold'>Min:</span>
            <span>{minTemp}°</span>
          </div>

          <Link to={'/5dias'}
            className='text-center underline underline-offset-2'
          >
            { 
              lang.lang === 'pt_br'? 'Ver previsão para os próximos 5 dias':
              lang.lang === 'en'? 'See forecast for the next 5 days' :
              'Ver previsión para los próximos 5 días'
            }
          </Link>
        </>
      }
    </section>
  );
};