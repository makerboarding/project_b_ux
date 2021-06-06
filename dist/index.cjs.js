'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const handleSaddleBackground = (saddleNumber) => {
    switch (Math.round(saddleNumber)) {
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
            console.log(`default saddle background ${saddleNumber}`);
            return 'black';
    }
};
const handleSaddleForeground = (saddleNumber) => {
    switch (Math.round(saddleNumber)) {
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
            console.log(`default saddle foreground ${saddleNumber}`);
            return 'white';
    }
};
const SaddleClothTd = styled__default['default']('td') `
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

const GradeData = { grades: [
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "speed": 55,
            "grade": 60
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "speed": 56,
            "grade": 70
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "speed": 57,
            "grade": 80
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "speed": 58,
            "grade": 90
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "speed": 59,
            "grade": 100
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "speed": 54.5,
            "grade": 60
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "speed": 55.5,
            "grade": 70
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "speed": 56.5,
            "grade": 80
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "speed": 57.5,
            "grade": 90
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "speed": 58.5,
            "grade": 100
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "speed": 53.5,
            "grade": 60
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "speed": 54.5,
            "grade": 70
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "speed": 55.5,
            "grade": 80
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "speed": 56.5,
            "grade": 90
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "speed": 57.5,
            "grade": 100
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "speed": 53.2,
            "grade": 60
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "speed": 54.2,
            "grade": 70
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "speed": 55.2,
            "grade": 80
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "speed": 56.2,
            "grade": 90
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "speed": 57.2,
            "grade": 100
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "speed": 53,
            "grade": 60
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "speed": 54,
            "grade": 70
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "speed": 55,
            "grade": 80
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "speed": 56,
            "grade": 90
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "speed": 57,
            "grade": 100
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "speed": 52.8,
            "grade": 60
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "speed": 53.8,
            "grade": 70
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "speed": 54.8,
            "grade": 80
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "speed": 55.8,
            "grade": 90
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "speed": 56.8,
            "grade": 100
        }
    ] };

const gradeForWorkout = () => {
    console.log(GradeData);
    return 'foobar';
};

exports.GradeData = GradeData;
exports.SaddleClothTd = SaddleClothTd;
exports.gradeForWorkout = gradeForWorkout;
