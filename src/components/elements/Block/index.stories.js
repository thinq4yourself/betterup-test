import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Block from '.'

storiesOf('Block', module)
  .add('default', () => (
    <Block>Offal lomo woke, beard waistcoat dreamcatcher .</Block>
  ))
  .add('reverse', () => (
    <Block reverse>Offal lomo woke, beard waistcoat dreamcatcher .</Block>
  ))
  .add('palette', () => (
    <Block palette="primary">Offal lomo woke, beard waistcoat dreamcatcher .</Block>
  ))
  .add('palette reverse', () => (
    <Block palette="primary" reverse>
      Offal lomo woke, beard waistcoat dreamcatcher .
    </Block>
  ))
  .add('palette opaque', () => (
    <Block palette="primary" opaque>
      Offal lomo woke, beard waistcoat dreamcatcher .
    </Block>
  ))
  .add('palette opaque reverse', () => (
    <Block palette="primary" opaque reverse>
      Offal lomo woke, beard waistcoat dreamcatcher .
    </Block>
  ))
