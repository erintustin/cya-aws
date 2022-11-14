import { useState } from 'react';
import { Navbar, 
        NavbarBrand,
        Collapse,
        NavbarToggler,
        Nav,
        NavItem
        } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../features/user/userLoginForm';
import NavLogo from '../app/assets/img/navlogo.png';
import CYAlogo from '../app/assets/img/CYAlogo.png';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <Navbar dark color='info' sticky='top' expand='md' className='mt-0'>
            <NavbarBrand className='ms-5' href='/'>
                <img src={CYAlogo} alt='logo' className='navlogo float-start' href='/'/>
                <img src={NavLogo} alt='logo' className='navlogo float-start' href='/'/>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
                <NavItem>
                    <NavLink className='nav-link' to='/'>
                        <i className='fa fa-home'></i>Home </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/toolkit'>
                    <i className='fa fa-briefcase'></i> Toolkit </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/favorites'>
                    <i className='fa fa-heart'></i> Favorites</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='nav-link' to='/feedback'>
                    <i className='fa fa-envelope'></i> Feedback</NavLink>
                </NavItem>
            </Nav>
                <UserLoginForm />
            </Collapse>
        </Navbar>


    );
};

export default Navigation;