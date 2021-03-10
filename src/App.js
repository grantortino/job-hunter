import './App.scss';
import Screen from './components/Screen';
import StartScreen from './components/StartScreen';
import TrackerScreen from './components/TrackerScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tracker">
            <TrackerScreen />
          </Route>
          <Route path="/screen">
            <Screen />
          </Route>
          <Route path="/">
            <StartScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
