import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Popular from './components/Popular'
import Content from './components/Content'

import './index.css'


class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <Header/>
               
                <Content />

            </div>
            )
    }
}





ReactDOM.render(
    <App />,
    document.getElementById('app')
  )


