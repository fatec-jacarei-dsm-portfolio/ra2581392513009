import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../styles/certificate.css';

const certificates = [
    {
        pdf: require('../assets/toeic.pdf'),
        thumbnail: require('../assets/toeic.png'),
        name: 'TOEIC',
        description: 'Certificado de proficiência em inglês (B2).'
    },
    {
        pdf: require('../assets/comprovante-de-pesquisa.pdf'),
        thumbnail: require('../assets/comprovante-de-pesquisa.png'),
        name: 'PIBITI',
        description: 'Participação no Programa Institucional de Bolsas de Iniciação em Desenvolvimento Tecnológico e Inovação desenvolvendo a pesquisa "Aplicação de técnicas de inteligência artificial à resolução de problemas de processamento de imagens utilizadas em sensoriamento remoto".'
    },
    {
        pdf: require('../assets/certificado_sicinpe.pdf'),
        thumbnail: require('../assets/certificado_sicinpe.png'),
        name: 'SICINPE 2024',
        description: 'Participação no SICINPE 2024 organizado e ministrado pelo Insituto Nacional de Pesquisas Espaciais - INPE apresentando o projeto "Aplicação de técnicas de inteligência artificial à resolução de problemas de processamento de imagens utilizadas em sensoriamento remoto".',
    },
    {
        pdf: require('../assets/fatec-front-end-basico.pdf'),
        thumbnail: require('../assets/fatec-front-end-basico.png'),
        name: 'Front-end Básico',
        description: 'Micro-certificação de Front-end Básico ao encerrar o primeiro semestre de Desenvolvimento de Software Multiplataforma.'
    },
    {
        pdf: require('../assets/getting-started-with-python.pdf'),
        thumbnail: require('../assets/getting-started-with-python.png'),
        name: 'Getting Started with Python',
        description: 'Programming for Everybody (Getting Started with Python) um curso on-line sem créditos autorizado pela University of Michigan e ministrado através do Coursera.'
    },
    {
        pdf: require('../assets/certificado-onhb.pdf'),
        thumbnail: require('../assets/certificado-onhb.png'),
        name: 'Olimpíada ONHB',
        description: 'Participação na 13° Olimpíada Nacional de História do Brasil.'
    },
];

const Certificate = ({ pdf, thumbnail, name, description, onClick }) => {
    return (
        <div className="certificate">
            <img src={thumbnail} alt={name} className="certificate-thumbnail" />
            <div className="certificate-text">
                <h2 className="certificate-name">{name}</h2>
            </div>
            <button onClick={() => onClick(pdf, name, description)} className="learn-more-button">
                ver mais detalhes
            </button>
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
        <div className="page-container">
            {/* <h1 className='main-title'>certificados e certificações</h1> */}
            <div className="certificates-list">
                {certificates.map((cert, index) => (
                    <Certificate
                        key={index}
                        pdf={cert.pdf}
                        thumbnail={cert.thumbnail}
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
                            <a href={currentPdf} className='modal-link' target="_blank" rel="noopener noreferrer">Abrir PDF em nova guia</a>
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