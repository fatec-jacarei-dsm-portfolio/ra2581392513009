import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaAws, FaGoogle, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiFlask, SiMysql, SiMongodb, SiRedis, SiFirebase, SiVercel, SiExpo, SiChartdotjs, SiSwagger, SiJupyter } from 'react-icons/si';
import '../styles/technology.css';

const technologies = {
  frontend: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'React Native', icon: <FaReact /> },
  ],
  backend: [
    { name: 'NodeJS', icon: <FaNodeJs /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Flask', icon: <SiFlask /> },
  ],
  databases: [
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Cassandra', logo: require('../assets/cassandra.png') },
    { name: 'Neo4j', logo: require('../assets/neo4j.png') },
    { name: 'Firebase', icon: <SiFirebase /> },
  ],
  devops: [
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'TypeORM', logo: require('../assets/typeorm.png') }, 
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Google Cloud', icon: <FaGoogle /> },
    { name: 'Vercel', icon: <SiVercel /> },
  ],
  ferramentas: [
    { name: 'Expo', icon: <SiExpo /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'ChartJS', icon: <SiChartdotjs /> },
    { name: 'Swagger', icon: <SiSwagger /> },
    { name: 'GitHub Actions', icon: <FaGithub /> },
    { name: 'Telegram Bot', logo: require('../assets/telegram.png') },
    { name: 'Jupyter Notebook', icon: <SiJupyter /> },
    { name: 'Colab', logo: require('../assets/colab.png') },
    { name: 'Vertabelo', logo: require('../assets/vertabelo.png') },
    { name: 'WordPress', logo: require('../assets/wordpress.png') },
    { name: 'Elementor', logo: require('../assets/elementor.png') },
    { name: 'Jira', logo: require('../assets/jira.png') },
  ],
};

const Technology = () => {
  return (
    <div className="technology-page">
      <h2>Tecnologias Trabalhadas</h2>
      <br />
      {Object.keys(technologies).map(category => (
        <div key={category} className="technology-category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="technology-list">
            {technologies[category].map(tech => (
              <div key={tech.name} className="technology-item">
                {tech.icon ? tech.icon : <img src={tech.logo} alt={`${tech.name} logo`} className="technology-logo" />}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Technology;