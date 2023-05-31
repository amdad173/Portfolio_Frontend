import React from 'react'
import { Link } from 'react-router-dom'
import './BlogData.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
// import Chip from '../Chip/Chip'
const BlogData = ({ blog }) => {
  const { _id, avatar, title, authorName } = blog
  return (
    <>
      <div className="blogData">
        <img src={avatar} className="avatar" alt="avatar" />
        <h3>{title}</h3>
        {/* <Chip label={category} /> */}
        <div className='author-arrow'>
          <h4>{authorName}</h4>
          <Link to={`/blog/${_id}`}>
            <FontAwesomeIcon
              className="rightArrow"
              icon={faArrowAltCircleRight}
            ></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BlogData
