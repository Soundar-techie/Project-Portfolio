import Header from './components/Header';
import About from './pages/About';
import Services from './pages/Services';

function App() {

  return (
    <>
      <div className='bg-[#0F151F]'>
        
      <div>
       <Header/>
      </div>

      <div>
        <About/>
      </div>
      
      <div>
        <Services/>
      </div>
      

      </div>
    </>
  );
};




export default App
