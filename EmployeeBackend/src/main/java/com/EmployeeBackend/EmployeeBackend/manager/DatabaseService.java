package com.EmployeeBackend.EmployeeBackend.manager;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class DatabaseService implements HealthIndicator{
	private final String databaseService= "DatabaseService";
	private final String testService= "TestService";
	
	@Override
	public Health health() {
		if (isDatabaseHealthy() ) {
			return Health.up().withDetails(Stream.of(new String[][]{{databaseService,  "Service is running"}, {testService, "test is running"}}).collect(Collectors.toMap(p -> p[0], p->p[1]))).build();
		}
		return Health.down().withDetail(databaseService,  "Service is not running").build();
	}
	
	private boolean isDatabaseHealthy() {
		return true;
	}
}
