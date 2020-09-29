import React from 'react';
import RepoCard from './RepoCard'

export default function Repos({repos}) {

    

    return (
            
        <div className='card-container'>
            {/* <pre>{JSON.stringify(repos, null, 2)}</pre> */}
            
            {repos.map((repo, index)=> (
               
                <RepoCard key={repo.html_url} repo={repo} index={index}/>
            ))}


        </div>    
    )

}