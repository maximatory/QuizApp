import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'
import { TestingPage } from '@/pages/testing'
import { WelcomePage } from '@/pages/welcome'
import { FinallyPage } from '@/pages/finally'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <WelcomePage />
      },
      {
        path: '/test',
        element: <TestingPage />
      },
      {
        path: '/fynally',
        element: <FinallyPage />
      }
    ]
  }
])

export default appRouter
