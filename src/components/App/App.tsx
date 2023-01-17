import { useState } from 'react';
import './App.scss'
import NumberDisplay from '../NumberDisplay'
import { generateCells } from '../../utils';
import { faceStatus } from '../../types/index';

const App: React.FC = () => {

  const [cells, setCells] = useState(generateCells());


  console.log(cells)


  return (
    <div className="App">
      <div className="header">
        <NumberDisplay value={0} />
        <div className="status">{faceStatus.natural}</div>
        <NumberDisplay value={23} />
      </div>
      <div className="body">
        body
      </div>
    </div>
  )
}

export default App
