package com.shiva.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shiva.model.User;



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
	
	@RequestMapping(value="/loginCheck",method = RequestMethod.POST,produces = "application/json")
	public @ResponseBody Map<String, String> validate(@RequestBody User use)
	{
		// JSONObject jsonObject = JSONObject.fromObject(json);
     	        //String m = jsonObject.get("message").toString();
		
		System.out.println("username is "+ use.getUsername());
		
		
		//return Collections.singletonMap("response", "Valid User");
		
		if(use.getUsername().equals("admin") && use.getPassword().equals("admin"))
		{
			return Collections.singletonMap("response", "Valid User");
		}
		else
		{
			return Collections.singletonMap("response", "Unauthorized");
		}
	}
	
	
}
