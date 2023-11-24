import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Servicos from './components/pages/Servicos';
import Contatos from './components/pages/Contatos';
import { FaHome, FaUser } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";





function App() {
  return (
    <div>



      <BrowserRouter>
        <ul className='ul1'>
          <li className='li1'><NavLink to="/" activeClassName="active" className="Link"><FaHome />
            Home</NavLink></li>
          <li className='li1'><NavLink to="/sobre" activeClassName="active" className="Link"><FaUser />Sobre</NavLink></li>
          <li className='li1'><NavLink to="/servicos" activeClassName="active" className="Link"><MdElectricBolt />
            Serviços</NavLink></li>
          <li className='li1'><NavLink to="/contatos" activeClassName="active" className="Link"><HiChatBubbleOvalLeftEllipsis />
            Contato</NavLink></li>



        </ul>


        {/* aqui aparecerá o componente da rota  */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contatos" element={<Contatos />} />

        </Routes>
      </BrowserRouter>




      {/* Fim do componente da rota */}




      <div>
        <footer className="footer">
          <p>© 2023 Seu Nome. Todos os direitos reservados.</p>
        </footer>
      </div>

    </div>
  );
}

export default App;
