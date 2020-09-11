import React from 'react';


export default class Popular extends React.Component {

    render (){
        const languages = ['All', 'python', 'Javascript', 'php']
        return (
            <React.Fragment>
                <nav className='sidebar'>
                    <ul className="sidebar-nav">
                        {languages.map((language)=> (
                            <li key={language}className='sidebar-nav__item'>
                                <a href="" className='sidebar-nav__link'>
                                    {language}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}