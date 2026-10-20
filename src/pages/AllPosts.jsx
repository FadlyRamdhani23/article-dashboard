import { useEffect } from 'react'
import { getPosts } from '../api'

function AllPosts() {
  useEffect(() => {
    getPosts(100, 0).then((res) => console.log(res.data))
  }, [])

  return <h2>All Posts</h2>
}

export default AllPosts