import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// context
import { AuthProvider } from './context/AuthContext'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter >
          <Navbar />
          <div className='container'>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
              </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
