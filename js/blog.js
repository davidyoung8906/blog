$(function() {
 
    Parse.$ = jQuery;
 
  // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("RWSOYJ0oz7EWjtcN2XBqcR4Sz0bx9BThmTvetlAy", "kslZ780uwY8HQN8M4dkt4xBnjeNVS3ZOuI8RU91b");


	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
  		alert("yay! it worked");
	});
 
});