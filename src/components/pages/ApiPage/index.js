import React from 'react'

import { PageTemplate, Header, Footer } from 'components'
import { PostForm, PostList } from 'containers'

const ApiPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      Posts (<code>posts</code>) from <a href="https://jsonplaceholder.typicode.com/posts"><code>jsonplaceholder.typicode.com/posts</code></a>
      <PostForm />
      <PostList limit={15} />
    </PageTemplate>
  )
}

export default ApiPage
