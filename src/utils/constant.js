import {
  BsGithub,
  BsInstagram,
  SiNotion,
  BiMobileAlt,
  CgDesignmodo,
  SiReact,
  DiGithub,
  AiOutlineCloudServer,
  SiFirebase,
  HiOutlineDesktopComputer,
} from '../icons/icons';

const headerList = [
  {
    id: 1,
    title: 'Home',
    url: '#hero',
  },
  {
    id: 2,
    title: 'About',
    url: '#about',
  },
  {
    id: 3,
    title: 'CanDo',
    url: '#cando',
  },
  {
    id: 4,
    title: 'Projects',
    url: '#projects',
  },
  {
    id: 5,
    title: 'Contact',
    url: '#contact',
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
];

const candoList = [
  {
    id: 1,
    icon: <HiOutlineDesktopComputer />,
    title: 'Development',
    content: 'HTML / CSS, javascript, 애니메이션',
  },
  {
    id: 2,
    icon: <CgDesignmodo />,
    title: 'Design',
    content: 'react-icons, font-awesome, canva 를 이용한 디자인 가능',
  },
  {
    id: 3,
    icon: <SiReact />,
    title: 'React',
    content:
      'React, React hooks, Context, Reducer , Custom Hooks 자유롭게 사용 가능',
  },
  {
    id: 4,
    icon: <AiOutlineCloudServer />,
    title: 'Server-less',
    content:
      '나만의 Api를 airtable 을 이용해서 server-less 데이터 접근하고, 이용 가능',
  },
  {
    id: 5,
    icon: <SiFirebase />,
    title: 'Firebase',
    content:
      'Firebase 를 이용한 로그인, 데이터베이스, storage 를 이용해서 간접 리얼 타임 구현 가능',
  },
  {
    id: 6,
    icon: <DiGithub />,
    title: 'Control',
    content: 'github, notion 을 이용한 내 저장 창고 관리 가능',
  },
  {
    id: 7,
    icon: <BiMobileAlt />,
    title: 'Responsive Website',
    content: '반응형 웹사이트 html, js, react 가능',
  },
];

const projectList = [
  {
    id: 1,
    title: '당당 마켓',
    content:
      ' 당근 마켓을 클론하여 내가 원하는 글을 작성하여 firebase 서버를 이용한 소통의 마켓 컨셉',
    btn: ['View Project', 'Sour Code'],
    img: 'assets/dang-market.png',
    href: 'https://carrot-market-f0235.web.app/',
  },
  {
    id: 2,
    title: '꿈 마켓',
    content:
      'server-less 를 이용해서 나만의 api를 만들어 몽환, 마니아층을 겨냥한 꿈마켓 컨셉',
    btn: ['View Project', 'Sour Code'],
    img: 'assets/dream-market.png',
    href: 'https://dream-market.netlify.app/',
  },
];
export {headerList, asideIcon, candoList, projectList};
