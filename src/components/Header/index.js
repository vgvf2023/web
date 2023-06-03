import react from 'react';
import * as S from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/logo.png';

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
            <a href="#" id="notification" >
              <img src={bell} alt="notificação" />
              <span>5</span>
            </a>
          </S.RightSide>
        </S.Container>
    )
}

export default Header;
