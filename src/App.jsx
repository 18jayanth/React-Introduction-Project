import Dynamic from './components/dynamic.jsx';
import Header from './components/header/header.jsx'
import Coreconcepts from './components/Coreconcepts.jsx';
import Examples from './components/Examples.jsx';
export default function App()
{
  return(
    <>
     <Dynamic/> 
    <Header/>
    <main>
   <Coreconcepts/>
    <Examples/>
    </main>
    </>

  );
}