import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import * as FaIcons from 'react-icons/fa' 

import { NavbarData } from './navbarData';

const Navbar = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 60px; /* Ajustado para coincidir com o tamanho do logotipo */
    background-color: #002035; /* Azul Marinho */
`

const Logo = styled.img`
    height: 60px; // Altura igual à da Navbar
    position: absolute;
    right: 10px;
`

const MenuIconOpen = styled(Link)`
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: #ffffff; // Texto branco
`

const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 1rem;
    color: #ffffff; // Texto branco
`

const NavbarMenu = styled.div<{close: boolean}>`
    width: 250px;
    height: 100vh;
    background-color: #002035; // Azul Marinho
    position: fixed;
    top: 0;
    left: ${({ close}) => close ? '0' : '-100%'};
    transition: left 0.6s; /* Suavização da abertura/fechamento */
`

const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 90px;
    padding: 1rem 0 1.25rem;
`

const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #ffffff; // Texto branco

    &:hover {
        background-color: #00bfff; // Azul Ciano para hover
        color: #002035; // Texto azul marinho
        width: 100%;
        height: 45px;
        text-align: center;
        text-size: 5%;
        border-radius: 5px;
        margin: 0 2rem;
    }
`

const NavBar: React.FunctionComponent = () => {
    const [close, setClose] = useState(false)
    const showNavbar = () => setClose(!close)
    return (
        <>
            <Navbar className='header'>
                <Logo src={process.env.PUBLIC_URL + '/logo100x100.png'} alt="Logo" />
                <MenuIconOpen to="#" onClick={showNavbar}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
            </Navbar>

            <NavbarMenu close={close}>
                <MenuIconClose to="#" onClick={showNavbar}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {NavbarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{marginLeft: '16px'}}>{item.title}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </NavbarMenu>
        </>
    )
}

export default NavBar