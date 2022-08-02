import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AccessPage from './components/Access';
import FiveDaysForecast from './pages/fiveDaysForecast';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Weather from './pages/weather';


export interface IUnit {
  unit: 'imperial' | 'metric'
}

export interface ICoordinate extends google.maps.LatLngLiteral{
  lat: number,
  lng: number
}

export interface ILanguage {
  language: 'Português' | 'English' | 'Español',
  lang: 'pt_br' | 'en' | 'es'
}

export interface IFiveDaysForecast{
  dayName: {
    day: string,
    week: string,
    month: string,
  },
  icon: string,
  dayMax: Number,
  dayMin: Number,
  description: string
}

export default function AppRoutes(){
  const [city, setCity] = useState('');
  const [unit, setUnit] = useState<IUnit>({unit: 'imperial'});
  const [lang, setLang] = useState<ILanguage>({
    language: 'Português',
    lang: 'pt_br'
  })
  const [coordinate, setCoordinate] = useState<ICoordinate>({
    lat: 0,
    lng: 0
  });
  const [fiveDaysForecast, setFiveDaysForecast] = useState<IFiveDaysForecast[]>([]);
  console.log(city, coordinate, unit, lang, fiveDaysForecast);

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<AccessPage setUnit={setUnit} setLang={setLang} lang={lang}/>}>
          <Route index element={ 
            <Home 
              setCity={setCity}
              coordinate={coordinate}
              setCoordinate={setCoordinate}
              lang={lang} 
            />} 
          />

          <Route path='clima' element={
            <Weather 
              city={city}
              unit={unit}
              coordinate={coordinate}
              lang={lang}
              fiveDaysForecast={fiveDaysForecast}
              setFiveDaysForecast={setFiveDaysForecast}
            />} 
          />
          <Route path='5dias' element={
            <FiveDaysForecast 
              city={city} 
              fiveDaysForecast={fiveDaysForecast}
            />
          }/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
 
    </BrowserRouter>
  )
}