import './App.css';

import { Route, Routes } from 'react-router-dom';

import { HomeComponent } from './routes/home/home.component';
import { NavigationComponent } from './routes/navigation/navigation.component';
import { AuthenticationComponent } from './routes/authentication/authentication.component';

const Shop = () => {
    return (
        <div>
            This is page shop
        </div>
    )
}

function App() {
  return (
   <Routes>
       <Route path='/'  element={<NavigationComponent/>}>
         <Route index element={<HomeComponent/>}/>
         <Route path='sign-in' element={<AuthenticationComponent/>}/>
         <Route path='shop' element={<Shop/>}/>
        </Route>
   </Routes>

  );
}

export default App;
