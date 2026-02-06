import './App.css'

function App() {

  function handleClick() {
   window.api.sendMessage('Olá do Renderer Process!');
  }

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={handleClick}>Enviar Mensagem</button>
    </>
  )
}

export default App
