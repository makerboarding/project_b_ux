import styled from 'styled-components';

export interface SaddleClothTdProps {
  number: number;
  id?: string;
  width?: string;
  borderSize?: number;
  ref?: any;
}

export const SaddleClothTd = styled('td')`
  max-height: 20px;
  padding: 0.2rem;
  // font-size: 10pt;
  width: ${(p: SaddleClothTdProps) => (p.width ? p.width : 10)};
  border-left: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
  &:hover {
    cursor: pointer;
  }
`;
