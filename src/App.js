import './App.css';

import { BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <nav>
          <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
            <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to='/users' exact>
                Users
        </NavLink>
            </li>

            <li style={{ margin: '10px', display: 'inline-block' }}>
              <NavLink to='/courses'>
                Courses
        </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
