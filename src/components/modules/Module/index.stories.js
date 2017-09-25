import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Module } from 'components'

storiesOf('Module', module)
  .add('default', () => (
    <Module>Hello</Module>
  ))
  .add('reverse', () => (
    <Module reverse>Hello</Module>
  ))
