import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../styles/certificate.css';

const certificates = [
    {
        pdf: require('../assets/fatec-front-end-basico.pdf'),
        name: 'Fatec Front-end Básico',
        description: 'Micro-certificação de Front-end Básico ao encerrar o primeiro semestre de Desenvolvimento de Software Multiplataforma.'
    },
    {
        pdf: require('../assets/getting-started-with-python.pdf'),
        name: 'Getting Started with Python',
        description: 'Programming for Everybody (Getting Started with Python) um curso on-line sem créditos autorizado pela University of Michigan e ministrado através do Coursera.'
    },
    {
        pdf: require('../assets/logica-de-programacao-alura.pdf'),
        name: 'Lógica de Programação',
        description: 'Curso de Lógica de Programação ministrado através da Alura.'
    },
    {
        pdf: require('../assets/toeic.pdf'),
        name: 'TOEIC',
        description: 'Certificado de proficiência em inglês (B2).'
    },
    {
        pdf: require('../assets/certificado_sicinpe.pdf'),
        name: 'SICINPE',
        description: 'Participação no SICINPE 2024 organizado e ministrado pelo Insituto Nacional de Pesquisas Espaciais - INPE apresentando o projeto "Aplicação de técnicas de inteligência artificial à resolução de problemas de processamento de imagens utilizadas em sensoriamento remoto".',
    },
    {
        pdf: require('../assets/certificado-java-rocketseat.pdf'),
        name: 'Curso de Java Rocketseat',
        description: 'Aplicação serverless com Java, Maven, AWS S3, API Gateway, AWS Lambda e Jackson para redirecionamento de URLs e manipulação de JSON.'
    },
    {
        pdf: require('../assets/certificado-onhb.pdf'),
        name: 'ONHB',
        description: 'Participação na 13° Olimpíada Nacional de História do Brasil.'
    },
    {
        pdf: require('../assets/comprovante-de-pesquisa.pdf'),
        name: 'PIBITI',
        description: 'Participação no Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação desenvolvendo a pesquisa "Aplicação de técnicas de inteligência artificial à resolução de problemas de processamento de imagens utilizadas em sensoriamento remoto".'
    },
    {
        pdf: require('../assets/ef-set-certificate.pdf'),
        name: 'EF SET Inglês',
        description: 'Certificado de proficiência em inglês (C2).'
    },
    {
        pdf: require('../assets/excel-basico.pdf'),
        name: 'Excel Básico',
        description: 'Curso de Excel Básico.'
    },
];

const Certificate = ({ pdf, name, description, onClick }) => {
    return (
        <div className="certificate">
            <div className="certificate-text">
                <h2 className="certificate-name">{name}</h2>
            </div>
            <div className="certificate-pdf">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                    <Viewer fileUrl={pdf} />
                </Worker>
            </div>
            <button onClick={() => onClick(pdf, name, description)} className="learn-more-button">Saiba Mais</button>
        </div>
    );
};

const CertificatePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPdf, setCurrentPdf] = useState(null);
    const [currentName, setCurrentName] = useState('');
    const [currentDescription, setCurrentDescription] = useState('');

    const openModal = (pdf, name, description) => {
        setCurrentPdf(pdf);
        setCurrentName(name);
        setCurrentDescription(description);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentPdf(null);
        setCurrentName('');
        setCurrentDescription('');
    };

    return (
        <div className="app">
            <h1>Extras e Certificados</h1>
            <div className="certificates-list">
                {certificates.map((cert, index) => (
                    <Certificate
                        key={index}
                        pdf={cert.pdf}
                        name={cert.name}
                        description={cert.description}
                        onClick={openModal}
                    />
                ))}
            </div>
            {isModalOpen && (
                <div className="modal">
                    {currentPdf && (
                        <div>
                            <h3>{currentName}</h3>
                            <p>{currentDescription}</p>
                            <a href={currentPdf} target="_blank" rel="noopener noreferrer">Abrir PDF em nova guia</a>
                            <div className="modal-pdf">
                                <br />
                                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}>
                                    <Viewer fileUrl={currentPdf} />
                                </Worker>
                            </div>
                            <br />
                            <button onClick={closeModal} className="close-button">Fechar</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CertificatePage;