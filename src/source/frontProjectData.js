import pk from '../assets/images/frontProjects/pk.jpg';
import hang from '../assets/images/frontProjects/hang.jpg';
import weather from '../assets/images/frontProjects/weather.jpg';

export default [
  {
    id: '1',
    name: 'Hangman Game',
    github: 'https://github.com/jakub84/game',
    live: 'https://jakub84.github.io/game/',
    heroImage: hang,
    technologies: [
      {
        photoshop: false,
        illustrator: true,
        selfdesigned: true,
        xd: true,
        rjs: true,
        rwd: true,
        sass: true,
        styledcomponent: false,
        html: false,
      },
    ],
  },
  {
    id: '2',
    name: 'Kancelaria Website (2013)',
    github: '',
    live: 'http://www.notariusz-kania.com/',
    heroImage: pk,
    technologies: [
      {
        photoshop: true,
        illustrator: true,
        selfdesigned: true,
        xd: false,
        rjs: false,
        rwd: true,
        sass: false,
        styledcomponent: true,
        html: true,
      },
    ],
  },
  {
    id: '3',
    name: 'Weather App',
    github: 'https://github.com/jakub84/weather-app',
    live: 'https://jakub84.github.io/weather-app/',
    heroImage: weather,
    technologies: [
      {
        photoshop: false,
        illustrator: true,
        selfdesigned: true,
        xd: true,
        rjs: true,
        rwd: true,
        sass: true,
        styledcomponent: false,
        html: false,
      },
    ],
  },

];
