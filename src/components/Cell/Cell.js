import React, { Component } from 'react';

import * as S from './Cell.styled';

export default class Cell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <S.Cell {...this.props}>
        {this.props.idx}
      </S.Cell>
    );
  }
}