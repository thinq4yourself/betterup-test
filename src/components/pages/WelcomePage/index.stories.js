import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { WelcomePage } from 'components'

storiesOf('WelcomePage', module)
  .add('default', () => (
    <WelcomePage />
  ))
