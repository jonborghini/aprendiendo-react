import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabled, isEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('useEffect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', clientX, clientY)
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  const changeEnabled = () => {
    isEnabled(!enabled)
  }

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '50%',
        opacity: '50%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        left: -100,
        top: -100,
        width: 200,
        height: 200,
        zIndex: -1000,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={changeEnabled}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
   </main>
  )
}

export default App
