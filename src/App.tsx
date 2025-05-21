import { Route, Routes } from 'react-router-dom'
import { Counter } from './components/Counter'
import './index.scss'
import MainPage from './pages/MainPage/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
        <Route path={'/about'} element={<AboutPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
