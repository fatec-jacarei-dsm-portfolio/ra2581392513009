import React from 'react';
import '../styles/home.css'
import Laura from '../assets/laura.png'

function Home() {
  return (
    <div className="container">
        <div className="retangulo">
            <div className="conteudo-texto">
                <p>Oi, eu sou a Laura!</p>
                <p>Sou estudante de Desenvolvimento de Software Multiplataforma na FATEC e estagiária na Embraer.</p>
                <p>Sou curiosa, gosto de me desafiar, aprender coisas novas e sou apaixonada por transformar ideias em projetos reais.</p>
                <p>Aqui no meu portfólio você encontra um pouquinho sobre mim, meus projetos e minha trajetória com tecnologia.</p>

                <a class="text" href="https://drive.google.com/file/d/1hjN9xSd5WdSIknSAmcHd2f95MtV_dOv_/view?usp=drive_link" target='_blank' rel="noopener noreferrer">Currículo</a>
            </div>
            <div className="conteudo-img">
                <img src={Laura} alt="laura" />
            </div>
        </div>
    </div>
  );
}

export default Home;
