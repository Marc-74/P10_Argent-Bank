import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/home.jsx";
import SignIn from './Pages/SignIn/signIn.jsx';
import Error from './Pages/Error/error.jsx';
import User from './Pages/User/user.jsx';
import store from '../src/store';
import { Provider } from 'react-redux';



function App() {
  return (
    <Provider store={store}>
        <Router>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/logIn' element={<SignIn />} />
            <Route path='/profile' element={<User />} />
            <Route path='*' element={<Error />} />
          </Routes>
       
        </Router>
    </Provider>
  );
}

export default App;