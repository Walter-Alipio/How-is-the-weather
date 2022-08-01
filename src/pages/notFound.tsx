import { Link } from "react-router-dom";

export default function NotFound(){
  return(
    <section className="flex flex-col items-center text-white">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-lg">Página não encontrada</p>
      <Link to={'/'} className="underline text-red-700">Voltar a pagina inicial</Link>
    </section>
  )
}