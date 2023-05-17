import React from 'react'
import MinhaFoto from './Images/minha-foto.jpg';

const Description = (props) => {

  const HandleDescription = (lang) => {
    if (lang === 0) {
      return "Olá! Meu nome é Lucas Freitas Cordeiro, e sou estudante de Análise e Desenvolvimento de Sistemas pela UNIASSELVI e de Técnico em Eletrônica pelo CPET. Sou oriúndo de Pelotas, no estado do Rio Grande do Sul, Brasil. Também sou biólogo e escritor amador, mas mudei para a área de tecnologia em definitivo. Trabalhei por quase um ano na Foursys como estagiário .NET, onde frequentei o bootcamp da empresa e atuei tanto no front como no back-end. Acredito na ideia de que um produto bom é aquele que agrega valor à vida das pessoas. E então: vamos agregar juntos?" 
    } else {
      return " Hello! My name is Lucas Freitas Cordeiro and I am an Analysis and Systems Development student at UNIASSELVI University. I am a brazilian, from Pelotas, Rio Grande do Sul. I am a biologist, having transitioned into the area of technology for good, and I am also an amateur writer. I worked for almost a year at Foursys as a .NET intern, where I attended the company's bootcamp and worked as a front and back-end web developer. I believe in creating products that add value to the lives of other people. Now, let us start adding together?"
    }
  }

  return (
    <section id="about-me">
      <div className="div-titulo-secao">
        <h3 className="titulo-secao pt-br">{props.Language === 0? "Quem sou?" : "Who am I?"}</h3>
        {/* <h3 className="titulo-secao eng">Who am I?</h3> */}
      </div>
      <div className="container-fluid">
        <div className="row item-row image-description-div">
          <div className="col-6 description-div" >               
            <p className="description main-description pt-br">
              {HandleDescription(props.Language)}
            </p>
            {/* <p className="description main-description eng">
             Hello! My name is Lucas Freitas Cordeiro and I am an Analysis and Systems Development student at UNIASSELVI University. I am a brazilian, from Pelotas, Rio Grande do Sul. I am a biologist, having transitioned into the area of technology for good, and I am also an amateur writer. I worked for almost a year at Foursys as a .NET intern, where I attended the company's bootcamp and worked as a front and back-end web developer. I believe in creating products that add value to the lives of other people. Now, let us start adding together?
            </p> */}
          </div>
          <div className="col-6 minha-foto-div">
            <img src={MinhaFoto} className="image my-image" alt="minha foto em semi-perfil disposta no canto direito da tela"/>
          </div>            
        </div>
        <div className="row item-row">
            <h4 className="techs-subtitle pt-br">Tecnologias que conheço:</h4>
            <h4 className="techs-subtitle eng">Technologies I know:</h4>
        </div>
        <div className="row item-row item-row-techs">
            <div className="techs"><span className="badge rounded-pill text-bg-primary"><p className="white-pill">Asp.Net Core</p></span><span className="badge rounded-pill text-bg-danger"><p className="white-pill">HTML</p></span><span className="badge rounded-pill text-bg-info"><p className="white-pill">CSS</p></span><span className="badge rounded-pill text-bg-primary"><p className="white-pill">C#</p></span><span className="badge rounded-pill text-bg-warning"><p className="white-pill">JS</p></span><span className="badge rounded-pill text-bg-warning"><p className="white-pill">JQ</p></span></div>
        </div>
      </div>    
    </section>
  )
}

export default Description