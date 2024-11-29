import { Outlet } from "react-router-dom";
import Header from './AppHeader'

export default function DefaultLayout(){
   return(
    <>
       <Header />
        <main>
          <Outlet /> 
        </main>
    </>
  )
}