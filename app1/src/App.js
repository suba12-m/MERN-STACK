import logo from './logo.svg';
import './App.css';

import Home from './Home';
import About from './About';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
]);

function App() {
  const getUser =async()=>{
    let res = await fetch("https://reqres.in/api/users/");
    let serverRes = await res.json();
    console.log(serverRes);
  }
  return (
    <div className="App">
      {/* <RouterProvider config = {config}/> */}

      <Home/>
      <About/>
      <button onClick={getUser}> Click to get user List</button>
    </div>
  );
}

export default App;
