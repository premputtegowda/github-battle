import React from 'react';
import Popular from './Popular'
import Main from './Main'


export default class Content extends React.Component {

    render (){
        return (
            <div className='content'>
                <Popular />
                <Main />
            </div>
        )
    }
}