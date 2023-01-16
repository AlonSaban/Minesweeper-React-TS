import './App.css'
import NumberDisplay from '../NumberDisplay'

const App: React.FC = () => {

  return (
    <div className="App">
      <div className="header">
        <NumberDisplay value={0} />
        <div className="status"><span role="img" aria-label="status">😀</span></div>
        <NumberDisplay value={23} />
      </div>
      <div className="body">
        body
      </div>
    </div>
  )
}

export default App
