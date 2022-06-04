import Logo from './Logo'
import { MdDashboard } from 'react-icons/md'
import Swal from 'sweetalert2'
import { BiTransfer } from 'react-icons/bi'
import { IoLogOut } from 'react-icons/io5'
import { MdAppRegistration } from 'react-icons/md'
import { useRouter } from 'next/router'
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { BsBank2 } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { 
  Container, 
  LogoContainer, 
  UserProfile, 
  FramePhoto, 
  MenuOptions, 
  Option,
  SubContainer,
  MenuButton 
} from '../styles/menuStyle'
import { useAuth } from '../context/authContext'
import { useEffect, useState } from 'react'
import { logOut } from '../services/api'

export default function Menu(){
  const router = useRouter()
  const { token, user, updateToken, updateUser } = useAuth()
  const [showMenu, setShowMenu] = useState(false)

  useEffect(()=>{
    if(token === ''){
      if(!localStorage.getItem('managerToken')) {
        router.push('/')
      } else {
        updateToken(localStorage.getItem('managerToken'))
        updateUser({
          userId: localStorage.getItem('manager_userId'),
          userName: localStorage.getItem('manager_userName')
        })
      }
    }
  },[])

  function LogoutManager(){
    Swal.fire({
      title: 'Deseja sair da sua conta?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        logOut(token)
        .then(()=>{
          localStorage.removeItem('managerToken')
          router.push('/')
        })
        .catch(()=>{
          Swal.fire('Logout Falhou', '', 'error')
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
    
    
  }

  return (
    <Container>
      <LogoContainer>
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          {(showMenu)? <IoIosArrowDown/> : <IoIosArrowUp/>}
        </MenuButton>
        <div>
          <Logo size={50}/>
          <p>Manager</p>
        </div>
        <MenuButton onClick={LogoutManager}>
          <IoLogOut/>
        </MenuButton>
      </LogoContainer>
      <SubContainer showMenu={showMenu}>
        <UserProfile>
          <FramePhoto>
            {(user.userName[0])?.toUpperCase()}
          </FramePhoto>
          <p>{(user.userName)?.toUpperCase()}</p>
        </UserProfile>
        <MenuOptions>
          <h1>Menu</h1>
          <div onClick={() => router.push('/home')}>
            <MdDashboard/>
            <p>Dashboard</p>
          </div>
          <div onClick={() => router.push('/transactions')}>
            <BiTransfer/>
            <p>Transações</p>
          </div>
          <div onClick={() => router.push('/registers')}>
            <MdAppRegistration/>
            <p>Cadastrar</p>
          </div>
          <div onClick={() => router.push('/credit-cards')}>
            <BsFillCreditCard2BackFill/>
            <p>Cartões de crédito</p>
          </div>
          <div onClick={() => router.push('/bank-accounts')}>
            <BsBank2/>
            <p>Contas bancárias</p>
          </div>
        </MenuOptions>
        <Option onClick={LogoutManager}>
          <IoLogOut/>
          <p>Logout</p>
        </Option>   
      </SubContainer>
    </Container>
  );
}
