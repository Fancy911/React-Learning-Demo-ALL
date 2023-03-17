import React, { Component,Fragment } from 'react'
// import Demo from './components/1_setState/index'
// import Demo from './components/2_lazyLoad/index'
// import Demo from './components/3_hooks/index'
import Demo from './components/6_optimize/index'
// import Demo from './components/8_ErrorBoundary/Parent'

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Demo/>
			</Fragment>
		)
	}
}
