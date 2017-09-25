import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Element from '.'

storiesOf('Element', module)
  .add('default', () => (
    <Element>Hello</Element>
  ))
  .add('reverse', () => (
    <Element reverse>Hello</Element>
  ))
