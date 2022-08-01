import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import AccessPage from './components/Access';
import Home from './pages/home';
import Weather from './pages/weather';


export interface IUnit {
  unit: 'imperial' | 'metric'
}

export default function AppRoutes(){
  const [city,setCity] = useState('');
  const [unit, setUnit] = useState<IUnit>({unit: 'imperial'});
  console.log(unit.unit)
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<AccessPage setUnit={setUnit} />}>
          <Route index element={ 
            <Home 
              setCity={setCity} 
            />} 
              
          />

          <Route path='clima' element={<Weather city={city}/>} />
        </Route>
      </Routes>
 
    </BrowserRouter>
  )
}