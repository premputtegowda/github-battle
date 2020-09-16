import React from 'react';
import PropTypes from 'prop-types'

function LanguagesNav({selected, onUpdateLanguage}){

    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

    return(
        <React.Fragment> 
            <nav className='sidebar'>
                    <ul className="sidebar-nav">
                        {languages.map((language)=> (
                            <li key={language}  className="sidebar-nav__item">
                                <button
                                    className={(language === selected ? 'sidebar-nav__btn--active' : 'sidebar-nav__btn')}
                                    onClick={() => onUpdateLanguage(language)}>
                                    {language}
                                     </button>
                             
                            </li>
                        ))}
                    </ul>
                </nav>
        </React.Fragment>
    )

}

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
}

export default function Popular({selectedLanguage, onUpdateLanguage}) {

    

    return (
            
        <React.Fragment>
            <LanguagesNav selected = {selectedLanguage} onUpdateLanguage = {onUpdateLanguage}/>
        </React.Fragment>
            
    )

}

    
        
        
        
    