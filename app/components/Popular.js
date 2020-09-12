import React from 'react';


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
        
        const languages = ['All', 'python', 'Javascript', 'php']
        return (
            
            <React.Fragment>
                <nav className='sidebar'>
                    <ul className="sidebar-nav">
                        {languages.map((language)=> (
                            <li key={language}  className="sidebar-nav__item">
                                <button
                                    className={(language === this.state.selectedLanguage ? 'sidebar-nav__btn--active' : 'sidebar-nav__btn')}
                                    onClick={() => this.updateLanguage(language)}>
                                    {language}
                                     </button>
                             
                            </li>
                        ))}
                    </ul>
                </nav>
            </React.Fragment>
                
        )
    }
}