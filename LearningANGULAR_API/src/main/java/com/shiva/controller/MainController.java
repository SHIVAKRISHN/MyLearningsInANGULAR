package com.shiva.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shiva.model.User;



@Controller
@RequestMapping("/api")
public class MainController {

	@Autowired
	public HttpSession htpSession;
	
	String localString=null;
	
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
	public @ResponseBody Map<String, String> validate(@RequestBody User use,HttpServletRequest req)
	{
		// JSONObject jsonObject = JSONObject.fromObject(json);
     	        //String m = jsonObject.get("message").toString();
		
		System.out.println("username is "+ use.getUsername());
		
		setLoginStatusValue("login");
		//return Collections.singletonMap("response", "Valid User");
		
		if(use.getUsername().equals("admin") && use.getPassword().equals("admin"))
		{
			htpSession.setAttribute("LoginSession", "login");
			//htpSession.setMaxInactiveInterval(60);
			
			
			
			return Collections.singletonMap("response", "Valid User");
			
			
		}
		else
		{
			return Collections.singletonMap("response", "Unauthorized");
		}
		
	}
	
	   @RequestMapping(value="/authCheck",method = RequestMethod.GET)
	public @ResponseBody Map<String,String> validtyUser(HttpServletRequest reqq)
	{
		   
		//if(htpSession.getAttribute("LoginSession").equals("login"))
		  // if(localString.equals("login"))
		  if("login" == "login")
		   {
			return Collections.singletonMap("response", "Authorized");
		}
		else
		{
			return Collections.singletonMap("response", "Unauthorized");
		}
		
	}
	   
	   public void setLoginStatusValue(String loginValue)
		{
			
		   localString=loginValue;
		}
	
	
	
}
