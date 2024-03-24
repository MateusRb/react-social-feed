import { Post } from './components/Post'
import { Header } from './components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Mateus Ribeiro"
            content="Lorem Ipsum"  
          />
          <Post
            author="Mateus Ribeiro"
            content="Lorem Ipsum"  
          />
        </main>
      </div>
    </div>
  )
}

export default App
