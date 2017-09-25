import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Paragraph, Link } from 'components'
import EditIcon from 'material-ui/svg-icons/editor/mode-edit'

const Article = styled.article``

const Post = ({ title, body, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>{title} <Link to="test/#"><EditIcon /></Link></Heading>
      <Paragraph>{body}</Paragraph>
    </Article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Post
