import  brasil  from '../assets/icons/brasil.svg';
import usa from '../assets/icons/usa.svg';
import spain from '../assets/icons/spain.svg';
import { ILanguage } from '../routes';

interface Props {
  setLang: React.Dispatch<React.SetStateAction<ILanguage>>,
  lang: ILanguage
}

export default function Footer({setLang, lang}: Props){
  return(
    <footer className="w-full flex flex-col items-center bottom-0 pb-6 text-white">
      <section className='flex items-center gap-3'>
        <button onClick={()=>setLang({
          language:'Português',
          lang: 'pt_br'
        })}>
          <img src={brasil} alt="Português" />
        </button>

        <button onClick={()=>setLang({
          language:'English',
          lang: 'en'
        })}>
          <img src={usa} alt="English" />
        </button>

        <button onClick={()=>setLang({
          language:'Español',
          lang: 'es'
        })}>
          <img src={spain} alt="Español" />
        </button>
      </section>
      {
        lang.lang === 'pt_br' ? 
        <p>Idioma selecionado: {lang.language}</p> :
        lang.lang === 'en' ?
        <p>Selected language: {lang.language}</p> :
        <p>Idioma seleccionado: {lang.language}</p>

      }
    </footer>
  )
}