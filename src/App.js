import Tecnologias from './components/Tecnologias.js';
import TecnologiasFullSize from './components/TecnologiasFullSize.js';
import Metodologias from './components/Metodologias.js';
import MetodologiasFullSize from './components/MetodologiasFullSize.js';
import Formulario from './components/Formulario.js';
import Projetos from './components/Projetos.js';
import Banner from './components/Banner.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Footer from './components/Footer.js';
import './index.css';

function App() {
  return (
<>
<Header/>
<Sidebar/>
<Banner/>
<Tecnologias/>
<TecnologiasFullSize/>  
<Projetos/>
<Metodologias/> 
<MetodologiasFullSize/>
<Formulario/>
<Footer/>
</>
  );
}

export default App;
