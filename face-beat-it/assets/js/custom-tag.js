var customTag = function(tag, widgetTitle){

	$.get(ghost.url.api('posts', {include:'tags'})).done(function(data){
		var allTaggedPosts = [];
		$('#custom-tag-header_fbi').html(widgetTitle);

		for(var i = 0; i < data.posts.length; i++){
			var tagArray = data.posts[i].tags
			for(var x = 0; x < tagArray.length; x++){
				if(tagArray[x].name == tag){
					allTaggedPosts.push(data.posts[i]);
				}
			}
		}

		for(var y = 0; y < allTaggedPosts.length; y++){
			if(y % 2 == 0){
				$("#custom-tag-list_fbi").append('<li class="custom-tag-list-item-even_fbi"><h5 class="custom-tag-title_fbi" itemprop="headline"><a href="/' + allTaggedPosts[y].slug +'" rel="bookmark">' + allTaggedPosts[y].title + '</a></h5></li>');
			} else {
				$("#custom-tag-list_fbi").append('<li class="custom-tag-list-item-odd_fbi"><h5 class="custom-tag-title_fbi" itemprop="headline"><a href="/' + allTaggedPosts[y].slug +'" rel="bookmark">' + allTaggedPosts[y].title + '</a></h5></li>');
			}
		}
	}).fail(function(err){
		console.log(err);
	});
};
