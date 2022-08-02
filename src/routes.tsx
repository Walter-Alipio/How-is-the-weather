import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AccessPage from './components/Access';
import { ICoordinate, IFiveDaysForecast, ILanguage, IUnit } from './types/interfaces';
import FiveDaysForecast from './pages/fiveDaysForecast';
import Home from './pages/home';
import NotFound from './pages/notFound';
import Weather from './pages/weather';


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
            />} 
          />
          <Route path='5dias' element={
            <FiveDaysForecast 
              city={city} 
              unit={unit}
              lang={lang}
              coordinate={coordinate}
              fiveDaysForecast={fiveDaysForecast}
              setFiveDaysForecast={setFiveDaysForecast}
            />
          }/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
 
    </BrowserRouter>
  )
}