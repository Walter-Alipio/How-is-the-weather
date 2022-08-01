import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AccessPage from './components/Access';
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

export default function AppRoutes(){
  const [city,setCity] = useState('');
  const [unit, setUnit] = useState<IUnit>({unit: 'imperial'});
  const [lang, setLang] = useState<ILanguage>({
    language: 'Português',
    lang: 'pt_br'
  })
  const [coordinate, setCoordinate] = useState<ICoordinate>({
    lat: 0,
    lng: 0
  });
  console.log(city, coordinate, unit, lang);

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
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
 
    </BrowserRouter>
  )
}