import LoginPage from './pages/LoginPage'
import './assets/style.css'

function App() {

  return (
    <>
      <div className="container">

        <div className="hero">
            <p>
                "Educação não é o aprendizado de fatos,
                mas treinamento da mente para pensar."
                <span>Albert Einstein</span>
            </p>
        </div>

        <div className="formulario">
            <div>

                <h1>Bem-vindo de volta</h1>
                <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>

                <LoginPage></LoginPage>
                <p className="registre-se">Não tem uma conta? <a href="registro.html">Registre-se agora.</a></p>

            </div>
        </div>
      </div>
    </>
  )
}

export default App
