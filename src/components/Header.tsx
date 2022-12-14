/// <reference types='vite-plugin-svgr/client' />
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrowLeft.svg';
import { IUnit } from '../types/interfaces';
import Toggle from './Toggle';

interface Props {
   setUnit:  React.Dispatch<React.SetStateAction<IUnit>>
};

export default function Header({setUnit}: Props){

  const navigate = useNavigate();

  const pathname = window.location.pathname; //returns the current url minus the domain name

  return(
  <header className={`h-11 flex px-5 pt-5 justify-between flex-row-reverse`}
  
  >
    { 
      pathname !== '/' ? 
      <button 
        onClick={()=> navigate(-1)}
        arial-label='Voltar'
        title='Voltar'
        className='order-2'
      >
        <ArrowLeft className='hover:fill-slate-500 fill-white'/> 
      </button>
      : ''
    }
    <Toggle setUnit={setUnit} />
  </header>
  );
};