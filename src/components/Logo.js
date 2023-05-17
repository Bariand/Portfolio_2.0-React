import React from 'react'

const Logo = (props) => {
  return (
    <section id="section-header">
      <h1>Lucas Freitas Cordeiro</h1>
      <div className="black-line-div">
        <div className="black-line"></div>
      </div>        
      <h2 className="pt-br">{props.Language === 0 ? "Web Dev : Estudante de ADS : Estudante de Eletrônica" : "Web Dev : SDA student : Electronics student"}</h2>
      <h2 className="pt-br">{props.Language === 0 ? "Biólogo : MSc e PhD em Ciências Fisiológicas</h2" : "Biologist : MSc & PhD in Fisiological Sciences"}</h2>
      <a link="https://cordeirolf.bio@gmail.com"><p className="link-1">E-mail:cordeirolf.bio@gmail.com</p></a>
      <div id="links">
        <a href="https://linkedin.com/in/lucasfreitascordeiro" target="_blank" rel="noreferrer"><p className="link">Linkedin</p></a>
        <a href="https://github.com/bariand" target="_blank" rel="noreferrer"><p className="link">Github</p></a>
        <a href="http://lattes.cnpq.br/3322914019440460" target="_blank" rel="noreferrer"><p className="link">Lattes</p></a>
      </div>               
    </section>
  )
}

export default Logo