import React from 'react'
import renderer from 'react-test-renderer'
import { Comet } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Comet />).toJSON()
  expect(tree).toMatchSnapshot()
})
