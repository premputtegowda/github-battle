import React from 'react';

import { FaUser, FaStar, FaCodeBranch, FaExclamationTriangle } from 'react-icons/fa';


export default function Repos(props) {
    const { index } =  props;
    const { name, owner, html_url, stargazers_count, forks, open_issues, } = props.repo
 
        const { login, avatar_url } = owner

    return (
            
        <div className='card'>
        
            
            <div className='card-img'>
                <img src={avatar_url} alt={`Avatar for ${login}`}/>
            </div>

            <div className="card-content">
                <div className='card-ranking'>
                <h2 className="card-ranking-heading">{index+1}</h2>
                </div>

                <ul className='card-list'>
              <li>
                <FaUser color='rgb(255, 191, 116)' size={22} />
                <a href={`https://github.com/${login}`}>
                  {login}
                </a>
              </li>
              <li>
                <FaStar color='rgb(255, 215, 0)' size={22} />
                {stargazers_count.toLocaleString()} stars
              </li>
              <li>
                <FaCodeBranch color='rgb(129, 195, 245)' size={22} />
                {forks.toLocaleString()} forks
              </li>
              <li>
                <FaExclamationTriangle color='rgb(241, 138, 147)' size={22} />
                {open_issues.toLocaleString()} open
              </li>
            </ul>

            </div>
            <div>
                
            </div>
            <a href={`https://github.com/${login}`} className='card-link'>
    <button className='card-link-btn'>{login}</button>
                </a>
        </div>    
    )

}