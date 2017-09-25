import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { View } from 'components'

storiesOf('View', module)
  .add('default', () => (
    <View />
  ))
  .add('reverse', () => (
    <View reverse />
  ))
