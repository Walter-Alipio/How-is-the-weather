/// <reference types="vite-plugin-svgr/client" />
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrowLeft.svg';
import { IUnit } from '../routes';
import Toggle from './Toggle';

interface Props {
   setUnit:  React.Dispatch<React.SetStateAction<IUnit>>
}

export default function Header({setUnit}: Props){

  const navigate = useNavigate();

  const pathname = window.location.pathname //returns the current url minus the domain name
  console.log(pathname);
  return(
  <header className={`h-11 flex px-5 pt-5 justify-between flex-row-reverse`}
  
  >
    { pathname === '/clima' ? 
      <button 
        onClick={()=> navigate(-1)}
        arial-label='Voltar'
        title='Voltar'
        className='order-2'
      >
        <ArrowLeft /> 
      </button>
      : ''
    }
    <Toggle setUnit={setUnit} />
  </header>
  )
}