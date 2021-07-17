import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailCard';



export const MatchPage = () => {

    const [matches, setMatches] = useState([])
    const { teamName, year } = useParams()

    useEffect(
        () => {
            const fetchMatches = async () => {
              const response = await fetch(`http://localhost:8080/team/Delhi Capitals/matches?year=${year}`)
              const data = await response.json();
              console.log(data);
              setMatches(data);
            }
            fetchMatches();
        },[year]
    );
        
    if(!matches) return null;
    return (
        <div>
            <h1>
                {
                    matches.map(match => <MatchDetailCard teamName={teamName} match={match}/>)
                }
            </h1>
        </div>
    );

}

