import { useEffect, useState } from 'react';
import { ICoordinate, IFiveDaysForecast, ILanguage, IUnit } from '../types/interfaces';
import { urlAPI } from '../utils/Url';

interface Props{
  city: string; 
  unit: IUnit;
  coordinate: ICoordinate;
  lang: ILanguage;
  fiveDaysForecast: IFiveDaysForecast[];
  setFiveDaysForecast: React.Dispatch<React.SetStateAction<IFiveDaysForecast[]>>
};

export default function FiveDaysForecast ({ city, fiveDaysForecast, unit,coordinate, lang, setFiveDaysForecast }: Props){
  const [load, setLoad] = useState(true);

  const url = urlAPI({unit,coordinate,lang});

  useEffect(()=>{
    const getFiveDaysWeather = async () => {
      setLoad(true);
      const res = await fetch(url).then(data =>{
        setLoad(false);
        return data.json();
      }).catch(err=>console.log(err));
      
      //pegando a previsão dos próximos 5 dias
      const forcastArray: IFiveDaysForecast[] = [];
      res.daily.forEach((value: any, i: number) => {
        if(i > 0 && i <= 5){
          //console.log(value);
          const forcast = {
            dayName: {
              day: new Date(value.dt * 1000).toLocaleDateString(lang.lang === 'pt_br'? 'pt-br': lang.lang,{day: '2-digit'  }),
              week: new Date(value.dt * 1000).toLocaleDateString(lang.lang === 'pt_br'? 'pt-br': lang.lang,{weekday: 'short'}),
              month: new Date(value.dt * 1000).toLocaleDateString(lang.lang === 'pt_br'? 'pt-br': lang.lang,{month: 'short'}),
          
            },
            icon: value.weather[0].icon,
            dayMax: parseInt(value.temp.max),
            dayMin: parseInt(value.temp.min),
            description: value.weather[0].description
          }
          forcastArray.push(forcast);
        }
      });
      setFiveDaysForecast(forcastArray);
      //console.log(fiveDaysForecast); 
    }
    getFiveDaysWeather();
  },[unit,lang]);

  return (
    <section className='flex flex-col items-center gap-1  text-white'>
      <h1 className='font-bold text-4xl text-center uppercase md:text-5xl'>{city}</h1>
      {
        load ? 
        <div className='flex items-center gap-3'>
          <span className='w-6 h-6 block border-4 border-solid border-gray-500 rounded-3xl border-t-gray-800 animate-spin'></span>
          <p className='text-base font-semibold'>. . . Loading</p>
        </div>
        :
        <>
          <p className='text-center mb-24'>
            { lang.lang === 'pt_br'? 'Previsão para os próximos 5 dias':
            lang.lang === 'en'? 'Forecast for the next 5 days' :
            'Pronóstico para los próximos 5 días'
          }
          </p>
          <ul className='w-full flex flex-col gap-4'>
            {fiveDaysForecast.map((day, i) =>(
              <li key={i} 
                className='flex gap-2 items-center justify-between md:grid md:grid-cols-listWeather auto-cols-fr md:justify-center md:gap-8'
              >
                <p className='first-letter:uppercase font-bold md:text-xl'>
                  {
                    `${day.dayName.week.replace('.','')},
                    ${day.dayName.day} 
                    ${
                      day.dayName.month.split('').map((element, i) => {
                        if(i !== 0) 
                          return element
                        
                        return element.toUpperCase();                  
                      }).join('').replace('.','')
                    }`
                  }</p>
                  <img src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} alt={day.description} 
                    className='w-5 h-5 md:w-10 md:h-10'
                  />
                  <span>{`${day.dayMin}°`}</span>
                  <span className='bg-line bg-no-repeat bg-cover w-24 h-1 md:w-32'></span>
                  <span>{`${day.dayMax}°`}</span>
                  <span className='hidden md:block'>{`${day.description}`}</span>
              </li>
            ))}
          </ul>
        </>
      }
    </section>
  );
};