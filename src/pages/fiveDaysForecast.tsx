import { IFiveDaysForecast } from "../routes";

interface Props{
  city: string; 
  fiveDaysForecast: IFiveDaysForecast[]
}

export default function FiveDaysForecast ({ city, fiveDaysForecast }: Props){
  return (
    <section className="flex flex-col items-center gap-1 max-w-[44.375rem] text-white">
      <h1 className="font-bold text-4xl text-center uppercase md:text-5xl">{city}</h1>
      <p className="text-center">Previsão para 5 dias</p>
      <ul className="w-full">
        {fiveDaysForecast.map((day, i) =>(
          <li key={i} className="flex gap-2 items-center justify-between">
            <p className="first-letter:uppercase font-bold">
              {
                `${day.dayName.week.replace('.','')},
                ${day.dayName.day} 
                ${
                  day.dayName.month.split('').map((element, i) => {
                    if(i !== 0) 
                      return element
                    
                    return element.toUpperCase()                  
                  }).join('').replace('.','')
                }`
              }</p>
              <img src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`} alt="" 
                className="w-5 h-5 "
              />
              <span>{`${day.dayMin}°`}</span>
              <span className="bg-line bg-no-repeat bg-cover w-24 h-1"></span>
              <span>{`${day.dayMax}°`}</span>
              <span className="hidden md:block">{`${day.description}`}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}