import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import { HomePage } from "./components"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact  path="/" element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
        
    )
}
