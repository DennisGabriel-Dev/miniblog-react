import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  // cleanup
  // deal with memory leak
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()
  
  function checkIfIsCancelled() {
    if(cancelled) {
      return
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true)

    try {
      const { user } = createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName
      })

      setLoading(false)
      return user

    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)
      let messageError
      if(error.message.includes("EMAIL_EXISTS")) {
        messageError = "E-mail já cadastrado."
      } else if (error.message.includes("invalid-email")) {
        messageError = "E-mail inválido."
      } else if (error.message.includes("password")) {
        messageError = "A senha precisa ter no mínimo 6 caracteres."
      } else {
        messageError = "Ocorreu um erro, por favor tente mais tarde."
      }
      setError(messageError)
    }

    setLoading(false)
  }

  useEffect(() => {
    return () => setCancelled(true)
  })

  return {
    auth,
    createUser,
    error,
    loading
  }
}