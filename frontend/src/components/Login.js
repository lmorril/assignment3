import { useRef, useState, useEffect, useContext } from 'react';

const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Object.is(username, 'luke') && Object.is(password, '123')) {
        console.log(username, password)
        resolve('success')
      } else {
        console.log(username, password)
        reject('error')
      }
    }, 1000)
  })
}

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSumbitting] = useState(false)
  const [success, setIsLogin] = useState(false)
  const handleSumbit = async (e) => {
    e.preventDefault()
    setIsSumbitting(true)
    try {
      await login({ username, password })
      setUsername('')
      setPassword('')
      setError('')
      setIsSumbitting(false)
      setIsLogin(true)
    } catch (error) {
      setUsername('')
      setPassword('')
      setError('Incorrect Username or Password!')
      setIsSumbitting(false)
    }
  }
  const logout = () => {
    setIsLogin(false)
  }
  return (
    <div className="card container">
      {success ? (
        <>
          <h1>Welcome Back !</h1>
          <button onClick={logout} className="btn btn-block btn-dark">
            Logout
          </button>
        </>
      ) : (
        <div className="card-body">
          <h1 className="card-title">React Login</h1>
          <form onSubmit={handleSumbit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.currentTarget.value)}
                autocomplete="off"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                className="form-control"
              />
            </div>
            <button
              type="submit"
              className="btn btn-block btn-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'submitting' : 'Submit'}
            </button>
          </form>
          {error && (
            <><h3 className="text-danger">{error}</h3></>
          )}
        </div>
      )}
    </div>
  )
}

export default App;
