import React from 'react';
import './style.css';

function LessonsLearned() {
  return (
    <div>
      <header id='cabecalho'>
        <h1 id='titulo'>Giovanni Duarte - Lessons Learned</h1>
        <nav id='nav'>
          <a href='#licoes_aprendidas'>Lições Aprendidas</a>
          <a href='#licoes_a_aprender'>Liçoes a Aprender</a>
          <a href='#article'>Artigo</a>
          <a href='#aside'>Passagem sobre meu Aprendizado</a>
        </nav>
      </header>
      <main>
        <section id='imagem'>
          <img
            src='https://avatars.githubusercontent.com/u/83473804?s=400&u=d34bed963f296bfa5b75036caa64d496172278ea&v=4'
            alt='foto do giovanni'
            id='minha_foto'
            width='200px'
          />
        </section>
        <section id='listas'>
          <ol id='licoes_aprendidas'>
            Liçoes Aprendidas
            <li>Unix e Shell</li>
            <li>Git e Github</li>
            <li>Funcionamento da Internet</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Estruturas de Página</li>
            <li>CSS - Propriedades de texto</li>
            <li>CSS - Seletores</li>
            <li>Box Model</li>
            <li>HTML Semântico</li>
          </ol>
          <ul id='licoes_a_aprender'>
            Lições a Aprender
            <li>JavaScript</li>
            <li>Lógica de Programação</li>
            <li>JavaScript - DOM</li>
            <li>JavaScript - Eventos</li>
            <li>JavaScript - Web Storage</li>
            <li>Bibliotecas e Frameworks</li>
            <li>CSS Flexbox</li>
            <li>JavaScript ES6</li>
            <li>JavaScript Assíncrono</li>
            <li>Jest</li>
          </ul>
        </section>
        <section id='textos'>
          <article id='article' className='lado-esquerdo'>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            </p>
          </article>
          <aside id='aside' className='lado-direito'>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes
            </p>
          </aside>
        </section>
      </main>
      <footer id='rodape'>
        <a
          href='https://github.com/gdpinheiro'
          target='_blank'
          rel='noreferrer'
        >
          Meu Perfil no Github
        </a>
        <a href='#imagem'>Voltar ao topo</a>
      </footer>
    </div>
  );
}

export default LessonsLearned;
