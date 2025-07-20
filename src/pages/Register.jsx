import styles from './Register.module.css'

const Register = () => {
  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe as suas histórias</p>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" placeholder='Nome do Usuário' required />
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email" name='email' required placeholder='E-mail do usuário' />
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" name='passowrd' required placeholder='Insira sua senha'/>
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" name='confirmPassowrd' required placeholder='confirme a sua senha'/>
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default Register