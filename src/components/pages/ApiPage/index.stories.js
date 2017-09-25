import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ApiPage } from 'components'

storiesOf('ApiPage', module)
  .add('default', () => (
    <ApiPage />
  ))
