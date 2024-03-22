import { Post } from "./Post"
import { Header } from "./components/Header"
import './styles.css'

function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Mateus Ribeiro"
        content="Lorem Ipsum"  
      />
    </div>
  )
}

export default App
