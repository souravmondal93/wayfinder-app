import styled from '@emotion/styled';

export const Board = styled.div`
  border: 10px solid;
  height: 400px;
  width: 400px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  position: absolute;
  left: 0;
  top: 0;
`;