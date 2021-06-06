// NOTE: this 'src_pre' folder is code that will generate ts data files from an
// excel spreadsheet
// - this is using excel so I can have forumlas
// - this is using typescript becuase - it seemed like a good idea

// import { IWorkoutGradeLevel } from '../lib/IWorkoutGradeLevel';
import { readFile, utils } from 'xlsx'
import * as fs from 'fs';

const greeting = 'hello';
console.log(`testing precompile ${greeting}`);
// build workout grade ts from spreadsheet metadata.
// use the 'compiled ts' in app
function buildWorkoutGradesFromXLSX(): void {
  const workbook = readFile('src/lib/WorkoutGradeData.xlsx');
  const data = utils.sheet_to_json(workbook.Sheets['Sheet1'])
  console.log(data)
  const outputFile = 'src/lib/WorkoutGradeData.ts'
  const tsCode = `export const GradeData = { grades: ${JSON.stringify(data, null, 2)} }`
  fs.writeFileSync(outputFile, tsCode, { encoding: null });
}

buildWorkoutGradesFromXLSX();
