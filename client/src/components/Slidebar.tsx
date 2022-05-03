import React from 'react';
import styled from 'styled-components';
export default function Slide({ img }: any) {
  return <IMG src={img} />;
}
const IMG = styled.img`
  width: 103%;
  height: 70vh;
`;
