import React, { useState } from 'react';
import '../styles/projects.css';
import Select from 'react-select';

const projects = [
  {
    id: 1,
    name: "Iniciação Tecnológica (INPE)",
    image: require('../assets/projetoX.png'),
    description: "Realizei uma pesquisa aplicada ao uso de técnicas de Inteligência Artificial no processamento de imagens de satélite, com foco na detecção de incêndios florestais no Programa Queimadas. Criei ferramentas de software que automatizavam tarefas manuais suscetíveis a erro, visando acelerar e tornar mais precisa a classificação de áreas queimadas. A solução contribuiu para reduzir a carga de trabalho humano e aumentar a confiabilidade das análises. A experiência fortaleceu minha autonomia técnica, pensamento analítico e habilidades de resolução de problemas. Apesquisa foi avaliada como “Muito Bom”, com nota final 9,14.",
    contributions: "Desenvolvi um classificador com a inteligência artificial KNN (K-Nearest Neighbors) aprimorado com o NDVI (Indice de Vegetação), incorporando métodos para calcular a distância entre dois vetores, realizar classificações por meio de votação usando KNN e gerar uma imagem que diferencia áreas de vegetação(representadas em branco) de áreas de queimada(em preto). Além do sistema, também desenvolvi um relatório sobre toda a pesquisa e seus resultados.",
    hardSkills: "TypeScript, JavaScript, Python, K-Nearest-Neighbors, NDVI, NodeJS",
    softSkills: "Autonomia",
    repository: "http://mtc-m21d.sid.inpe.br/col/sid.inpe.br/mtc-m21d/2024/08.13.14.55/doc/thisInformationItemHomePage.html",
    tags: ["pesquisa", "inteligência artificial"],
    technologies: ["TypeScript", "JavaScript", "Python", "K-Nearest-Neighbors", "NDVI", "NodeJS"],
    demoImages: [require('../assets/queimada1.png'), require('../assets/queimada2.png'), require('../assets/queimada3.png')] 
  },
  {
    id: 2,
    name: "UNES",
    image: require('../assets/projetoI.png'),
    description: "Um site educacional com recursos interativos desenvolvido por mim para a aula de Desenvolvimento Web I.",
    contributions: "Desenvolvi o site completo, criei e gerenciei o banco de dados, e configurei o Docker para garantir que o ambiente de desenvolvimento fosse replicável e eficiente. Evoluí bastante na parte de comunicação pois foi bem difícil me adaptar às novas tecnologias e precisei me comunicar bastante com professores e colegas.",
    hardSkills: "HTML, CSS, MySQL, Docker, Flask e Python.",
    softSkills: "Autonomia e comunicação.",
    repository: "https://github.com/eulauragabriel/site-unes",
    tags: ["faculdade", "website"],
    technologies: ["HTML", "CSS", "MySQL", "Docker", "Flask", "Python"]
  },
  {
    id: 3,
    name: "Portfólio Design Digital",
    image: require('../assets/projetoII.png'),
    description: "Uma coleção pessoal de trabalhos desenvolvida por mim para a aula de Design Digital.",
    contributions: "Além de desenvolver o site, trabalhei intensamente no design, aplicando conceitos que aprendi durante o curso. Foi uma experiência muito desafiadora mas que me ajudou a perceber que me identificava bastante com a parte de frontend.",
    hardSkills: "Figma, HTML, CSS, JavaScript, Python, Flask e Vercel.",
    softSkills: "Autonomia e estimativa de prazo.",
    repository: "https://github.com/eulauragabriel/design-digital-portfolio",
    tags: ["faculdade", "pessoal", "website"],
    technologies: ["Figma", "HTML", "CSS", "JavaScript", "Python", "Flask", "Vercel"]
  },
  {
    id: 4,
    name: "Projeto Integrador 1° Semestre",
    image: require('../assets/projetoIII.png'),
    description: "Um site desenvolvido pela minha equipe sobre Covid Longa no qual participei do time de desenvolvimento.",
    contributions: "Realizei pesquisas detalhadas sobre Covid Longa, desenvolvi partes do site e ajudei a construir o banco de dados. Lidamos com requisições de um cliente (Rede Vanguarda) e tivemos que nos adaptar bastante pois tivemos muitos desafios como a dificuldade para fazer raspagem de dados no site que utilizamos como base e a falta de dados muito precisos sobre o assunto.",
    hardSkills: "Figma, HTML, CSS, JavaScript, ChartJS, Python, Flask, MySQL e Excel.",
    softSkills: "Comunicação, trabalho em equipe e empatia.",
    repository: "https://github.com/Equipe-CodeLand/API-2023.1",
    tags: ["faculdade", "website"],
    technologies: ["Figma", "HTML", "CSS", "JavaScript", "ChartJS", "Python", "Flask", "MySQL", "Excel"]
  },
  {
    id: 5,
    name: "Gerenciador de Músicas",
    image: require('../assets/projetoVI.png'),
    description: "Um CRUD desenvolvido por mim para aula de Desenvolvimento Web II.",
    contributions: "Desenvolvi o site, criei e gerenciei o banco de dados e implementei funcionalidades em JavaScript, NodeJS e Express. Foi um projeto que me auxiliou muito na questão de aprendizado de JavaScript e Express, pois foi um CRUD bem completo e anteriormente estava tendo bastante dificuldade com as tecnologias.",
    hardSkills: "HTML, CSS, JavaScript, NodeJS, Express e MySQL.",
    softSkills: "Autonomia e habilidade de estimar prazos.",
    repository: "https://github.com/eulauragabriel/desenvolvimento-web-II/tree/main/lista_03",
    tags: ["faculdade", "website", "banco de dados"],
    technologies: ["HTML", "CSS", "JavaScript", "NodeJS", "Express", "MySQL"]
  },
  {
    id: 6,
    name: "World Beauty",
    image: require('../assets/projetoV.png'),
    description: "Um site destinado à uma empresa fictícia World Beauty desenvolvido por mim e por uma colega para a aula de Tecnicas de Programação I.",
    contributions: "Desenvolvi o site em dupla e trabalhei na implementação da linguagem TypeScript. Foi um projeto grande para uma disciplina da faculdade e bastante trabalhoso, principalmente na questão de desenvolver todo o backend e todo o frontend.",
    hardSkills: "HTML, CSS, JavaScript, TypeScript, MySQL, NodeJS e React.",
    softSkills: "Comunicação, trabalho em equipe e autonomia.",
    repository: "https://github.com/leticiacarvalho04/WB/tree/atvi5-wb",
    tags: ["faculdade", "website", "banco de dados"],
    technologies: ["HTML", "CSS", "JavaScript", "MySQL", "NodeJS", "TypeScript", "React"]
  },
  {
    id: 7,
    name: "Projeto Integrador 2° Semestre",
    image: require('../assets/projetoIV.png'),
    description: "Um site de Gerenciamento de Chamadas desenvolvido pela minha equipe no qual participei do time de desenvolvimento.",
    contributions: "Fui responsável pelo desenvolvimento do site, criação do README.md no GitHub e gerenciamento do banco de dados. Este projeto foi uma experiência muito desafiadora pois foi desenvolvido um sistema mais complexo com CRUDs, o entendimento do TypeORM foi bastante complexo e a conexão entre frontend e backend também foi um desafio.",
    hardSkills: "HTML, CSS, JavaScript, TypeScript, TypeORM, MySQL, Excel, React e NodeJS.",
    softSkills: "Comunicação, trabalho em equipe, empatia e autonomia.",
    repository: "https://github.com/Equipe-CodeLand/API-2023.2",
    tags: ["faculdade", "website", "banco de dados"],
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "TypeORM", "MySQL", "Excel", "React", "NodeJS"]
  },
  {
    id: 8,
    name: "Chatbot Sorveteria",
    image: require('../assets/projetoVIII.png'),
    description: "Um chatbot que simula a realização de compras em uma sorveteria desenvolvido em dupla para a disciplina de Interação Humano Computador.",
    contributions: "Desenvolvi o chatbot, trabalhei na implementação do chatbot no Telegram, utilizando o BotFather e no Jupyter Notebook através do Colab. Foi um projeto muito desafiador pois foi a primeira vez que trabalhei com chatbots e tive que aprender a utilizar bots no Telegram e o Colab.",
    hardSkills: "Telegram Bot, Jupyter Notebook, Python e Colab.",
    softSkills: "Comunicação, trabalho em equipe e autonomia.",
    repository: "https://github.com/eulauragabriel/interacao-humano-computador/tree/main/IHC-sota",
    tags: ["faculdade", "chatbot"],
    technologies: ["Telegram Bot", "Jupyter Notebook", "Python", "Colab"]
  },
  {
    id: 9,
    name: "Projeto Integrador 3° Semestre",
    image: require('../assets/projetoVII.png'),
    description: "Um site desenvolvido pela minha equipe sobre um sistema de Gerenciamento de Ativos para a empresa YouTan no qual participei do time de desenvolvimento.",
    contributions: "Desenvolvi o site, gerenciei o banco de dados, implementei cadastros com TypeScript e Java e trabalhei na padronização do projeto. Neste projeto aprendi muito sobre padronização em código principalmente na parte da linguagem Java, foi um grande desafio até mesmo na parte da adaptação de uma IDE nova. A parte de ter um cliente externo também agregou bastante pois tivemos a oportunidade de conversar e entender as necessidades de um cliente real.",
    hardSkills: "Figma, HTML, CSS, JavaScript, Java, React, NodeJS e MySQL.",
    softSkills: "Comunicação, trabalho em equipe, empatia, autonomia, estimativa de prazo e habilidade de comunicação com clientes externos.",
    repository: "https://github.com/Equipe-CodeLand/API-2024.1",
    tags: ["faculdade", "website", "banco de dados"],
    technologies: ["Figma", "HTML", "CSS", "JavaScript", "Java", "React", "NodeJS", "MySQL"]
  },
  {
    id: 10,
    name: "Mercado Livre NoSQL",
    image: require('../assets/projetoXI.png'),
    description: "Criação de 4 bancos de dados para a disciplina de Banco de Dados Não Relacional.",
    contributions: "Desenvolvi os bancos de dados, criei as tabelas e inseri e manipulei os dados. Foi um projeto muito desafiador pois foi a primeira vez que trabalhei com bancos de dados não relacionais e tive que aprender a utilizar o MongoDB, Redis, Cassandra e o Neo4j.",
    hardSkills: "Vertabelo, MongoDB, Redis, Cassandra e Neo4j.",
    softSkills: "Autonomia e habilidade de estimar prazos.",
    repository: "https://github.com/eulauragabriel/nosql-databases",
    tags: ["faculdade", "banco de dados"],
    technologies: ["Vertabelo", "MongoDB", "Redis", "Cassandra", "Neo4j"]
  },
  {
    id: 11,
    name: "Aplicativo Sweet & Sour",
    image: require('../assets/projetoXIV.png'),
    description: "Um aplicativo de receitas desenvolvido em dupla para a disciplina de Programação para Dispositivos Móveis.",
    contributions: "Desenvolvi o aplicativo, trabalhei desde o desenvolvimento do design até na implementação dos CRUDs para cada funcionalidade, na implementação do aplicativo no React Native através do Expo. Foi um projeto muito desafiador pois foi a primeira vez que trabalhei com desenvolvimento mobile e tive que aprender a utilizar o React Native, a parte de inserção de imagens e sua integração com o firebase foram as mais difíceis.",
    hardSkills: "Figma, HTML, CSS, JavaScript, React Native, Expo e Firebase.",
    softSkills: "Comunicação, trabalho em equipe e autonomia.",
    repository: "https://github.com/fatec-atv/sweet-sour",
    tags: ["faculdade", "aplicativo", "banco de dados"],
    technologies: ["Figma", "HTML", "CSS", "JavaScript", "React Native", "Expo", "Firebase"]
  },
  {
    id: 12,
    name: "Projeto Integrador 4° Semestre",
    image: require('../assets/projetoXII.png'),
    description: "Um sistema de coleta de dados de estações meteorológicas, onde a plataforma deve receber as informações da estação metereológica e em caso de emergência mostrar uma notificação alertando a população.",
    contributions: "Neste projeto ocupei a posição de Srum Master, onde fui responsável por manter a equipe organizada e garantir que o projeto fosse entregue no prazo. Foi um projeto muito desafiador pois tivemos que utilizar diversas tecnologias novas, realizar um trabalho adicional de DevOps, implementar um datallogger que recebe dados reais de uma placa Arduino, além de termos que nos adaptar a um cliente real (Tecsus).",
    hardSkills: "Figma, Jira, Swagger, NodeJS, React, TypeScript, CSS, React, Python, Arduino, Firebase, GitHub Actions e AWS.",
    softSkills: "Comunicação, trabalho em equipe, empatia, autonomia, estimativa de prazo e habilidade de comunicação com clientes externos.",
    repository: "https://github.com/Equipe-CodeLand/API-2024.2",
    tags: ["faculdade", "website", "banco de dados", "arduino"],
    technologies: ["Figma", "Swagger", "NodeJS", "React", "TypeScript", "CSS", "Python", "Arduino", "Firebase", "GitHub Actions", "AWS"]
  },
  {
    id: 13,
    name: "Rede Social com API do Gemini",
    image: require('../assets/projetoXIII.png'),
    description: "Desenvolvimento de uma rede social com a API do Gemini para uma Imersão Backend da Plataforma Alura.",
    contributions: "Desenvolvi o Back-End da aplicação, trabalhei na implementação da API do Gemini que cria descrições automáticas baseadas na imagens postadas, na criação do banco de dados e na integração com o Front-End e no Deploy na Google Cloud. Foi um projeto desafiador e extremamente enriquecedor, pois tive a oportunidade de trabalhar com a API do Gemini e com a Google Cloud pela primeira vez.",
    hardSkills: "NodeJS, Express, Gemini API, Google Cloud e MongoDB",
    softSkills: "Autonomia e habilidade de estimar prazos.",
    repository: "https://back-240579360277.southamerica-east1.run.app/posts",
    tags: ["website", "banco de dados", "cursos", "inteligência artificial"],
    technologies: ["NodeJS", "Express", "Gemini API", "Google Cloud", "MongoDB"]
  },
  {
    id: 14,
    name: "Kanalu Produções",
    image: require('../assets/projetoIX.png'),
    description: "Desenvolvimento de uma Landing Page durante meu estágio na Agência Gecko Digital para a Kanalu, uma empresa voltada à produção de eventos.",
    contributions: "Desenvolvi a Landing Page utilizando Elementor no WordPress, trabalhei no design e na implementação de novas funcionalidades. Foi um projeto que me fez desenvolver melhor minhas habilidades de comunicação e de trabalho em equipe, além de me ajudar a entender melhor como funciona o mercado de trabalho.",
    hardSkills: "Elementor, Canva, WordPress e CSS",
    softSkills: "Comunicação e trabalho em equipe.",
    repository: "https://kanaluproducoes.com.br/",
    tags: ["agência", "website"],
    technologies: ["Elementor", "Canva", "WordPress", "CSS"]
  }
];

