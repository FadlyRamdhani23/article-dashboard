import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../api'

function AddNew() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()
    const handleSave = async (status) => {
    try {
      await createPost({ title, content, category, status })
      navigate('/')
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setErrors(err.response.data.errors)
      } else {
        alert('Gagal menyimpan article')
      }
    }
  }
    return (
    <div>
      <h2>Add New</h2>

      <div className="form-group">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>

      <div className="form-group">
        <label>Content</label>
        <textarea rows="8" value={content} onChange={(e) => setContent(e.target.value)} />
        {errors.content && <p className="error">{errors.content}</p>}
      </div>

      <div className="form-group">
        <label>Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
        {errors.category && <p className="error">{errors.category}</p>}
      </div>

      <button className="btn btn-primary" onClick={() => handleSave('publish')}>Publish</button>
      <button className="btn" onClick={() => handleSave('draft')}>Draft</button>
    </div>
  )
}

export default AddNew