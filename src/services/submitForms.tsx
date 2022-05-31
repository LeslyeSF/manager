import Swal from 'sweetalert2'
import { signIn, signUp } from '../services/api'

export function submitFormSignIn(e, {setLoading, form, updateToken, updateUser, router}){
  setLoading(true)
    e.preventDefault()
    signIn(form)
    .then((ans)=>{
      updateToken(ans.data.token)
      updateUser({
        userId: ans.data.userId,
        userName: ans.data.userName
      })
      localStorage.setItem('managerToken', ans.data.token)
      localStorage.setItem('manager_userId', ans.data.userId)
      localStorage.setItem('manager_userName', ans.data.userName)
      Swal.fire(
        'Good job!',
        'Login realizado com sucesso!',
        'success'
      )
      setTimeout(()=>{
        setLoading(true)
        router.push('/home')
      }, 1000)
    })
    .catch(()=>{
      setTimeout(()=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario ou senha incorreta!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        setLoading(false)
      },1000)
    })
}

export function submitFormSignUp(e, {setLoading, form, router}){
    e.preventDefault()
    setLoading(true)

    if (form.password !== form.confirmPassword){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Senhas diferentes!'
      })
      return
    }
  
    const body = {...form}
    delete body.confirmPassword
    body.phone = body.phone.replace(' ', '');
    if (body.phone === '') delete body.phone
    
    signUp(body)
    .then(()=>{
      setTimeout(()=>{
        Swal.fire(
          'Good job!',
          'Cadastro realizado com sucesso!',
          'success'
        )
        setLoading(false)
        router.push('/')
      }, 1000)
    })
    .catch(()=>{
      setTimeout(()=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Falha ao realizar cadastro!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        setLoading(false)
      }, 1000)
    })
}