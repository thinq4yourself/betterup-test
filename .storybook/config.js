import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { setOptions } from '@kadira/storybook-addon-options'
import infoAddon from '@kadira/react-storybook-addon-info'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import configureStore from 'store/configure'
import theme from 'components/themes/default' // styled-components
import getMuiTheme from 'components/themes/default-material'  //material-ui
import api from 'services/api'

const store = configureStore({}, { api: api.create() })

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <MuiThemeProvider muiTheme={getMuiTheme}>
        {story()}
      </MuiThemeProvider>
    </ThemeProvider>
  </Provider>
))

configure(loadStories, module)
