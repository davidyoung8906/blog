$(function() {
 
    Parse.$ = jQuery;
 
  // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("RWSOYJ0oz7EWjtcN2XBqcR4Sz0bx9BThmTvetlAy", "kslZ780uwY8HQN8M4dkt4xBnjeNVS3ZOuI8RU91b");

    var Blog = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({
    	model: Blog
	});

	// var Blogs = Backbone.Collection.extend({
 //    	model: Blog
	// });
    var blogs = new Blogs();

 	var BlogsView =  Parse.View.extend({
    	template: Handlebars.compile($('#blogs-tpl').html()),
    	render: function(){ 
        	var collection = { blog: this.collection.toJSON() };
        	this.$el.html(this.template(collection));
    	}
	});

    /*Code for parse 1.6.* */
 	// var query = new Parse.Query(Blog);


 	// query.find({
 	// 	success: function(results){
 	// 		for (var i = 0; i < results.length; i++) { 
  //     			var object = results[i];
  //     			console.log(object);
  //   		}
		// },
 	// 	error: function(error){
 	// 		console.log(error);
 	// 	}
 	// });

 	


	blogs.fetch({
    	success: function(blogs) {
    		var blogsView = new BlogsView({ collection: blogs });
    		blogsView.render();
    		$('.main-container').html(blogsView.el);
        	console.log(blogs);
    	},
    	error: function(blogs, error) {
        	console.log(error);
    	}
	});
	// var TestObject = Parse.Object.extend("TestObject");
	// var testObject = new TestObject();
	// testObject.save({foo: "bar"}).then(function(object) {
 //  		alert("yay! it worked");
	// });
 
});