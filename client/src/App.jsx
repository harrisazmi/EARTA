import Registration from "./Registeration";


function App() {
  axios.defaults.baseURL = 'http://localhost:4040'
  return (
    <Registration />
  );
}

export default App
