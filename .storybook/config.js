import { configure, addParameters } from '@storybook/react'
import packageJson from '../package.json'

addParameters({
  options: {
    name: 'React Load Animations',
    url: packageJson.repository.url,
    isFullScreen: false,
    showPanel: false
  }
})

function loadStories() {
  require('../stories/index.js')
}

configure(loadStories, module)
