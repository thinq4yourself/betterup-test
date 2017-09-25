import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { EditPage } from 'components'

storiesOf('EditPage', module)
  .add('default', () => (
    <EditPage />
  ))
