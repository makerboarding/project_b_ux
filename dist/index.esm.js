import styled from 'styled-components';

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

export { GradeData, SaddleClothTd, gradeForWorkout };
