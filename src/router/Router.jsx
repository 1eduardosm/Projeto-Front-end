import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import Dashboard from '../pages/Dashboard'
import Recovery from '../pages/Recovery'
import DashboardPage from '../pages/DashboardPage'
import NotFoundPage from '../pages/NotFoundPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/recovery' element={<Recovery />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router