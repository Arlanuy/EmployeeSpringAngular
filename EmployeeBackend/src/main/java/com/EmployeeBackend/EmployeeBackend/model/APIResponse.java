package com.EmployeeBackend.EmployeeBackend.model;

public class APIResponse {
	private String message;
	public APIResponse(String message, boolean success) {
		this.message = message;
		this.success = success;
	}
	private boolean success;
	
	
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	
}
