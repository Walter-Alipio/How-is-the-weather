
interface Props {
  city: string;
}

export default function Weather({ city }: Props){
  
  const weather = 'Nuvens dispersas';
  const temp = 29;
  const maxTemp = 29;
  const minTemp = 14;

  return (
    <section className="flex flex-col items-center gap-1 max-w-[44375rem] text-white">
      <h1 className="font-bold text-3xl text-center uppercase">{city}</h1>
      <span className="text-sm">{weather}</span>
      <span className="text-5xl">{temp}°</span>
      <div className="flex text-xl gap-2">
        <span className="uppercase font-bold">Max:</span>
        <span>{maxTemp}°</span>
        <span className="uppercase font-bold">Min:</span>
        <span>{minTemp}°</span>
      </div>
    </section>
  )
}