import React from 'react'
import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonComponent } from './components/button/button'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const MyButtonComponent = ({ text, className, onClick }) => {
  return (
    <ButtonComponent
      text={text}
      className={className ? className : null}
      onClick={onClick ? onClick : null}
    ></ButtonComponent>
  )
}
