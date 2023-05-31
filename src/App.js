import { Route, Routes } from 'react-router-dom'
import './App.scss'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import { Contact } from './components/Contact/Contact'
import Home from './components/Home/Home'
import Layout from './components/Layout/Layout'
import SingleBlog from './components/SingleBlog/SingleBlog'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
