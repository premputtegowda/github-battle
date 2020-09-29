import React from 'react';
import Popular from './Popular'
import Main from './Main'
import {fetchPopularRepos} from '../utils/api'



export default class Content extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        selectedLanguage: 'All',
        repos: {},
        error: null,
      }
  
      this.updateLanguage = this.updateLanguage.bind(this)
      this.isLoading = this.isLoading.bind(this)
    }
    componentDidMount () {
      this.updateLanguage(this.state.selectedLanguage)
    }
    updateLanguage (selectedLanguage) {
        console.log('click')
      this.setState({
        selectedLanguage,
        error: null,
    
      })
      if(!this.state.repos[selectedLanguage]){
        
      fetchPopularRepos(selectedLanguage)
        .then((data) => {
            this.setState(({repos})=>({
                repos:{...repos, [selectedLanguage]: data}
            }))
        })
        .catch(() => {
          console.warn('Error fetching repos: ', error)
  
          this.setState({
            error: `There was an error fetching the repositories.`
          })
        })
        }
    }
    isLoading() {
    const {selectedLanguage, repos, error} = this.state
      return !repos[selectedLanguage] && error === null
    }
    render() {
      const { selectedLanguage, repos, error } = this.state
  
      return (
        
        <div className='content'>
          <Popular
            selectedLanguage={selectedLanguage}
            onUpdateLanguage={this.updateLanguage}
          />
  
          <Main error = {error} repos = {repos[selectedLanguage]} isLoading = {this.isLoading}/>
          </div>
      )
    }
  }