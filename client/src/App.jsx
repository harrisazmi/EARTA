import Registration from "./Registeration";
import axios from 'axios';


function App() {
  axios.defaults.baseURL = 'http://localhost:3333';
  axios.defaults.withCredentials = true;
  return (
    <Registration />
  );
}

export default App
