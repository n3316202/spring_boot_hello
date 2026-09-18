import { useEffect, useState } from 'react'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    
    console.log("fetch 시작")

    fetch('/')
      .then((response) => {


        if (!response.ok) {
          throw new Error('API 호출 실패')
        }

        return response.text()
      })
      .then((data) => {
        setMessage(data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>React + Spring Boot</h1>

      {loading && <p>Spring Boot 연결 중...</p>}

      {error && (
        <p>
          오류: {error}
        </p>
      )}

      {message && (
        <h2>
          {message}
        </h2>
      )}
    </div>
  )
}

export default App

