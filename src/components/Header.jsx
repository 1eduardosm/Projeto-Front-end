import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="menu">
            <div className="menu__body">
                <h1 className="menu__title">Academia <span>Portal do aluno</span></h1>
                <nav className="menu__links">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive
                                ? 'menu__item menu__item--active'
                                : 'menu__item'
                        }
                    >
                        Painel
                    </NavLink>

                    <NavLink
                        to="/disciplines"
                        className={({ isActive }) =>
                            isActive
                                ? 'menu__item menu__item--active'
                                : 'menu__item'
                        }
                    >
                        Disciplinas
                    </NavLink>

                    <NavLink
                        to="/aiTutor"
                        className={({ isActive }) =>
                            isActive
                                ? 'menu__item menu__item--active'
                                : 'menu__item'
                        }
                    >
                        Tutor IA
                    </NavLink>

                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive
                                ? 'menu__item menu__item--active'
                                : 'menu__item'
                        }
                    >
                        Perfil
                    </NavLink>

                </nav >
            </div >
        </header >
    )
}

export default Header