import { Meteor } from 'meteor/meteor';
//import '../lib/collections.js';
import {Data} from '../lib/collections';
Meteor.startup(() => {
  // code to run on server at startup

});

Meteor.publish("data",function()
	{
	return Data.find({});
	}
)