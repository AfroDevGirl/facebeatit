var featuredAuthor = function(authorEmail){
	$.get(ghost.url.api('users/email/'+ authorEmail)).done(function (data){
		var userName = data.users[0].name;
		var userImage = data.users[0].image;
		var userSlug = data.users[0].slug;
		var userBio = data.users[0].bio;

		$("#featured-author-name").text(userName);
		$("#featured-author-bio").text(userBio);
		$("#featured-author-image").attr("src", userImage);
		$("#featured-author-link").attr("href", "/author/" + userSlug);
	}).fail(function (err){
		console.log(err);
	});
};