package com.sort.app.service;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
@Service
@ComponentScan({"com.hmsort"})
public class SortService {

	public int[] ascendingSort(int[] randomArray) {
		
		int swap;
		  for(int i=0;i<randomArray.length-1;i++){
		   for(int j=0;j<randomArray.length-1-i;j++){
		    if(randomArray[j]>randomArray[j+1]){
		     swap=randomArray[j];
		     randomArray[j]=randomArray[j+1];
		     randomArray[j+1]=swap;
		    }
		   } 
		  }
		   return randomArray;
	}
		

}
