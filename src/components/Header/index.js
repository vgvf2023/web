import react from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';

function Header() {
    return (
        <S.Container>
          <S.LeftSide>
            <img src={logo} alt="logo" />
          </S.LeftSide>
          <S.RightSide>
            <a href="#">INÍCIO</a>
            <a href="#">NOVA TAREFA</a>
            <a href="#">SINCRONIZAR CELULAR</a>
          </S.RightSide>
        </S.Container>
    )
}

export default Header;
