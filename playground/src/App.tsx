import React from 'react';
import { SaddleClothTd } from './component-lib/components/SaddleClothTd';

function App() {
  return (
    <div className="App">
      <body>
        <table>
          <tr>
            <td>hello</td>
            <SaddleClothTd number={1} key={123}>
              12
            </SaddleClothTd>
          </tr>
        </table>
      </body>
    </div>
  );
}

export default App;
