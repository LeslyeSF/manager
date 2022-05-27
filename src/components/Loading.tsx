import ReactLoading from 'react-loading'
import { LoadingContainer } from '../styles/loadingStyle'

export default function Loading({ width, height, color }) {
  return (
    <LoadingContainer>
      <ReactLoading type={'bars'} color={color} height={height} width={width} />
    </LoadingContainer>
  )
}

