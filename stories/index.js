import React from 'react'
import { storiesOf } from '@storybook/react'
import { Comet, Ellipsis, Ring, Ripple } from '../src'

storiesOf('Spinners', module)
  .add('Comet', () => <Comet />)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Ring', () => <Ring />)
  .add('Ripple', () => <Ripple />)
