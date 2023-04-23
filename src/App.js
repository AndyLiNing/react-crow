import './App.css';

import { Route, Routes } from "react-router-dom";

import { HomeComponent } from "./routes/home/home.component";
import { NavigationComponent } from "./routes/navigation/navigation.component";
import { SignInComponent } from "./routes/sign-in/sign-in.component";



function App() {
  return (
   <Routes>
       <Route path='/'  element={<NavigationComponent/>}>
         <Route index element={<HomeComponent/>}/>
         <Route path='sign-in' element={<SignInComponent/>}/>
        </Route>
   </Routes>

  );
}

export default App;
