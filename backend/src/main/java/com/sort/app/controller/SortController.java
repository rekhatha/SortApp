package com.sort.app.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sort.app.service.SortService;

@RestController
@CrossOrigin("http://localhost:3000")
@ComponentScan({"com.sort"})
public class SortController {

	private SortService sortService;

    @Autowired
    public SortController(SortService sortService) {

        this.sortService = sortService;
    }
	 @RequestMapping(value="/sortToAscending",method = RequestMethod.GET)
	    public HashMap<String, Object> sortToAscending(@RequestParam (value = "numbers") final String[] numbers) {
		 System.out.println(numbers);
		 int[] numbArray = Arrays.stream(numbers).mapToInt(Integer::parseInt).toArray();
		 HashMap<String, Object> resultMap = new HashMap<>();
		 int[] outputArray = null;
		 if(numbers.length != 0){
				long total = 0;
			    long start = System.nanoTime();
			    outputArray = sortService.ascendingSort(numbArray);
			 
			  	long end = System.nanoTime();
				long time = TimeUnit.MILLISECONDS.convert(end - start, TimeUnit.NANOSECONDS);
			     total = total + time;
			      Long avgTime = total/10;
			       resultMap.put("resultArray", outputArray);
			       resultMap.put("timeConsumned", avgTime);
		 }
		return resultMap;
	    }
	
}
