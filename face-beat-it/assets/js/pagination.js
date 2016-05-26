$(document).ready(function(){
	var totalPages = $("#page-total").text();
	var currentPage = $("#page-current").text();
	var lowestPageNum = 1;
	var maxPageNum = 5;


	if (totalPages > 5) {
		$("#prev-pages").css("display:inline-block;");
		basicPagination(lowestPageNum, maxPageNum);
		$("#next-pages").css("display:inline-block;");
		$("#next-pages").on("click", function(){
			if(maxPageNum < totalPages - 5) {
				lowestPageNum += 5;
				maxPageNum += 5;
			} else {
				lowestPageNum = maxPageNum + 1;
				maxPageNum = totalPages;
			}

			$("#pagination-list").empty();
			basicPagination(lowestPageNum, maxPageNum);
		});

		$("#prev-pages").on("click", function(){
			if(lowestPageNum > 6) {
				lowestPageNum = lowestPageNum - 5;
				maxPageNum = maxPageNum - 5;
			}
			
			$("#pagination-list").empty();
			basicPagination(lowestPageNum, maxPageNum);
		});
	} else {
		basicPagination(1,totalPages);
	}


	function basicPagination(lowestPageNum, maxPageNum){
		if(lowestPageNum == maxPageNum){
			$("#pagination-list").append("<a href='#' class='pagination-link-current_fbi'>" + lowestPageNum + "</a>");
		} else {
			for(var i = lowestPageNum; i <= maxPageNum; lowestPageNum++){
				if(i == currentPage){
					$("#pagination-list").append("<a href='#' class='pagination-link-current_fbi'>" + i + "</a>");
				} else{
					$("#pagination-list").append("<a href='/page/" + i + "/' class='pagination-link_fbi'>" + i + "</a>");
				}
			}
		}
	};
});