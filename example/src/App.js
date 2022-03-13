import React from 'react'
import './index.css'

import { ExampleComponent, MyButtonComponent } from '@reactlib/test'
import '@reactlib/test/dist/index.css'

const App = () => {
  const clickHandler = () => {
    alert('Hello')
  }
  return (
    <div className='text-center mt-5'>
      {/* <MyButtonComponent text='Create React button'></MyButtonComponent> */}
      <MyButtonComponent
        text=''
        onClick={() => clickHandler()}
        className='py-3 px-3 btncss'
      />
    </div>
  )
}

export default App
