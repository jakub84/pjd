import pk from '../assets/images/frontProjects/pk.jpg';
import hang from '../assets/images/frontProjects/hang.jpg';
import weather from '../assets/images/frontProjects/weather.jpg';
import go from '../assets/images/frontProjects/go.jpg';
import users from '../assets/images/frontProjects/users-from-api.jpg';

export default [
  {
    id: '1',
    name: 'Users from APi',
    github: 'https://github.com/jakub84/react-form-app',
    live: 'https://jakub84.github.io/react-form-app/',
    heroImage: users,
    technologies: [
      {
        photoshop: false,
        illustrator: true,
        selfdesigned: true,
        xd: false,
        rjs: true,
        rwd: false,
        sass: false,
        styledcomponent: false,
        html: false,
        material: true,
      },
    ],
  },
  {
    id: '2',
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
    id: '3',
    name: 'Notary Website (2013)',
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
    id: '4',
    name: 'Galeria Obrazu Rebrand (mockup)',
    github: 'https://github.com/jakub84/newGo',
    live: 'https://jakub84.github.io/newGo/',
    heroImage: go,
    technologies: [
      {
        photoshop: false,
        illustrator: true,
        selfdesigned: true,
        xd: true,
        rjs: true,
        rwd: true,
        sass: true,
        styledcomponent: true,
        html: false,
      },
    ],
  },

  {
    id: '5',
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
