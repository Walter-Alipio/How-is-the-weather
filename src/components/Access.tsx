import { Outlet } from "react-router-dom";
import { IUnit } from "../routes";
import Header from './Header'

interface Props {
   setUnit:  React.Dispatch<React.SetStateAction<IUnit>>
}

export default function AccessPage({setUnit}: Props){
  return (
    <>
      <Header setUnit={setUnit}/>
      <main className='h-[calc(100vh-2.75rem)] flex items-center justify-center p-5'>
        <Outlet />
      </main>
    </>
  );
}