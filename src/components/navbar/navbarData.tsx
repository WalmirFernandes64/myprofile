import React from 'react'
import * as FaIcons from 'react-icons/fa' 

export const NavbarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <FaIcons.FaHome />
    },
    {
        title: 'Sobre Mim',
        path: '/sobremim',
        icon: <FaIcons.FaUser />
    },
    {
        title: 'Experiencia',
        path: '/experiencias',
        icon: <FaIcons.FaBriefcase />
    },
    {
        title: 'Formação',
        path: '/formacoes',
        icon: <FaIcons.FaGraduationCap />
    },
    {
        title: 'Habilidades',
        path: '/habilidades',
        icon: <FaIcons.FaStar />
    },
    {
        title: 'Projetos',
        path: '/projetos',
        icon: <FaIcons.FaProjectDiagram />
    }
]
