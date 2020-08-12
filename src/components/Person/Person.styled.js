import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const PersonHead = styled(motion.div)`
  background-color: lightgrey;
  border-radius: 100%;
  border: 1px dotted grey;
  height: 40px;
  width: 40px;

  position: absolute;
  top: 40px;
  left: 40px;

  &::after {
    content: ' ';
    position: absolute;
    display: block;
    top: 0px;
    margin-left: 0px;
    border-right: 20px solid black;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid transparent;
    border-radius: 20px;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  left: 500px;
`;