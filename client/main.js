import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Data} from '../lib/collections';
import './main.html';

Meteor.subscribe("data");




Template.search.helpers({
	list:function(){
		if(Meteor.user()){
		var lst=Data.find({});
		return lst;}
		else
			return;
	}
	
});


Template.details.events({
  'submit .myform'(event) {
    // Prevent default browser form submit
      //event.preventDefault();
    
      // Get value from form element
      const target = event.target;
      const name = target.name.value;
	  const mobile = target.mobile.value;
	  const pincode = target.pincode.value;
	  const gender = target.gender.value;
		
		
		if(Meteor.user()){
      // Insert a task into the collection
      Data.insert({"name":name,"mobile":mobile,"pincode":pincode,"gender":gender});
		}
		else{
			alert("Login Please");
		}
  }
});
