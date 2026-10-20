import { Routes, Route, NavLink } from 'react-router-dom'
import AllPosts from './pages/AllPosts'
import AddNew from './pages/AddNew'
import EditPost from './pages/EditPost'
import Preview from './pages/Preview'

function App() {
  return (
    <div className="container">
      <nav>
        <NavLink to="/">All Posts</NavLink>
        <NavLink to="/add">Add New</NavLink>
        <NavLink to="/preview">Preview</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/add" element={<AddNew />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </div>
  )
}

export default App