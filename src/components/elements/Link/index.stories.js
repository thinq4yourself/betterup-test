import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => (
    <Link href="https://github.com/thinq4yourself">Me</Link>
  ))
  .add('reverse', () => (
    <Link href="https://github.com/WriteOn" reverse>Me again</Link>
  ))
  .add('another palette', () => (
    <Link href="https://github.com/BeardandFedora" palette="secondary">Still me</Link>
  ))
