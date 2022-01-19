package com.EmployeeBackend.EmployeeBackend.manager;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.stereotype.Component;

@Endpoint(id = "custom")
@Component
public class CustomActuatorEndpoint {

	@ReadOperation
	public Map<String, String> customEndpoint(String username) {
		Map<String, String> map = new HashMap<>();
		map.put("Key", "value");
		map.put("name", username);
		return map;
	}
}
