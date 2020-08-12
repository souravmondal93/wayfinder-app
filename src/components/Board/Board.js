import React, { Component } from 'react';

import { side } from '../../helpers/constants';
import Cell from '../Cell/Cell';
import * as S from './Board.styled';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: [
        {},
        {[side.SIDE_RIGHT]: true},
        {[side.SIDE_LEFT]: true},
        {[side.SIDE_BOTTOM]: true},
        {[side.SIDE_RIGHT]: true},
        {[side.SIDE_LEFT]: true, [side.SIDE_RIGHT]: true},
        {[side.SIDE_LEFT]: true},
        {[side.SIDE_TOP]: true},
        {[side.SIDE_BOTTOM]: true},
        {[side.SIDE_BOTTOM]: true},
        {[side.SIDE_RIGHT]: true},
        {[side.SIDE_LEFT]: true},
        {[side.SIDE_TOP]: true},
        {[side.SIDE_TOP]: true},
        {},
        {}
      ]
    }
  }

  render() {
    return (
      <S.Board>
        {this.state.cells.map((cell, idx) => (
          <Cell borderedSide={cell} idx={idx} />
        ))}
      </S.Board>
    );
  }
}