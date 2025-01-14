import {Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import NavigationBar  from './routes/navigation-bar/navigation-bar.component';
import SignIn from './routes/sign-in/sign-in.component';
const App = () => {
 
  return (
    <Routes>
      <Route path='/' element={<NavigationBar/>}>
        <Route index element={<Home/>}/>
        <Route path='/shop'/>
        <Route path='/signIn' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
};

export default App;
