import './App.scss';
// components
import Screen from './components/Screen';
import StartScreen from './components/StartScreen';
import JobTrackerMain from './components/JobTrackerMain';
import JobTrackerForm from './components/JobTrackerForm';
import TrackedJobs from './components/TrackedJobs';
import JobEditor from './components/JobEditor';
import JobJournalMain from './components/JobJournalMain';
import JournalToday from './components/JournalToday';
import JournalYesterday from './components/JournalYesterday';
// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {



  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/yesterday">
            <JournalYesterday />
          </Route>
          <Route path="/journal">
            <JobJournalMain />
          </Route>
          <Route path="/today">
            <JournalToday />
          </Route>
          <Route path="/jobs/:id">
            <JobEditor />
          </Route>
          <Route path="/tracker">
            <JobTrackerMain />
          </Route>
          <Route path="/screen">
            <Screen />
          </Route>
          <Route path="/trackerform">
            <JobTrackerForm />
          </Route>
          <Route path="/trackedjobs">
            <TrackedJobs />
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
