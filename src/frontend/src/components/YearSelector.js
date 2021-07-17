import { React } from 'react';
import { Link } from 'react-router-dom';

import './YearSelector.scss'

export const YearSelector = ({teamName, year}) => {
    let years = [];
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;
    console.log(typeof year);
    for(let i=endYear; i>= startYear; i--){
        years.push(i);
    }
    console.log(typeof startYear);

    return(
        <ol>
            { years.map(dyear => (
                <div className = 'YearSelector'>
                    <li >
                        <Link to={`/team/${teamName}/matches/${dyear}`}>{dyear}</Link>
                    </li>
                </div>
                )
              ) 
            }
        </ol>
    )
        
}