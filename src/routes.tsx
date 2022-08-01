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

export default function AppRoutes(){
  const [city,setCity] = useState('');
  const [unit, setUnit] = useState<IUnit>({unit: 'imperial'});
  const [coordinate, setCoordinate] = useState<ICoordinate>({
    lat: 0,
    lng: 0
  });
  console.log(city,coordinate,unit)

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<AccessPage setUnit={setUnit} />}>
          <Route index element={ 
            <Home 
              setCity={setCity}
              coordinate={coordinate}
              setCoordinate={setCoordinate} 
            />} 
          />

          <Route path='clima' element={
            <Weather 
              city={city}
              unit={unit}
              coordinate={coordinate}
            />} 
          />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
 
    </BrowserRouter>
  )
}