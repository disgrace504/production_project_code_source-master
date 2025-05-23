import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}> {`${theme} theme`}</button>
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
