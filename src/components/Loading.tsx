import ReactLoading from 'react-loading'
import { LoadingContainer } from '../styles/loadingStyle'

export default function Loading() {
  return (
    <LoadingContainer>
      <ReactLoading type={'bars'} color={'#F4F9F5'} height={500} width={375} />
    </LoadingContainer>
  )
}

