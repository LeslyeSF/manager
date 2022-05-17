import Image from 'next/image'
import Logo from './Logo'
import { MdDashboard } from 'react-icons/md'
import { BiTransfer } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { 
  Container, 
  LogoContainer, 
  UserProfile, 
  FramePhoto, 
  MenuOptions, 
  Option 
} from '../styles/menuStyle'

export default function Menu(){
  return (
    <Container>
      <LogoContainer>
        <Logo size={50}/>
        <p>Manager</p>
      </LogoContainer>
      <UserProfile>
        <FramePhoto>
          <Image id='image' src='https://super.abril.com.br/wp-content/uploads/2021/01/orcl-golfinho_site.jpg' width={80} height={80} alt={'Profile'}/>
        </FramePhoto>
        <p>Leslye Soares Ferreira</p>
      </UserProfile>
      <MenuOptions>
        <h1>Menu</h1>
        <div>
          <MdDashboard/>
          <p>Dashboard</p>
        </div>
        <div>
          <BiTransfer/>
          <p>Transações</p>
        </div>
      </MenuOptions>
      <Option>
        <FiSettings/>
        <p>Configurações</p>
      </Option>
    </Container>
  );
}
