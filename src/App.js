import React from "react"
import ScriptComponent from './ScriptComponent'
import currentLine from './assets/data.json'


function App() {
  const scriptLines = currentLine.map(text => <ScriptComponent data={text} />)
  
  return (
      <div>
          {scriptLines}            
      </div>
  )
}

export default App

