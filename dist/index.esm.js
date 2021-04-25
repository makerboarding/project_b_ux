import styled from 'styled-components';

const handleSaddleBackground = (saddleNumber) => {
    console.log(`saddle background: ${saddleNumber}`);
    switch (saddleNumber) {
        case 1:
            return 'red';
        case 2:
            return 'white';
        case 3:
            return 'blue';
        case 4:
            return 'yellow';
        case 5:
            return 'green';
        case 6:
            return 'black';
        case 7:
            return 'orange';
        case 8:
            return 'pink';
        case 9:
            return 'turquoise';
        case 10:
            return 'purple';
        case 11:
            return 'lightgrey';
        case 12:
            return 'lime';
        case 13:
            return 'brown';
        case 14:
            return 'maroon';
        case 15:
            return 'khaki';
        case 16:
            return '#516b84';
        case 17:
            return 'navy';
        case 18:
            return 'forestgreen';
        case 19:
            return 'mediumblue';
        case 20:
            return 'fuchsia';
        case 21:
            return '#b19cd9';
        default:
            console.log(`default saddle foreground ${saddleNumber}`);
            return 'black';
    }
};
const handleSaddleForeground = (saddleNumber) => {
    switch (saddleNumber) {
        case 1:
            return 'white';
        case 2:
            return 'black';
        case 3:
            return 'white';
        case 4:
            return 'black';
        case 5:
            return 'white';
        case 6:
            return 'gold';
        case 7:
            return 'black';
        case 8:
            return 'black';
        case 9:
            return 'black';
        case 10:
            return 'white';
        case 11:
            return 'red';
        case 12:
            return 'black';
        case 13:
            return 'white';
        case 14:
            return 'yellow';
        case 15:
            return 'black';
        case 16:
            return 'red';
        case 17:
            return 'white';
        case 18:
            return 'yellow';
        case 19:
            return 'red';
        case 20:
            return 'yellow';
        case 21:
            return 'navy';
        default:
            console.log(`default saddle background ${saddleNumber}`);
            return 'white';
    }
};
const SaddleClothTd = styled('td') `
  text-align: center;
  font-weight: bold;
  max-height: 40px;
  color: green;
  color: ${(p) => handleSaddleForeground(p.programNumber)};
  background-color: ${(p) => handleSaddleBackground(p.programNumber)};
  padding: 0.2rem;
  // font-size: 10pt;
  width: ${(p) => (p.width ? p.width : 10)};
  border-left: 1px solid #dee2e6;
  border-right: 1px solid #dee2e6;
`;

export { SaddleClothTd };
