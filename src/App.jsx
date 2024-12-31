import CreatePost from "./components/createpost"
import SocialMedia from "./components/socialmedia"
import Schedule from "./components/schedule"
import WriteUrContent from "./components/writeurcontent"
import FiftySix from "./components/56"
import Accounts from "./components/accounts"
import Maintain from "./components/maintain"
import Grow from "./components/grow"
function App() {
  return (
    <div className="grid grid-cols-3 gap-[10px] shadow-2xl m-[40px]">
      <CreatePost />
      <SocialMedia></SocialMedia>
      <Schedule> </Schedule>
      <WriteUrContent></WriteUrContent>
      <FiftySix></FiftySix>
      <Accounts></Accounts>
      <Maintain></Maintain>
      <Grow></Grow>
      sfd
    </div>
  )
}

export default App
