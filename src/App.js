import React, {useState, useEffect} from 'react';
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home"
import Contato from "./pages/Contato";
import Tatuadores from "./pages/Tatuadores";
import Atendimentos from "./pages/Atendimentos"
import Cadastro from "./pages/Cadastro"
import CadastroCliente from './pages/CadastroCliente';
import Login from './pages/Login';
import Loader from './pages/layout/Loader'
import EditarAtendimentos from './pages/EditarAtendimentos'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Container from './pages/layout/Container/Container.jsx';
import './App.css';

function App() {

  const location = useLocation()
  const display = location.pathname === '/'
  
  const [Loading, setLoading] = useState(true)

  useEffect(()=> {

    setTimeout(()=> {

      setLoading(false);

    }, 3000)

  }, []);


  return Loading ? <Loader/> : 

      <div className="App">


        {!display && <Header/>}
        
        <Container customClass= "min-height">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/Contato">
              <Contato />
            </Route>

            <Route exact path="/Tatuadores">
              <Tatuadores />
            </Route>

            <Route exact path="/Atendimentos">
              <Atendimentos />
            </Route>

            <Route exact path="/EditarAtendimentos/:atendimentoId">
              <EditarAtendimentos />
            </Route>

            <Route exact path="/EditarAtendimentos">
              <EditarAtendimentos />
            </Route>

            <Route exact path="/Cadastro">
              <Cadastro />
            </Route>

            <Route exact path="/CadastroCliente">
              <CadastroCliente />
            </Route>

            <Route exact path="/Login">
              <Login />
            </Route>

          </Switch>
        </Container>

      {!display && <Footer/>}
    
      </div>

  ;
}

export default App;
