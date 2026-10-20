import { useEffect, useState } from 'react'
import { getPosts } from '../api'

const perPage = 3

function Preview() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
 
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await getPosts(100, 0)
        setPosts(res.data.filter((p) => p.status === 'publish'))
      } catch (err) {
        console.log(err)
        alert('Gagal mengambil data')
      }
    }

    loadPosts()
  }, [])

  const totalPages = Math.ceil(posts.length / perPage)
  const start = (page - 1) * perPage
  const visible = posts.slice(start, start + perPage)

  return (
    <div>
      <h2>Preview</h2>

      {visible.length === 0 && <p>Belum ada article yang dipublish</p>}

      {visible.map((p) => (
        <div className="blog-card" key={p.id}>
          <h3>{p.title}</h3>
          <p className="blog-meta">
            {p.category} | {new Date(p.created_date).toLocaleDateString('id-ID')}
          </p>
          <p className="blog-content">{p.content}</p>
        </div>
      ))}

      {totalPages > 1 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={page === n ? 'active' : ''}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}

          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default Preview