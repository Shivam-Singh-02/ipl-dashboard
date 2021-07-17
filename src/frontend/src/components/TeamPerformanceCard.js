import React from 'react';
import PieChart from 'react-simple-pie-chart';



export const TeamPerformanceCard = ({team}) => {

    if(!team) return null;

    return(
        <div className="TeamPerformanceCard" style={{width:5+'rem'}} >
        <h3>wins/total</h3>
            <PieChart
                slices={[
                    {
                    color: '#4da375',
                    value: team.totalWins,
                    },
                    {
                    color: 'grey',
                    value: team.totalMatches,
                    },
                ]}
            />
        </div>
        
    );
    
}