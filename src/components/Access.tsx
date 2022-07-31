import { Outlet } from "react-router-dom";
import Header from './Header'

export default function AccessPage(){
  return (
    <>
      <Header />
      <main className='h-[calc(100vh-2.75rem)] flex items-center justify-center p-5'>
        <Outlet />
      </main>
    </>
  );
}