import "./index.css"
import Pages from "./Pages/Pages"
import SignIn from "./Admin/Admin_Components/SignIn/SignIn"
const App = () => {

  return (
    <div>
      <SignIn />
      <Pages />
    </div>
  )
}

export default App