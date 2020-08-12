import React, { Component } from 'react';

import { direction } from '../../helpers/constants';
import { getFormattedCoordinates, mapIndexToCoordinate, changeFacingDirection } from '../../helpers/util';

import * as S from './Person.styled';

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Andrew Bot',
      currentPosition: { x: 0, y: 0 },
      fieldOfView: 120,
      rangeOfFieldOfView: 1,
      speed: 1,
      direction: direction.DIRECTION_EAST,
      rotate: 0,
      path: [0, 1, 5, 9, 10, 6, 7, 11, 15, 14, 13, 12],
    };
  }

  rotateClockWise = (degree) => {
    console.log(`Rotate Person Clockwise by ${degree} degree`);
    this.getNewPostion();
  };

  moveCharacter = (path) => {
    path.forEach((cellIdx, idx) => {
       setTimeout(() => {
        const { x, y } = mapIndexToCoordinate(cellIdx);
        const facingAngle = changeFacingDirection(this.state.currentPosition, {x, y});
        const turnAngle = this.state.rotate - facingAngle;
        console.log('Coordinates: ', x, y, facingAngle, turnAngle);
        this.setState((state) => ({
          currentPosition: {
            x,
            y,
          },
          rotate: facingAngle
        }));
      }, 1000 * idx);
    });
  }

  rotateAntiClockWise = (degree) => {
    console.log(`Rotate Person Anti-Clockwise by ${degree} degree`);
  };

  move = (newPosition) => {
    console.log(
      `Move person from ${getFormattedCoordinates(
        this.state.currentPosition
      )} to ${getFormattedCoordinates(newPosition)}`
    );
  };

  searchNextNearestPositions = () => {
    console.log(`Searching nearest valid positions ...`);
  };

  getNewPostion = () => {
    this.setState((state) => ({
      rotate: state.rotate > 360 ? 0 : state.rotate + 60,
      currentPosition: {
        x: Math.random() * 1000,
        y: Math.random() * 100,
      },
    }));
  };

  handleButtonClick = () => {
    // this.rotateClockWise(120);
    this.moveCharacter(this.state.path);
  }

  render() {
    return (
      <>
        <S.PersonHead
          animate={{
            rotate: this.state.rotate,
            x: this.state.currentPosition.x,
            y: this.state.currentPosition.y,
          }}
          transition={{ ease: 'easeIn', duration: 0.5 }}
          initial={false}
          title={this.state.name}
        />

        <S.ButtonContainer>
          <button onClick={() => this.handleButtonClick()}>Move</button>
        </S.ButtonContainer>
      </>
    );
  }
}