const tagOptions = [
  { value: null, label: 'Selecione uma Opção' },
  { value: 'faculdade', label: 'Faculdade' },
  { value: 'pesquisa', label: 'Pesquisa' },
  { value: 'cursos', label: 'Cursos' },
  { value: 'pessoal', label: 'Pessoal' },
  { value: 'agência', label: 'Agência Gecko' },
  { value: 'aplicativo', label: 'Aplicativo' },
  { value: 'website', label: 'Website' },
  { value: 'chatbot', label: 'Chatbot' },
  { value: 'banco de dados', label: 'Banco de Dados' },
  { value: 'arduino', label: 'Arduino' },
  { value: 'inteligência artificial', label: 'Inteligência Artificial' },
];

const technologyOptions = [
  { value: null, label: 'Selecione uma Opção' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'TypeScript', label: 'TypeScript' },
  { value: 'React', label: 'React' },
  { value: 'React Native', label: 'React Native' },
  { value: 'NodeJS', label: 'NodeJS' },
  { value: 'Java', label: 'Java' },
  { value: 'Python', label: 'Python' },
  { value: 'Flask', label: 'Flask' },
  { value: 'MySQL', label: 'MySQL' },
  { value: 'MongoDB', label: 'MongoDB' },
  { value: 'Redis', label: 'Redis' },
  { value: 'Cassandra', label: 'Cassandra' },
  { value: 'Neo4j', label: 'Neo4j' },
  { value: 'Docker', label: 'Docker' },
  { value: 'TypeORM', label: 'TypeORM' },
  { value: 'Firebase', label: 'Firebase' },
  { value: 'AWS', label: 'AWS' },
  { value: 'Google Cloud', label: 'Google Cloud' },
  { value: 'Vercel', label: 'Vercel' },
  { value: 'Expo', label: 'Expo' },
  { value: 'Figma', label: 'Figma' },
  { value: 'ChartJS', label: 'ChartJS' },
  { value: 'Swagger', label: 'Swagger' },
  { value: 'GitHub Actions', label: 'GitHub Actions' },
  { value: 'Telegram Bot', label: 'Telegram Bot' },
  { value: 'Jupyter Notebook', label: 'Jupyter Notebook' },
  { value: 'Colab', label: 'Colab' },
  { value: 'Vertabelo', label: 'Vertabelo' },
  { value: 'Gemini API', label: 'Gemini API' },
  { value: 'Excel', label: 'Excel' },
  { value: 'Arduino', label: 'Arduino' },
  { value: 'Elementor', label: 'Elementor' },
  { value: 'Canva', label: 'Canva' },
  { value: 'Express', label: 'Express' },
  { value: 'K-Nearest-Neighbors', label: 'K-Nearest-Neighbors' },
  { value: 'NDVI', label: 'NDVI' },
  { value: 'WordPress', label: 'WordPress' },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleTagChange = (selectedOption) => {
    setSelectedTag(selectedOption ? selectedOption.value : null);
  };

  const handleTechnologyChange = (selectedOption) => {
    setSelectedTechnology(selectedOption ? selectedOption.value : null);
  };

  const filteredProjects = projects.filter((project) => {
    const matchesTag = !selectedTag || (project.tags && project.tags.includes(selectedTag));
    const matchesTechnology = !selectedTechnology || (project.technologies && project.technologies.includes(selectedTechnology));
    return matchesTag && matchesTechnology;
  });

  return (
    <div className="page-container">
      {/* <div className="filters-container">
        <div className="filters">
          <h3>Filtros por Tags:</h3>
          <Select
            options={tagOptions}
            onChange={handleTagChange}
            className="select-filter"
          />
        </div>
        <div className="filters">
          <h3>Filtros por Tecnologias:</h3>
          <Select
            options={technologyOptions}
            onChange={handleTechnologyChange}
            className="select-filter"
          />
        </div>
      </div> */}
      {/* <h1 className='main-title'>meus projetos</h1> */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <button onClick={() => openModal(project)} className="learn-more-button">ver mais detalhes</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.name}</h2>
            <p><strong>Descrição:</strong> {selectedProject.description}</p>
            <p><strong>Contribuições:</strong> {selectedProject.contributions}</p>
            <p><strong>Hard Skills:</strong> {selectedProject.hardSkills}</p>
            <p><strong>Soft Skills:</strong> {selectedProject.softSkills}</p>
            <p>
              <strong>Link ou Repositório:</strong>{' '}
              <a
                href={selectedProject.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.repository}
              </a>
            </p>
            {selectedProject.demoImages && (
              <div className="demo-images">
                <h3>Imagens de Demonstração:</h3>
                {selectedProject.demoImages.map((image, index) => (
                  <img key={index} src={image} alt={`Demo ${index + 1}`} />
                ))}
              </div>
            )}
            <button onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
