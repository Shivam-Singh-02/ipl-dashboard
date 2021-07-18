import { React } from 'react'
import { Link } from 'react-router-dom'
import './TeamTile.scss'

export const TeamTile = ({teamName}) => {
    const teams = {
        'Mumbai Indians':'3',
        'Kolkata Knight Riders':'1',
        'Kings XI Punjab':'2',
        'Royal Challengers Bangalore':'4',
        'Sunrisers Hyderabad':'7',
        'Rajasthan Royals':'5',
        'Chennai Super kings':'9',
        'Delhi Capitals':'10'
    }
    return(
        <div className="TeamTile">
       
            <h1>
                <Link to={`/team/${teamName}`}>{teamName}</Link>
                <img src={`https://wtspdp.com/wp-content/uploads/2021/04/ipl-2021-${teams[teamName]}.png`} alt=""/>
            </h1>
        </div>
    )
}