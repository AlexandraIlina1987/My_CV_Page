
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage'
import { ProjectPage } from './pages/ProjectPage/ProjectPage'
import { FeedbackPage } from './pages/Feedback/FeedbackPage'
import { BlogPage } from './pages/BlogPage/BlogPage'
import { PostPage } from './pages/PostPage/PostPage'

function App() {
  

  return (
<Routes>
  <Route path="/" element={<MainPage />} />
  <Route path="/projects" element={<ProjectPage />} />
  <Route path="/feedback" element={<FeedbackPage />} />
  <Route path="/blog" element={<BlogPage />} />
  <Route path="/blog/:id" element={<PostPage />} />
</Routes>
  )
}

export default App
