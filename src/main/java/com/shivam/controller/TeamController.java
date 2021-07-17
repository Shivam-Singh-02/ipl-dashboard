package com.shivam.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shivam.model.Match;
import com.shivam.model.Team;
import com.shivam.repository.MatchRepository;
import com.shivam.repository.TeamRepository;

@RestController
@CrossOrigin
public class TeamController {
	
	@Autowired
	private TeamRepository teamRepository;
	@Autowired
	private MatchRepository matchRepository;
	
	public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
		this.teamRepository = teamRepository;
		this.matchRepository = matchRepository;
	}

	public TeamController() {
		super();
		// TODO Auto-generated constructor stub
	}

	@GetMapping("/teams")
	public Iterable<Team> getTeams(){
		return this.teamRepository.findAll();
	}
	
	@GetMapping("/team/{teamName}")
	public Team getTeam(@PathVariable String teamName) {
		Team team =  this.teamRepository.findByTeamName(teamName);
		team.setMatches(this.matchRepository.findLatestMatchesByTeam(teamName, 4));
		
		return team;
		
	}
	
	@GetMapping("/team/{teamName}/matches")
	public List<Match> getTeamMatches(@PathVariable String teamName, @RequestParam int year) {
		LocalDate startDate = LocalDate.of(year, 1, 1);
		LocalDate endDate = LocalDate.of(year+1, 1, 1);
		return this.matchRepository.findMatchesByTeamBetweenDates(
				teamName, 
				startDate, 
				endDate
				);	
	}

}
