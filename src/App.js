import {lazy , Suspense} from 'react';
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import * as ROUTES from './constants/routes';
const Login = lazy(()=> import('./pages/loginpage'))

function App(){
  return(
    <Router>
      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route exact path={ROUTES.LOGIN} element={<Login/>}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App