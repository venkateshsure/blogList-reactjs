// Write your JS code here

import './index.css'

const BlogItem = prop => {
  const {each} = prop
  const {title, description, publishedDate} = each
  return (
    <li className="list-con">
      <div className="head">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="body">
        <p>{publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
