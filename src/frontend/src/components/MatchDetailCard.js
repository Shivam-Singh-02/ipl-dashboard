import { React } from 'react';
import { Link } from 'react-router-dom';
import './MatchDetailCard.scss'
export const MatchDetailCard = ({teamName, match})=> {
  if(!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1
  const otherTeamRoute = `/teams/${otherTeam}`
  const isWinner = teamName === match.matchWinner
  return (
    <div className={isWinner ? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card'}>
      <div>
          <span className="vs">vs</span>
          <h1><Link to= {otherTeamRoute}> {otherTeam}</Link></h1>         
          <h2 className="match-date">{match.date}</h2>      
          <h3 className="match-venue">at {match.venue}</h3>
          <h3 className="match-city">{match.city}</h3>
          <h3 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h3> 
      </div>
      <div className="additional-details"> 
        <h3>Toss Winner </h3>
          <p>{match.tossWinner}</p>
        <h3>Toss Decision </h3>
          <p>{match.tossDecision}</p>
        <h3>Player of Match</h3> 
          <p>{match.playerOfMatch}</p>
      </div>
    </div>
  );
}
