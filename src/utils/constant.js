import {BsGithub, BsInstagram} from 'react-icons/bs';

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

    icons: <BsInstagram />,
  },
];
export {headerList, asideIcon};
