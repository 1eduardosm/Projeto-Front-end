import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'
import Recovery from '../pages/Recovery'
import DashboardPage from '../components/DashboardTitle'
import NotFoundPage from '../pages/NotFoundPage'
import Disciplines from '../pages/Disciplines'
import AiTutor from '../pages/AiTutor'
import Profile from '../pages/Profile'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/recovery' element={<Recovery />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/disciplines' element={<Disciplines />} />
                <Route path='/aiTutor' element={<AiTutor />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router