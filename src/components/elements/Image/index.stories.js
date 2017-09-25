import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Image from '.'

storiesOf('Image', module)
  .add('default', () => (
    <Image width={200} />
  ))
