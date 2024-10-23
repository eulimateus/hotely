function criarCabecalho() {
    const cabecalho = document.createElement('header');
    cabecalho.innerHTML = `
      <h1>Meu Hotel</h1>
      <nav>
        <ul>
          <li><a href="conteudo.html" target="_parent">Home</a></li>
          <li><a href="Hoteis.html" target="_parent">Hoteis</a></li> 
          <li><a href="contato.html" target="_parent">Contato</a></li>
          <li><a href="sobre.html" target="_parent">Sobre nós</a></li>
        </ul>
      </nav>
    `;
    document.body.insertBefore(cabecalho, document.body.firstChild); 
  }
  
  document.addEventListener('DOMContentLoaded', criarCabecalho);