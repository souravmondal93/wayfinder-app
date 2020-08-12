import React, { Component } from 'react';

import Person from '../Person/Person';
import Board from '../Board/Board';
import * as S from './BoardWrapper.styled';

export default class BoardWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return(
      <S.Wrapper>
        <Board />

        <Person />
      </S.Wrapper>
    )
  }
}