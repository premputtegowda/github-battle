import React from 'react';


export default function Main({error, repos, isLoading}) {

    

    return (
            
        <React.Fragment>
            {isLoading() && <p>LOADING</p>}
  
                {error && <p>{error}</p>}

            {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
        </React.Fragment>
            
    )

}