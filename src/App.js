import './App.css';
import Popper from 'popper.js';
import MenuSuperior from './components/MenuSuperior/MenuSuperior';
import Resumo from "./components/Resumo/Resumo";
import Consultas from "./components/Consultas/Consultas";
import Faturamento from "./components/Faturamento/Faturamento";
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        
        <MenuSuperior />
        <div className="conteiner-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/consultas" component={Consultas} />
                <Route path="/faturamento" component={Faturamento} />
                <Route path="/" exact component={Resumo} />
              </Switch>
            </div>
          </div>
        </div>
      

    </div>
  );
}

export default App;
