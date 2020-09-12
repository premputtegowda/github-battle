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
export default class Popular extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedLanguage: 'All'
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }

    
      updateLanguage (selectedLanguage) {
        this.setState({
          selectedLanguage
        })
      }

    render (){
        
        const { selectedLanguage } = this.state
        return (
            
            <React.Fragment>
                <LanguagesNav selected = {selectedLanguage} onUpdateLanguage = {this.updateLanguage}/>
            </React.Fragment>
                
        )
    }
}