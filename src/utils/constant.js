import {BsGithub, BsInstagram, SiNotion} from '../icons/icons';
import {
  CANVA,
  CSS,
  FIREBASE,
  GITHUB,
  HTML,
  JS,
  NOTION,
  REACT_IMG,
  SERVER_LESS,
  STYLED_COMPONENTS,
  VISUAL_CODE,
} from './images';

const headerList = [
  {
    id: 1,
    title: 'Home',
    navLinkId: 'home',
    scrollToId: 'homeContainer',
  },
  {
    id: 2,
    title: 'About',
    navLinkId: 'about',
    scrollToId: 'aboutContainer',
  },
  {
    id: 3,
    title: 'CanDo',
    navLinkId: 'cando',
    scrollToId: 'candoContainer',
  },
  {
    id: 4,
    title: 'Projects',
    navLinkId: 'projects',
    scrollToId: 'projectsContainer',
  },
  {
    id: 5,
    title: 'Contact',
    navLinkId: 'contact',
    scrollToId: 'contactContainer',
  },
];

const asideIcon = [
  {
    id: 1,
    href: 'https://github.com/mandy0529',
    icons: <BsGithub />,
  },
  {
    id: 2,
    href: 'https://splashy-chicken-6f1.notion.site/aa63baf113f24e46a2cefa4f297a9590',
    icons: <SiNotion />,
  },
  {
    id: 3,
    href: 'https://www.instagram.com/mi_nzi/',
    icons: <BsInstagram />,
  },
  // {
  //   id: 4,
  //   href: 'https://codepen.io/mandy0529',
  //   icons: <AiOutlineCodepen />,
  // },
  // {
  //   id: 5,
  //   href: 'https://www.freecodecamp.org/mi_nzi',
  //   icons: <SiFreecodecamp />,
  // },
];

const candoList = [
  {
    id: 1,
    src: HTML,
    title: 'HTML',
  },
  {
    id: 2,
    src: CSS,
    title: 'CSS',
  },
  {
    id: 3,
    src: JS,
    title: 'JavaScript',
  },
  {
    id: 4,
    src: REACT_IMG,
    title: 'React JS',
  },

  {
    id: 5,
    src: GITHUB,
    title: 'Github Control',
  },
  {
    id: 6,
    src: NOTION,
    title: 'Notion ',
  },
  {
    id: 7,
    src: CANVA,
    title: 'Canva Design',
  },
  {
    id: 8,
    src: SERVER_LESS,
    title: 'Server-less',
  },

  {
    id: 9,
    src: FIREBASE,
    title: 'Firebase',
  },
  {
    id: 10,
    src: VISUAL_CODE,
    title: 'Visual Studio code',
  },
  {
    id: 11,
    src: STYLED_COMPONENTS,
    title: 'Styled-Components',
  },
];

const projectList = [
  {
    id: 1,
    title: '당당 마켓 🥕',
    content:
      ' 당근 마켓을 클론하여 내가 원하는 글을 작성하여 firebase 서버를 이용한 소통의 마켓 컨셉',
    idea: ' 아이디어 전략 ⇒ 내 물건을 팔고, 다른 사람들이 팔 물건들을 보며 소통하는 마켓을 당!당 하게 이용 할 수 있는 당근 마켓을 클론해서 나만의 스타일로 !',
    viewBtn: 'View Demo',
    githubBtn: 'Source Code',
    img: 'assets/dang-market.png',
    viewLink: 'https://carrot-market-f0235.web.app/',
    githubLink: 'https://github.com/mandy0529/carrot-market',
  },
  {
    id: 2,
    title: '꿈 마켓 🌙',
    content:
      'server-less 를 이용해서 나만의 api를 만들어 몽환, 마니아층을 겨냥한 꿈마켓 컨셉',
    idea: '아이디어 전략 ⇒ 이 마켓을 들어온 모두가 꿈에서의 상상이 현실과 가까워지는 것을 느끼면서 하루의 소소하고 행복한 마음으로 마켓 이용',
    viewBtn: 'View Demo',
    githubBtn: 'Source Code',
    img: 'assets/dream-market.png',
    viewLink: 'https://dream-market.netlify.app/',
    githubLink: 'https://github.com/mandy0529/dream-market',
  },
];
export {headerList, asideIcon, candoList, projectList};
