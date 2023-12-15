import { useState } from "react"
import StartPomodoro from "./component/startPomodoro"
import PomodoroHome from "./component/pomodoroHome"


function App() {
   const [isStartSession,setIsStartSession] = useState(true)

  function togglePomodoro(){
    setIsStartSession((prev)=>!prev)
  }

  return (
    <>
    {isStartSession ? <PomodoroHome/>:<StartPomodoro togglePomodoro={togglePomodoro}/>}
    </>
  )
}

export default App
