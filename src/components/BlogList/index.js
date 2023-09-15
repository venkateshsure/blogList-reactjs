// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props
  console.log(blogsList)
  return (
    <ul className="ul-con">
      {blogsList.map(each => (
        <BlogItem key={each.id} each={each} />
      ))}
    </ul>
  )
}

export default BlogList
