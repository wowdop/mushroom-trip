import * as S from './hugo.style'

const Hugo = ({ left }) => {
  return <S.Hugo left={left} />
}

Hugo.defaultProps = {
  left: 0,
}

export default Hugo
