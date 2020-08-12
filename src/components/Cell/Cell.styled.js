import styled from '@emotion/styled';

export const Cell = styled.div`
  height: 100px;
  width: 100px;
  display: inline-block;
  background-color: lightyellow;
  box-sizing: border-box;
  color: rgba(150, 150, 150, 0.5);

  ${props => {
    let style = '';
    for (let side in props.borderedSide) {
      style = style + getBorderStyle(side);
    }
    return style;
  }}
`;

const getBorderStyle = (side) => {
  return `border-${side}: 10px solid black;`
};
