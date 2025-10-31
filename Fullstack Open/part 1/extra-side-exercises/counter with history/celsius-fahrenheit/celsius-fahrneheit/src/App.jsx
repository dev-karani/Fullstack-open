import { useState } from 'react'

function App() {
  const [celsius, setCelsius] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(32)

  // when Celsius changes
  const handleCelsiusChange = (event) => {
    const c = event.target.value
    setCelsius(c)
    setFahrenheit((c * 9/5) + 32)
  }

  // when Fahrenheit changes
  const handleFahrenheitChange = (event) => {
    const f = event.target.value
    setFahrenheit(f)
    setCelsius((f - 32) * 5/9)
  }

  return (
    <div style={{ margin: '2rem' }}>
      <h2>Temperature Converter</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-example">
          <label htmlFor="fahrenheit">Fahrenheit: </label>
          <input
            type="number"
            id="fahrenheit"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
        </div>

        <div className="form-example">
          <label htmlFor="celsius">Celsius: </label>
          <input
            type="number"
            id="celsius"
            value={celsius}
            onChange={handleCelsiusChange}
          />
        </div>
      </form>
    </div>
  )
}

export default App
