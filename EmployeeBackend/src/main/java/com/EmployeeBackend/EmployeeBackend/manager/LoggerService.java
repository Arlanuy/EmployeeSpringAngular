package com.EmployeeBackend.EmployeeBackend.manager;

import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class LoggerService implements HealthIndicator{
	private final String loggerService= "LoggerService";
	
	@Override
	public Health health() {
		if (isLoggerServiceHealthy() ) {
			return Health.up().withDetail(loggerService,  "Service is running").build();
		}
		return Health.down().withDetail(loggerService,  "Service is not running").build();
	}
	
	private boolean isLoggerServiceHealthy() {
		return false;
	}
}
