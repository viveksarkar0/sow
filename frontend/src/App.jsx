import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Terms from './pages/Terms'
import Pricelist from './pages/Pricelist'
import './App.css'

export default function App() {
  const [locale, setLocale] = useState('en')

  return (
    <div className="app">
      <Routes>
        {/* Redirect "/" to "/terms" */}
        <Route path="/" element={<Navigate to="/terms" replace />} />

        <Route path="/terms" element={<Terms locale={locale} setLocale={setLocale} />} />
        <Route path="/pricelist" element={<Pricelist locale={locale} setLocale={setLocale} />} />
      </Routes>
    </div>
  )
}
