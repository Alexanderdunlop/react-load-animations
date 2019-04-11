import React from 'react'
import renderer from 'react-test-renderer'
import { Comet } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Comet />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with both props', () => {
  const tree = renderer.create(<Comet width={500} height={500} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('does not render with invalid props', () => {
  const tree = renderer.create(<Comet width={'500'} height={'500'} />).toJSON()
  expect(tree).toMatchSnapshot()
})
