import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaGithub,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '#banner',
    text: 'Intro',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '#tecnologias',
    text: 'tecnologias',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '#projetos',
    text: 'projetos',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '#metodologias',
    text: 'metodologia',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '#formulario',
    text: 'formulario',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/andr%C3%A9-amaral-borelli/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://github.com/andreborelli729',
    icon: <FaGithub />,
  }

];
