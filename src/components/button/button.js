import React from 'react'
import styles from './button.module.css'

export const ButtonComponent = ({ text, className, onClick }) => {
  return (
    <button
      className={className ? className : `mt-2 py-3 ${styles.abc}`}
      onClick={onClick}
    >
      {text ? text : 'Click Here'}
    </button>
  )
}
