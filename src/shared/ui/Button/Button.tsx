import React from 'react'
import styles from './styles.module.css'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
  onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ label, onButtonClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onButtonClick}>
      {label}
    </button>
  )
}

export default Button
