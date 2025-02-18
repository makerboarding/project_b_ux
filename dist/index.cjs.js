'use strict';

var styledComponents = require('styled-components');

const handleSaddleBackground = (saddleNumber) => {
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
            console.log(`default saddle background ${saddleNumber}`);
            return 'black !important';
    }
};
const handleSaddleForeground = (saddleNumber) => {
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
            console.log(`default saddle foreground ${saddleNumber}`);
            return 'white !important';
    }
};
const SaddleClothTd = styledComponents.styled('td').withConfig({
    shouldForwardProp: (prop) => !['bordersize', 'programnumber'].includes(prop),
}) `
  text-align: center;
  font-weight: bold;
  max-height: 40px;
  color: green;
  color: ${(p) => handleSaddleForeground(p.programnumber)};
  background-color: ${(p) => handleSaddleBackground(p.programnumber)};
  padding: 0.2rem;
  // font-size: 10pt;
  width: ${(p) => (p.width ? p.width : 10)};
  border-left: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6 !important;
  border-bottom: 1px solid #dee2e6 !important;
  border-right: 1px solid #dee2e6;
`;

const GradeData = { grades: [
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "fps": 56.8,
            "grade": 6
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "fps": 55.8,
            "grade": 5
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "fps": 54.8,
            "grade": 4
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "fps": 53.8,
            "grade": 3
        },
        {
            "distanceFurlong": 6,
            "distanceFeet": 3960,
            "fps": 52.8,
            "grade": 2
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "fps": 57,
            "grade": 6
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "fps": 56,
            "grade": 5
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "fps": 55,
            "grade": 4
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "fps": 54,
            "grade": 3
        },
        {
            "distanceFurlong": 5,
            "distanceFeet": 3300,
            "fps": 53,
            "grade": 2
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "fps": 57.2,
            "grade": 6
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "fps": 56.2,
            "grade": 5
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "fps": 55.2,
            "grade": 4
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "fps": 54.2,
            "grade": 3
        },
        {
            "distanceFurlong": 4,
            "distanceFeet": 2640,
            "fps": 53.2,
            "grade": 2
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "fps": 57.5,
            "grade": 6
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "fps": 56.5,
            "grade": 5
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "fps": 55.5,
            "grade": 4
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "fps": 54.5,
            "grade": 3
        },
        {
            "distanceFurlong": 3,
            "distanceFeet": 1980,
            "fps": 53.5,
            "grade": 2
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "fps": 58.5,
            "grade": 6
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "fps": 57.5,
            "grade": 5
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "fps": 56.5,
            "grade": 4
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "fps": 55.5,
            "grade": 3
        },
        {
            "distanceFurlong": 2,
            "distanceFeet": 1320,
            "fps": 54.5,
            "grade": 2
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "fps": 59,
            "grade": 6
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "fps": 58,
            "grade": 5
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "fps": 57,
            "grade": 4
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "fps": 56,
            "grade": 3
        },
        {
            "distanceFurlong": 1,
            "distanceFeet": 660,
            "fps": 55,
            "grade": 2
        }
    ] };

const gradeForWorkout = (fps, distanceFeet) => {
    const distanceGrades = GradeData.grades.filter((grade) => {
        return grade.distanceFeet == distanceFeet;
    });
    if (distanceGrades) {
        // grades are sorted in decsending order
        const grade = distanceGrades.find((grade) => {
            return grade.fps < fps;
        });
        if (grade)
            return `${grade.grade}`;
    }
    return '0';
};

exports.GradeData = GradeData;
exports.SaddleClothTd = SaddleClothTd;
exports.gradeForWorkout = gradeForWorkout;
