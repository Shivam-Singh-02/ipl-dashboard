import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TeamPage } from './pages/TeamPage';
import { MatchPage } from './pages/MatchPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/teams/:teamName/matches/:year">
            <MatchPage/>
          </Route>
          <Route exact path="/teams/:teamName">
            <TeamPage/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
  
}

export default App;
