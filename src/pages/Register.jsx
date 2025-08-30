import { useEffect, useState } from 'react'
import styles from './Register.module.css'
import { useAuthentication } from '../hooks/useAuthentication'

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication() 

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")
    const user = {
      displayName,
      email,
      password,
      confirmPassword
    }

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais!")
      return
    }

    const res = await createUser(user)

    console.log(user)
  }

  useEffect(() => {
    if(authError) {
      setError(authError)
    }
  })

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe as suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text" 
            name="displayName" 
            placeholder='Nome do Usuário' 
            value={displayName} 
            onChange={(e) => setDisplayName(e.target.value)} 
            required 
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input 
            type="email" 
            name='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            placeholder='E-mail do usuário' 
          />
        </label>

        <label>
          <span>Senha:</span>
          <input 
            type="password" 
            name='passowrd' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            placeholder='Insira sua senha'
          />
        </label>

        <label>
          <span>Senha:</span>
          <input 
            type="password" 
            name='confirmPassowrd' 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder='confirme a sua senha'
          />
        </label>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Aguardando...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Register