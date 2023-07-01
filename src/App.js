import './App.css';
import { Header } from './Components/Header';
import { ScrollBar } from './Components/ScrollBar';
import { Router } from './Config/Router';

function App() {
  return (
    <>
    <Header/>
    <div className='max-w-[1100px] w-full mx-auto mt-20 py-5'>
      <ScrollBar/>
      <Router/>
    </div>
    </>
  );
}

export default App;
