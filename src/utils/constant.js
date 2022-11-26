import {BsGithub, BsInstagram, SiNotion, SiFreecodecamp} from '../icons/icons';
import {CANVA, CSS, FIREBASE, GITHUB, HTML, JS, NOTION, REACT_IMG, SERVER_LESS, STYLED_COMPONENTS, VISUAL_CODE} from './images';

const headerList = [
  {
    id: 1,
    title: 'Good day',
    navLinkId: 'home',
    scrollToId: 'homeContainer',
  },
  {
    id: 2,
    title: 'About Me',
    navLinkId: 'about',
    scrollToId: 'aboutContainer',
  },
  {
    id: 3,
    title: 'Projects',
    navLinkId: 'projects',
    scrollToId: 'projectsContainer',
  },
  {
    id: 4,
    title: 'Ability',
    navLinkId: 'cando',
    scrollToId: 'candoContainer',
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
  {
    id: 4,
    href: 'https://www.freecodecamp.org/mi_nzi',
    icons: <SiFreecodecamp />,
  },
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
    title: 'LUKS',
    content: 'production level의 mbti, 트렌드별로 옷을 보여주는 의류 쇼핑몰',
    idea: '첫 회사에서 상용화한 mbti, trend별로 옷을 보여주는 옷쇼핑몰 git을 이용하여 협업한 프로젝트',
    viewBtn: 'View Demo',
    img: 'assets/luks.kr.png',
    viewLink: 'https://luks.kr/mbti/ENFJ',
  },
  {
    id: 2,
    title: 'Liberzen 🥼',
    content: 'Liberzen brand의 옷들을 보여주는 상용화된 웹사이트',
    idea: '지인분의 옷 쇼핑몰 웹사이트가 필요하시다는 이야기를 듣고 좋은 기회로 상용화 한 웹사이트',
    viewBtn: 'View Demo',
    githubBtn: 'Source Code',
    img: 'assets/liberzen.png',
    viewLink: 'https://www.liberzen.com/',
    githubLink: 'https://github.com/mandy0529/liberzen.com',
  },
  {
    id: 3,
    title: '나의 다마고찌 키우기 🐹',
    content: 'firebase를 이용한 옛날 옛적 나의 다마고치 키우기 게임',
    idea: '빈티지 감성의 픽셀 아트를 이용한 옷 디자인을 직접 그려 firebase를 이용해서 돈을 벌어 그 돈으로 아이템을 사보며 직접 내 캐릭터를 꾸밀 수 있는 펫 꾸미기 컨텐츠',
    viewBtn: 'View Demo',
    githubBtn: 'Source Code',
    img: 'assets/webpet.png',
    viewLink: 'https://mywebpet.shop',
    githubLink: 'https://github.com/mandy0529/web-pet',
  },
  {
    id: 4,
    title: 'Hello World, Finder 🌏',
    content: '세상에 모든 github user 들을 찾아보자!',
    idea: '개발자라면 github 을 사용할 수 밖에 없기에 rest api 를 익히면서 나와 제일 친해야하고, 죽을 때까지 붙어있어야하는 github 을 컨텐츠로 미니멀한 single page app 구현',
    viewBtn: 'View Demo',
    githubBtn: 'Source Code',
    img: 'assets/finder.png',
    viewLink: 'https://hello-world-finder.netlify.app/',
    githubLink: 'https://github.com/mandy0529/github-finder',
  },

  {
    id: 5,
    title: '당당 마켓 🥕',
    content: ' 당근 마켓을 클론하여 내가 원하는 글을 작성하여 firebase 서버를 이용한 소통의 마켓 컨셉',
    idea: ' 아이디어 전략 ⇒ 내 물건을 팔고, 다른 사람들이 팔 물건들을 보며 소통하는 마켓을 당!당 하게 이용 할 수 있는 당근 마켓을 클론해서 나만의 스타일로 !',
    viewBtn: 'View Demo',
    githubBtn: 'Source Code',
    img: 'assets/dang-market.png',
    viewLink: 'https://carrot-market-f0235.web.app/',
    githubLink: 'https://github.com/mandy0529/carrot-market',
  },
  {
    id: 6,
    title: '꿈 마켓 🌙',
    content: 'server-less 를 이용해서 나만의 api를 만들어 몽환, 마니아층을 겨냥한 꿈마켓 컨셉',
    idea: '아이디어 전략 ⇒ 이 마켓을 들어온 모두가 꿈에서의 상상이 현실과 가까워지는 것을 느끼면서 하루의 소소하고 행복한 마음으로 마켓 이용',
    viewBtn: 'View Demo',
    githubBtn: 'Source Code',
    img: 'assets/dream-market.png',
    viewLink: 'https://dream-market.netlify.app/',
    githubLink: 'https://github.com/mandy0529/dream-market',
  },
];
export {headerList, asideIcon, candoList, projectList};
