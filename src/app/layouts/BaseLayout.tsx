import { Outlet } from 'react-router-dom'
import styles from '@/app/styles/baseLayout.module.css'

const BaseLayout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Outlet />
    </div>
  )
}

export default BaseLayout
