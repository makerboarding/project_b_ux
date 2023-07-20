import styled from 'styled-components';

export interface SaddleClothTdProps {
  programNumber: number;
  id?: string;
  width?: string;
  borderSize?: number;
  ref?: any;
}

const handleSaddleBackground = (saddleNumber: number) => {
  switch (Math.round(saddleNumber)) {
    case 1:
      return 'red !important';
    case 2:
      return 'white !important';
    case 3:
      return 'blue !important';
    case 4:
      return 'yellow !important';
    case 5:
      return 'green !important';
    case 6:
      return 'black !important';
    case 7:
      return 'orange !important';
    case 8:
      return 'pink !important';
    case 9:
      return 'turquoise !important';
    case 10:
      return 'purple !important';
    case 11:
      return 'lightgrey !important';
    case 12:
      return 'lime !important';
    case 13:
      return 'brown !important';
    case 14:
      return 'maroon !important';
    case 15:
      return 'khaki !important';
    case 16:
      return '#516b84 !important';
    case 17:
      return 'navy !important';
    case 18:
      return 'forestgreen !important';
    case 19:
      return 'mediumblue !important';
    case 20:
      return 'fuchsia !important';
    case 21:
      return '#b19cd9 !important';
    default:
      console.log (`default saddle background ${saddleNumber}`)
      return 'black !important';
  }
};

const handleSaddleForeground = (saddleNumber: number) => {
  switch (Math.round(saddleNumber)) {
    case 1:
      return 'white !important';
    case 2:
      return 'black !important';
    case 3:
      return 'white !important';
    case 4:
      return 'black !important';
    case 5:
      return 'white !important';
    case 6:
      return 'gold !important';
    case 7:
      return 'black !important';
    case 8:
      return 'black !important';
    case 9:
      return 'black !important';
    case 10:
      return 'white !important';
    case 11:
      return 'red !important';
    case 12:
      return 'black !important';
    case 13:
      return 'white !important';
    case 14:
      return 'yellow !important';
    case 15:
      return 'black !important';
    case 16:
      return 'red !important';
    case 17:
      return 'white !important';
    case 18:
      return 'yellow !important';
    case 19:
      return 'red !important';
    case 20:
      return 'yellow !important';
    case 21:
      return 'navy !important';
    default:
      console.log (`default saddle foreground ${saddleNumber}`)
      return 'white !important';
  }
};

export const SaddleClothTd = styled('td').withConfig({
  shouldForwardProp: (prop) =>
    !['borderSize', 'programNumber'].includes(prop),
})<SaddleClothTdProps>`
  text-align: center;
  font-weight: bold;
  max-height: 40px;
  color: green;
  color: ${(p: SaddleClothTdProps) => handleSaddleForeground(p.programNumber)};
  background-color: ${(p: SaddleClothTdProps) => handleSaddleBackground(p.programNumber)};
  padding: 0.2rem;
  // font-size: 10pt;
  width: ${(p: SaddleClothTdProps) => (p.width ? p.width : 10)};
  border-left: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
`;
