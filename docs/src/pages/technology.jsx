import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaPython, FaDocker,
  FaAws, FaGoogle, FaFigma, FaGithub
} from 'react-icons/fa';
import {
  SiTypescript, SiFlask, SiMysql, SiMongodb, SiRedis, SiFirebase, SiVercel,
  SiExpo, SiChartdotjs, SiSwagger, SiJupyter, SiAngular, SiExpress, SiSpringboot, SiSocketdotio, SiPostgresql, SiAzuredevops, SiHeroku, SiConfluence, SiLucid
} from 'react-icons/si';
import '../styles/technology.css';

const technologies = {
  Frontend: [
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'React Native', icon: <FaReact /> },
    { name: 'Angular', icon: <SiAngular /> }
  ],

  Backend: [
    { name: 'Java', icon: <FaJava /> },,
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'NodeJS', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'WebSocket', icon: <SiSocketdotio /> },
  ],

  Database: [
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Cassandra', logo: require('../assets/cassandra.png') },
    { name: 'Neo4j', logo: require('../assets/neo4j.png') },
    { name: 'Firebase', icon: <SiFirebase /> },
  ],

  DevOps: [
    // { name: 'Docker', icon: <FaDocker /> },
    // { name: 'TypeORM', logo: require('../assets/typeorm.png') },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Google Cloud', icon: <FaGoogle /> },
    { name: 'Azure', icon: <SiAzuredevops /> },
    { name: 'Vercel', icon: <SiVercel /> },
    { name: 'Heroku', icon: <SiHeroku /> },
    { name: 'Git', icon: <FaGithub /> }, 
  ],

  Ferramentas: [
    { name: 'Expo', icon: <SiExpo /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Swagger', icon: <SiSwagger /> },
    { name: 'Jupyter', icon: <SiJupyter /> },
    { name: 'Colab', logo: require('../assets/colab.png') },
    { name: 'WordPress', logo: require('../assets/wordpress.png') },
    // { name: 'Elementor', logo: require('../assets/elementor.png') },
    { name: 'Jira', logo: require('../assets/jira.png') },,
    { name: 'Confluence', icon: <SiConfluence /> },
    { name: 'Lucidchart', icon: <SiLucid /> },
  ],
};

const Technology = () => {
  return (
    <div className="page-container">
      {/* <h1 className='main-title'>tecnologias trabalhadas</h1> */}
      <div className="technology-grid">
        {Object.entries(technologies).map(([category, items]) => (
          <div key={category} className="category-card">
            <h2>{category}</h2>
            <div className="technology-list">
              {items.map(tech => (
                <div key={tech.name} className="technology-item">
                  {tech.icon || (
                    <img src={tech.logo} alt={`${tech.name} logo`} className="technology-logo" />
                  )}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Technology;
