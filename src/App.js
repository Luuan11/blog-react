
const page = window.location.pathname === '/' ? <div> Olá Mundo </div> : <div> Sobre mim... </div>

function App() {
  return page;
}

export default App;
