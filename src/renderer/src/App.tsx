import './App.css'

function App() {

  function handleClick() {
    alert('Botão clicado!');
  }

  return (
    <>
      <h1>Hello World!</h1>
      <button id="btn" onClick={handleClick}>Enviar Mensagem</button>
    </>
  )
}

export default App
