import { useNavigate }  from 'react-router-dom';

interface Props {
  setCity: React.Dispatch<React.SetStateAction<string>>
}

export default function Home({ setCity }: Props){
  const navigate = useNavigate();

  function handleEvent(event: React.ChangeEvent<HTMLInputElement>){
    event.preventDefault;
    setCity(event.target.value);
    navigate('clima')
  }

  return(
    <section className="flex flex-col items-center gap-5 max-w-[44375rem]">
      <h1 className="text-white font-bold text-3xl text-center">Como está o tempo hoje?</h1>
      <input type="text" 
        name="city" 
        id="city"
        aria-label='Nome da cidade' 
        placeholder="Digite o nome da cidade"
        onBlur={(event)=>{handleEvent(event)}}
        className="w-full h-12 rounded-xl p-4 placeholder:text-placeholder text-placeholder"/>  

    </section>
  )
}