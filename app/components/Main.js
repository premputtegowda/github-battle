import React from 'react';
import Repos from './Repos'


export default function Main({error, repos, isLoading}) {

    

    return (
            
        <React.Fragment>
            {isLoading() && <p>LOADING</p>}
  
                {error && <p>{error}</p>}

            {repos && <Repos repos={repos}/>}
        </React.Fragment>
            
    )

}