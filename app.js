$(document).ready(function(){
//the variable to be appended here
	function showPost(index,element){
		var post = '<li class="post">';
		var title = $(element).find('title').text();
		var date = $(element).find('updated').text();
		var date = date.substring(0,9);
		var name = $(element).find('name').text();
		var content = $(element).find('content').html();
		post += '<h2 class="blogTitle">"'+title+'"</h2>';
		post += '<div class="creation">Por: ' + name;
		post += ' - Publicado en: ' + date + '</div>';
		post += '<div class="content content-close">' + content + '</div>';
		post +='</li> <hr>';
		$("#posts").append(post);
	}

	function peticion(url){
		$.ajax({
			type: "GET",
			url: url,
			dataType: "xml",
			success: function(xml) {
				$('#instructions').hide();
				$('#posts').html('');
				$(xml).find('entry').each(showPost);
			},
			error: function() {
			alert("The XML File could not be processed correctly.");
			}
		});		
	}

	$('#posts').on('click','.post',function(){
		$(this).find('.content').toggleClass("content-close");
	});

	$('.loadBlog').on('click','a',function(){
		peticion($(this).data("link"));
	});

});


