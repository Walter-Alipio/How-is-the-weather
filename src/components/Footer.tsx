import  brasil  from '../assets/icons/brasil.svg';
import usa from '../assets/icons/usa.svg';
import spain from '../assets/icons/spain.svg';
import { ILanguage } from '../types/interfaces';


interface Props {
  setLang: React.Dispatch<React.SetStateAction<ILanguage>>,
  lang: ILanguage
};

export default function Footer({setLang, lang}: Props){
  return(
    <footer className='w-full flex flex-col items-center bottom-0 pb-6 text-white'>
      <section className='flex items-center gap-3'>
        <button onClick={()=>setLang({
          language:'Português',
          lang: 'pt_br'
        })}
          className='hover:ring-4 shadow-[#D2B3C1] rounded-full'
        >
          <img src={brasil} alt='Português' title='Português'/>
        </button>

        <button onClick={()=>setLang({
          language:'English',
          lang: 'en'
        })}
          className='hover:ring-4 shadow-[#D2B3C1] rounded-full'
        >
          <img src={usa} alt='English' title='English' />
        </button>

        <button onClick={()=>setLang({
          language:'Español',
          lang: 'es'
        })}
          className='hover:ring-4 shadow-[#D2B3C1] rounded-full'
        >
          <img src={spain} alt="Español" title='Español' />
        </button>
      </section>
      <p className='mt-1'>  
        {
          lang.lang === 'pt_br' ? 
          `Idioma selecionado: ${lang.language}`:
          lang.lang === 'en' ?
          `Selected language: ${lang.language}`:
          `Idioma seleccionado: ${lang.language}`
        }
      </p>
    </footer>
  );
};