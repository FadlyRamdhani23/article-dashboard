import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { getPosts, updatePost } from '../api'

const tabs = [
  { label: 'Published', status: 'publish' },
  { label: 'Drafts', status: 'draft' },
  { label: 'Trashed', status: 'thrash' },
]

function AllPosts() {
  const [posts, setPosts] = useState([])
  const [activeTab, setActiveTab] = useState('publish')

  const loadPosts = async () => {
    try {
      const res = await getPosts(100, 0)
      setPosts(res.data)
    } catch (err) {
      console.log(err)
      alert('Gagal mengambil data')
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  const handleThrash = async (post) => {
    try {
      await updatePost(post.id, {
        title: post.title,
        content: post.content,
        category: post.category,
        status: 'thrash',
      })
      loadPosts()
    } catch (err) {
      console.log(err)
      alert('Gagal memindahkan ke trash')
    }
  }

  const filtered = posts.filter((p) => p.status === activeTab)

  return (
    <div>
      <h2>All Posts</h2>

      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t.status}
            className={activeTab === t.status ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(t.status)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="3">Belum ada article</td>
            </tr>
          ) : (
            filtered.map((p) => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>{p.category}</td>
                <td>
                  <Link to={`/edit/${p.id}`} className="icon-btn" title="Edit">
                    <FaEdit />
                  </Link>
                  {p.status !== 'thrash' && (
                    <button className="icon-btn" title="Thrash" onClick={() => handleThrash(p)}>
                      <FaTrash />
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AllPosts