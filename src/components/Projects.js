import React from 'react'
import MicheleBolsasIndex from './Images/michele-bolsas-index.png';
import ImgFourGold from './Images/img-four-gold.png';
import ImgFourBlog from './Images/img-four-blog.png';
import ImgFourTask from './Images/img-four-task.png';
import ImgDesignThinking from './Images/img-design-thinking.png';

const Projects = (props) => {



  const HandleProjDesc1 = (lang) => {
    if (lang === 0) {
      return "Este é um site que estou criando para ajudar minha esposa nos negócios dela. Ele se encontra em desenvolvimento."
    } else {
      return "This is a website I'm creating to help my wife with her small business. It is currently on hold for personal reasons."
    }
  }
  const HandleProjDesc2 = (lang) => {
    if (lang === 0) {
      return "Este foi um projeto desenvolvido em grupo e a avaliação final do Fourcamp da Foursys."
    } else {
      return "This was a team project and also the final evaluation of Foursys' Fourcamp."
    }
  }
  const HandleProjDesc3 = (lang) => {
    if (lang === 0) {
      return "Projeto individual de meu estágio na Foursys que tinha como objetivo contruir um blog." 
    } else {
      return "Individual project of my internship at Foursys that aimed at building a blog from scratch."
    }
  }
  const HandleProjDesc4 = (lang) => {
    if (lang === 0) {
      return "Outro projeto individual da Foursys, desta vez o objetivo era criar um site de organização de grupos de trabalho e suas tarefas."
    } else {
      return "Another individual project at Foursys, this time the goal was to create a site for organizing working groups and their tasks."
    }
  }
  const HandleProjDesc5 = (lang) => {
    if (lang === 0) {
      return "Dois projetos, um em grupo e outro individual de Design Thinking, tudo construído no website do Miro."
    } else {
      return "Two Design Thinking projects, one developed in a team and the the other done individualy, both built on Miro's website."
    }
  }

  return (
    <section id="projects">
      <div className="div-titulo-secao div-titulo-secao-projetos">
        <h3 className="titulo-secao pt-br">{props.Language === 0 ? "Meus Projetos" : "My Projects"}</h3>
      </div>
      {/*projeto 1*/}
      <div className="container-fluid container-projects">
        <div className="row item-row item-row-left-to-right"> 
          <div className="col-6 projects-image-div">
            <img src={MicheleBolsasIndex} className="image image-projects image-project1" alt="foto da página inicial do projeto Michele Bolsas, demonstrando um menu em tons púrpura e rosado com fundo negro."/>                 
          </div>        
          <div className="col-6 description-div projects-description-div">
            <h4>Michele Bolsas Personalizadas</h4>
            <p className="description description-projects pt-br">
              {HandleProjDesc1(props.Language)}
            </p>
            <div className="techs techs-projects">
              <span className="badge rounded-pill text-bg-danger"><p className="white-pill">HTML</p></span>
              <span className="badge rounded-pill text-bg-info"><p className="white-pill">CSS</p></span>
            </div>
          </div>    
        </div>
      </div>          
      <div className="black-line-div">
          <div className="black-line"></div>
      </div>
      {/*projeto 2*/}
      <div className="container-fluid container-projects">
        <div className="row item-row item-row-right-to-left"> 
          <div className="col-6 projects-image-div">
            <a href="https://github.com/Bariand/Projeto-FourGold" target="_blank" rel="noreferrer">
              <img src={ImgFourGold} className="image image-projects image-project2" alt="Imagem datela inicial do projeto Fourgold, demonstrando uma moça asiática sorridente com um fundo com degradê púrpura-dourado."/>
            </a>           
          </div>        
          <div className="col-6 description-div projects-description-div">
            <h4>Four Gold</h4>
              <p className="description description-projects pt-br">
                {HandleProjDesc2(props.Language)}
              </p>
            <div className="techs techs-projects">
              <span className="badge rounded-pill text-bg-primary"><p className="white-pill">Asp.Net Core</p></span>
              <span className="badge rounded-pill text-bg-danger"><p className="white-pill">HTML</p></span>
              <span className="badge rounded-pill text-bg-info"><p className="white-pill">CSS</p></span>
              <span className="badge rounded-pill text-bg-primary"><p className="white-pill">C#</p></span>
              <span className="badge rounded-pill text-bg-warning"><p className="white-pill">JS</p></span>
            </div>
          </div>    
        </div>
      </div>
      <div className="black-line-div">
          <div className="black-line"></div>
      </div>
      {/*projeto 3*/}
      <div className="container-fluid container-projects">
        <div className="row item-row item-row-left-to-right"> 
          <div className="col-6 projects-image-div">
            <a href="https://github.com/Bariand/FourBlog_Lucas" target="_blank" rel="noreferrer">
              <img src={ImgFourBlog} className="image image-projects image-project3" alt="Imagem da tela de postagens públicas do projeto Fourblog, com fundo escuro com a imagem de um livro aberto."/>
            </a>                
          </div>        
          <div className="col-6 description-div projects-description-div">
            <h4>Four Blog</h4>
            <p className="description description-projects pt-br">
              {HandleProjDesc3(props.Language)}
            </p>
            <div className="techs techs-projects">
              <span className="badge rounded-pill text-bg-primary"><p className="white-pill">Asp.Net Core</p></span>
              <span className="badge rounded-pill text-bg-danger"><p className="white-pill">HTML</p></span>
              <span className="badge rounded-pill text-bg-info"><p className="white-pill">CSS</p></span>
              <span className="badge rounded-pill text-bg-primary"><p className="white-pill">C#</p></span>
              <span className="badge rounded-pill text-bg-warning"><p className="white-pill">JS</p></span>
            </div>
          </div>    
        </div>
      </div>
      <div className="black-line-div">
          <div className="black-line"></div>
      </div>
      {/*projeto 4*/}
      <div className="container-fluid container-projects">
        <div className="row item-row item-row-right-to-left"> 
          <div className="col-6 projects-image-div">
            <a href="https://github.com/Bariand/FourTask_Lucas" target="_blank" rel="noreferrer">
              <img src={ImgFourTask} className="image image-projects image-project4" alt="Imagem da tela de tarefas da equipe do projeto Fourtask, com fundo escudo com a imagem de três teclas de teclado desalinhadas formando a palavra 'WEB'"/>
            </a>                                      
          </div>        
          <div className="col-6 description-div projects-description-div">
            <h4>Four Task</h4>
            <p className="description description-projects pt-br">
              {HandleProjDesc4(props.Language)}
            </p>
            <div className="techs techs-projects">
              <span className="badge rounded-pill text-bg-primary"><p className="white-pill">Asp.Net Core</p></span>
              <span className="badge rounded-pill text-bg-danger"><p className="white-pill">HTML</p></span>
              <span className="badge rounded-pill text-bg-info"><p className="white-pill">CSS</p></span>
              <span className="badge rounded-pill text-bg-primary"><p className="white-pill">C#</p></span>
              <span className="badge rounded-pill text-bg-warning"><p className="white-pill">JS</p></span>
            </div>
          </div>    
        </div>
      </div>
      <div className="black-line-div">
          <div className="black-line"></div>
      </div>
      {/*projeto 5*/}
      <div className="container-fluid container-projects">
        <div className="row item-row item-row-left-to-right"> 
          <div className="col-6 projects-image-div">
            <a href="https://github.com/Bariand/Design_Thinking" target="_blank" rel="noreferrer">
              <img src={ImgDesignThinking} className="image image-projects image-project5" alt="Imagem da tela do Miro onde é mostrado parte do esquema de um dos dois projetos de Design Thinking que ocorreram no Fourcamp"/>
            </a>                 
          </div>        
          <div className="col-6 description-div projects-description-div">
            <h4>Design Thinking</h4>
            <p className="description description-projects pt-br">
              {HandleProjDesc5(props.Language)}
            </p>
          </div>    
        </div>
      </div>
    </section>
  )
}

export default Projects