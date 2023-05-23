import {
  SiAmazonaws,
  SiBootstrap,
  SiCreatereactapp,
  SiCss3, SiDocker, SiExpress, SiFigma, SiFirebase, SiGit, SiGithub, SiGooglecloud, SiHtml5, SiInsomnia, SiJavascript, SiJest, SiMongodb, SiMysql, SiNodedotjs, SiPostcss, SiPostgresql, SiPostman, SiPrisma, SiReact, SiReactrouter, SiRedux, SiRubyonrails, SiSass, SiSequelize, SiStyledcomponents, SiTailwindcss, SiTypescript, SiVite, SiWebpack
} from 'react-icons/si';
import { VscTerminalUbuntu } from 'react-icons/vsc';
import { DiRuby } from 'react-icons/di';

function createIcon(color, size, Icon) {
  return (
    <Icon
      color={color}
      size={size} />
  );
}

const TECHNOLOGIES = [
  { name: 'react',
    icon: createIcon('#61DAFB', 30, SiReact), },
  { name: 'javaScript',
    icon: createIcon('#F7DF1E', 30, SiJavascript), },
  { name: 'html',
    icon: createIcon('#E34F26', 30, SiHtml5), },
  { name: 'css',
    icon: createIcon('#1572B6', 30, SiCss3), },
  { name: 'git',
    icon: createIcon('#F05032', 30, SiGit), },
  { name: 'sass',
    icon: createIcon('#CC6699', 30, SiSass), },
  { name: 'node',
    icon: createIcon('#339933', 30, SiNodedotjs), },
  { name: 'express',
    icon: createIcon('#000000', 30, SiExpress), },
  { name: 'mongoDB',
    icon: createIcon('#47A248', 30, SiMongodb), },
  { name: 'firebase',
    icon: createIcon('#FFCA28', 30, SiFirebase), },
  { name: 'redux',
    icon: createIcon('#764ABC', 30, SiRedux), },
  { name: 'typescript',
    icon: createIcon('#3178C6', 30, SiTypescript), },
  { name: 'jest',
    icon: createIcon('#C21325', 30, SiJest), },
  { name: 'ruby',
    icon: createIcon('#CC342D', 30, DiRuby), },
  { name: 'ruby on rails',
    icon: createIcon('#CC0000', 30, SiRubyonrails), },
  { name: 'terminal',
    icon: createIcon('#4EAA25', 30, VscTerminalUbuntu), },
  { name: 'styled components',
    icon: createIcon('#DB7093', 30, SiStyledcomponents), },
  { name: 'postman',
    icon: createIcon('#FF6C37', 30, SiPostman), },
  { name: 'insomnia',
    icon: createIcon('#5849BE', 30, SiInsomnia), },
  { name: 'webpack',
    icon: createIcon('#8DD6F9', 30, SiWebpack), },
  { name: 'mysql',
    icon: createIcon('#4479A1', 30, SiMysql), },
  { name: 'figma',
    icon: createIcon('#F24E1E', 30, SiFigma), },
  { name: 'google services',
    icon: createIcon('#4285F4', 30, SiGooglecloud), },
  { name: 'amazon web services',
    icon: createIcon('#6181a9', 30, SiAmazonaws)
    ,  },
  { name: 'docker',
    icon: createIcon('#2496ED', 30, SiDocker) },
  { name: 'postcss',
    icon: createIcon('#DD3A0A', 30, SiPostcss), },
  { name: 'tailwind',
    icon: createIcon('#06B6D4', 30, SiTailwindcss), },
  { name: 'create react app',
    icon: createIcon('#61DAFB', 30, SiCreatereactapp), },
  { name: 'vite',
    icon: createIcon('#646CFF', 30, SiVite), },
  { name: 'react router',
    icon: createIcon('#CA4245', 30, SiReactrouter), },
  // { name: 'puma',
  //   icon: createIcon('#E74C3C', 30, SiPuma), },
  { name: 'postgresql',
    icon: createIcon('#336791', 30, SiPostgresql), },
  { name: 'github',
    icon: createIcon('#181717', 30, SiGithub), },
  { name: 'sequelize',
    icon: createIcon('#52B0E7', 30, SiSequelize), },
  { name: 'prisma',
    icon: createIcon('#455670', 30, SiPrisma), },
  { name: 'bootstrap',
    icon: createIcon('#7952B3', 30, SiBootstrap), }
]

export default TECHNOLOGIES;
