import './index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { Suspense } from 'react'

const App = () => {
  return (
    <div className='app'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageLazy />}></Route>
          <Route path={'/about'} element={<AboutPageLazy />}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
