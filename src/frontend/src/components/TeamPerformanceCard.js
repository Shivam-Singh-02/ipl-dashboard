import React from 'react';
import {} from 'react-router-dom';

export const TeamPerformanceCard = ({team}) => {

    if(!team) return null;

    return(
        <h2>Won {team.totalWins} / Played {team.totalMatches}</h2>
    );
    
}