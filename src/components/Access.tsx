import { Outlet } from 'react-router-dom';
import { ILanguage, IUnit } from '../types/interfaces';
import Footer from './Footer';
import Header from './Header'

interface Props {
   setUnit:  React.Dispatch<React.SetStateAction<IUnit>>,
   setLang: React.Dispatch<React.SetStateAction<ILanguage>>,
   lang: ILanguage
};

export default function AccessPage({setUnit, setLang, lang}: Props){
  return (
    <>
      <Header setUnit={setUnit}/>
      <main className='h-[calc(100vh-7.25rem)] flex items-center justify-center p-5'>
        <Outlet />
      </main>
      <Footer setLang={setLang} lang={lang}/>
    </>
  );
};