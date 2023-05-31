import axios from 'axios'
import './SingleBlog.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'react-loaders'

const SingleBlog = () => {
  const { id } = useParams()
  const [blogDetail, setBlogDetail] = useState({})
  useEffect(() => {
    axios
      .get(`https://portfolio-server-a12qp50ot-khurshidul.vercel.app/blogs/${id}`)
      .then((res) => {
        console.log(res.data)
        setBlogDetail(res.data)
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <div className="singleData">
        <div className="cover">
          <img className="single-cover" src={blogDetail.cover} alt="" />
        </div>
        <h1 className="blog-title">{blogDetail.title}</h1>
        <h3 className="author">{blogDetail.authorName}</h3>
        <p className="blog-des">{blogDetail.description}</p>
        <img className="single-avatar" src={blogDetail.avatar} alt="" />
        <img className="single-avatar" src={blogDetail.avatar} alt="" />
      </div>
      <Loader type={"pacman"}/>
    </>
  )
}

export default SingleBlog
