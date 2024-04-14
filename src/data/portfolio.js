import magicOfScience from '../assets/img/portfolio/magic-of-science.jpeg';
import chat from '../assets/img/portfolio/chat.jpeg';
import games from '../assets/img/portfolio/games.jpeg';

import html from '../assets/img/icons/html.png';
import css from '../assets/img/icons/css.png';
import js from '../assets/img/icons/javascript.png';
import react from '../assets/img/icons/react.png';
import php from '../assets/img/icons/php.png';

export const portfolioData = [
  {
    name: 'Magia nauki',
    englishName: 'Magic Of Science',
    img: magicOfScience,
    description:
      'Kalkulator liczb pierwszych, gra Milionerzy Nauki oraz losowo generowane zdjęcia od Nasa',
    englishDescription:
      'Prime number calculator, Millionaire Science game, and randomly generated NASA photos',
    icons: [css, react],
    src: 'https://robertspol.github.io/magic-of-science/',
  },
  {
    name: 'Chat',
    englishName: 'Chat',
    img: chat,
    description: 'Komunikator internetowy',
    englishDescription: 'Internet messenger',
    icons: [html, css, php, js],
    src: 'https://github.com/robertspol/chat',
  },
  {
    name: 'Gry',
    englishName: 'Games',
    img: games,
    description:
      'Dwie gry z możliwością założenia konta i zapisywania aktualnych wyników',
    englishDescription:
      'Two games with the option to create an account and save current scores',
    icons: [html, css, php, js],
    src: 'https://github.com/robertspol/games',
  },
];
