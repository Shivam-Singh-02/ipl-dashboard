package com.shivam.repository;

import org.springframework.data.repository.CrudRepository;

import com.shivam.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long>  {
	
	Team findByTeamName(String teamName);

}
