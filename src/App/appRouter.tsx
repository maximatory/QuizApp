import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <div>Error</div>
  }
])

export default appRouter
