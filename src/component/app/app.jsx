import * as S from './app.style'
import { Floor, Hugo, Door } from '..'
import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  return (
    <S.App>
      <h1>This is app</h1>

      <main>
        <Hugo left={left} />

        <button onClick={() => setLeft(0)}>enter</button>
        <button onClick={() => setLeft(600)}>leave</button>
      </main>

      <Door />
      <Floor />
    </S.App>
  )
}

export default App
