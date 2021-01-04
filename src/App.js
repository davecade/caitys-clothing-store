import './App.scss';
import Homepage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom'

function App() {

  const HatsPage = () => {
    return <h1>HATS PAGE</h1>
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
