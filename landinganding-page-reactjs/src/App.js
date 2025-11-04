import './App.css';

function App() {
  return (
    <div className="App">
        <div className="main">
          <div className="center">
            <div className="menu">
              <div className="logo">
                <h3>MyApp</h3>
              </div>
              <div className="item-menu">
                <a href='#'>login</a>
              </div>
            </div>


            <div className="form">
            <h2> Entre em Contato! </h2>
              <form>
                <div className='items-form'>
                  <input type='text' placeholder='Nome Completo' />
                  <input type='text' placeholder='E-mail' />
                  <input type='text' placeholder='Assunto' />
                  <input type='text' placeholder='Mensagem' />
                  <button type='submit'>Enviar</button>
                </div>
              
              </form>
            </div>


          </div>
        </div>

        <div className="conteudo">
          <div className="center">
           <div className="conteudo-single">
              <h2>Bem-vindo ao MyApp</h2>
              <p>Este é um aplicativo de exemplo criado para demonstrar a estrutura básica de um aplicativo React com um formulário de contato simples.</p>
           </div>
           <div className="conteudo-single">
              <h2>Bem-vindo ao MyApp</h2>
              <p>Este é um aplicativo de exemplo criado para demonstrar a estrutura básica de um aplicativo React com um formulário de contato simples.</p>
           </div>
           <div className="conteudo-single">
              <h2>Bem-vindo ao MyApp</h2>
              <p>Este é um aplicativo de exemplo criado para demonstrar a estrutura básica de um aplicativo React com um formulário de contato simples.</p>
           </div>
           <div className="conteudo-single">
              <h2>Bem-vindo ao MyApp</h2>
              <p>Este é um aplicativo de exemplo criado para demonstrar a estrutura básica de um aplicativo React com um formulário de contato simples.</p>
           </div>
          </div>
        </div>
  
    </div>
  );
}

export default App;
