package com.shiva.controller;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
public class MainController {

	@RequestMapping(value = "/getUsers", method = RequestMethod.GET,produces = "application/json")
	public @ResponseBody ArrayList   getUsers()
	{	
		ArrayList al=new ArrayList();
		
		al.add("Shiva");
		al.add("krishna");
		al.add("angular");
		
		return al;

	}
	
	
}
