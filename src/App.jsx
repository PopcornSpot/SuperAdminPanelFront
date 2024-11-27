import { Route, Routes } from "react-router-dom";
import RouterComponent from "./Components/RouterComponent";
import Login from "./Pages/LoginPage";






const App = () => {
    return (
          <Routes>
            <Route index element={<Login/>} >

            </Route>
            
          </Routes>
    );
  };


  export default App;