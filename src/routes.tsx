import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';

export default function AppRoutes(){
  return (
    <BrowserRouter>
    <main className='h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={ <Home />} />
        </Route>
      </Routes>
    </main>
    </BrowserRouter>
  )
}