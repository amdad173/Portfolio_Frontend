import React, { useEffect, useState } from 'react'
import './Blog.scss'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter'
import SearchBar from '../SearchBar/SearchBar'
import axios from 'axios'
import BlogData from '../BlogData/BlogData'
import Empty from '../Empty/Empty'
import Loader from 'react-loaders'

const Blog = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [blogs, setBlogs] = useState([])
  const [searchKey, setSearchKey] = useState('')
  useEffect(() => {
    axios
      .get('https://portfolio-server-a12qp50ot-khurshidul.vercel.app/blogs')
      .then((res) => {
        setBlogs(res.data)
      })
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  // // Search submit
  // const handleSearchBar = (e) => {
  //   e.preventDefault()
  //   handleSearchResults()
  // }
  // const handleSearchResults = () => {
  //   const filteredBlogs = blogs.filter((blog) => {
  //     if (blog === '') {
  //       return blog
  //     } else if (blog.title.toLowerCase().includes(searchKey.toLowerCase())) {
  //       return blog
  //     }
  //   })
  //   setSearchBlogs(filteredBlogs)
  // }
  return (
    <>
      <div className="container blog-page">
        <div className="text-blog">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['M', 'y', ' ', 'B', 'l', 'o', 'g', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div>
          <SearchBar
            searchKey={searchKey}
            setSearchKey={setSearchKey}
          />
        </div>
        <div className="blogs">
          {blogs
            .filter((blog) => {
              if (blog == '') {
                return blog
              } else if (
                blog.title.toLowerCase().includes(searchKey.toLowerCase())
              ) {
                return blog
              }
            })
            .map((blog) => (
              <>
                {!blogs.length ? (
                  <Empty />
                ) : (
                  <BlogData key={blog._id} blog={blog} />
                )}
              </>
            ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Blog
