import { lazy } from 'react'

export const MainPageLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //Таймер искусственной задержки не для прод
      setTimeout(() => resolve(import('./MainPage')), 1500)
    })
)
