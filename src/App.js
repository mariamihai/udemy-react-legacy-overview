import './App.css';

import { BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to='/users' exact>
              Users
        </NavLink>
          </li>

          <li>
            <NavLink to='/courses'>
              Courses
        </NavLink>
          </li>
        </ul>
      </nav>

      <div className="App">
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
          <Redirect from="/all-courses" to="/courses" />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
