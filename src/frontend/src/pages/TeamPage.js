import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { TeamPerformanceCard } from '../components/TeamPerformanceCard';
import { PieChart } from 'react-minimal-pie-chart';
import './TeamPage.scss'

export const TeamPage = () => {

    const [team, setTeam] = useState({matches:[]});
    const { teamName='' } = useParams();
    useEffect(
        () => {
            const fetchMatches = async () => {
              const response = await fetch(`http://localhost:8080/team/${teamName}`)
              const data = await response.json();
              console.log(data);
              setTeam(data);
            }
            fetchMatches();
        },[teamName]
    );
    if(!team || !team.teamName) return (<h1>Team Not found</h1>);
    return (
        <div className="TeamPage">            
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>
            <div className="team-performance-section">
                <TeamPerformanceCard team = {team}/>
            </div> 
            <div className="match-detail-section">
                <h3>Latest Matches</h3>
                <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
            </div>
            { team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match} />)}
            <div className="more-link">
                <a href="#">More</a>
            </div>
        </div>
       
  );
}

