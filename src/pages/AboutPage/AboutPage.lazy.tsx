import { lazy } from 'react'

export const AboutPageLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      //Таймер искусственной задержки не для прод
      setTimeout(() => resolve(import('./AboutPage')), 1500)
    })
)
