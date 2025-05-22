import React from 'react';
import '../styles/hobbies.css';

const hobbies = [
    {
        title: 'Ilustração',
        description: 'Desde criança sempre amei desenhar e essa paixão por arte vai aumentando com o passar dos anos.',
        image: require('../assets/illustration.png')
    },
    {
        title: 'Literatura',
        description: 'Outro passatempo que tenho desde a infância é o da leitura. Amo me colocar nos mais diversos mundos, situações e histórias através dos livros.',
        image: require('../assets/literature.png')
    },
    {
        title: 'Anime & Mangá',
        description: 'Unindo a paixão por arte e por histórias, nos últimos anos essa parte da cultura asiática tem ocupado boa parte do meu tempo livre.',
        image: require('../assets/anime_manga.png')
    },
    {
        title: 'Documentários',
        description: 'Fora da fantasia, histórias sobre o mundo e pessoas reais também têm minha atenção.',
        image: require('../assets/documentaries.png')
    },
    {
        title: 'Crochê',
        description: 'Minha mais nova descoberta foi o crochê. Comecei por acaso e me encantei.',
        image: require('../assets/crochet.png')
    },
    {
        title: 'Viagens',
        description: 'Acho que o meu preferido dentre esses definitivamente é viajar e poder conhecer lugares, pessoas e culturas novas.',
        image: require('../assets/travel.png')
    },
    {
        title: 'Etc',
        description: 'Além disso, gosto muito de vôlei, música, filmes, séries, fotografia, estar com amigos, família e com meu namorado, e obviamente, desenvolver.',
        image: require('../assets/etc.png')
    }
];

const HobbiesPage = () => {
    return (
        <div className="hobbies-container">
            {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-row">
                    <div className="hobby-text">
                        <h2>{hobby.title}</h2>
                        <p>{hobby.description}</p>
                    </div>
                    <div className="hobby-image">
                        <img src={hobby.image} alt={hobby.title} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default HobbiesPage;