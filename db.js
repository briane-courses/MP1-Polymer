<html>
	<head>
		<link rel="stylesheet" href="style.css">
        <!-- IMPORT JQUERY HERE -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" type="text/javascript"></script>
		<!-- END -->
		
		<!-- WRITE YOUR OWN SCRIPT HERE FOR THE AJAX REQUEST -->
		<script>
			$(document).ready(function() {
				$("#loadButton").click(function() {
                    var root = 'https://jsonplaceholder.typicode.com';
					var inputid = $("#idField").val();
					$.ajax({
//						url: root + '/photos?id=' + inputid,
                        url: root + '/photos/',
						data: {
							albumId: inputid
						},
						type: "GET",
                        dataType: "json",
						success: function(data) {
							if (data.Response == "False") {
								$("#title").html("<p>NOT A VALID PHOTO.</p>");
								$("#poster").attr("src", "");
							}
							else {
								$("#title").html("<p>" + data[1].title + "</p>");
                                $("#poster").attr("src", data[1].thumbnailUrl);
                                console.log(data);
							}
						}
					});
//                        .done(function (data) {
//                            $("#plot").html("<p>" + data[0].title + "</p>");
//                            $("#poster").attr("src", data[0].thumbnailUrl);
//                            console.log(data);
//                            $("#plot").empty();
//                            $.each(data, function (i) {
//                                $("#plot").append("<p>" + this.title + "</p>");
//                            })
//                        })
//                        .fail(function( xhr, status, errorThrown ) {
//                            alert( "Sorry, there was a problem!" );
//                            console.log( "Error: " + errorThrown );
//                            console.log( "Status: " + status );
//                            console.dir( xhr );
//                        });
				});
			});
		</script>
        
	</head>
	<body>
		<div id="content">
			<h1>Sample AJAX App</h1>
			<label>Enter user ID:</label>
			<input id="idField" type="text">
			<button id="loadButton">LOAD</button>
			<div id="wrapper">
				<div id="mainDiv">
					<h4>Title</h4>
					<div id="title">
						No title to show.
					</div>
				</div>
				<div id="secondDiv">
						<h4>Photo</h4>
						<img id="poster" alt="No photo loaded yet">
				</div>
			</div>
		</div>
		<!-- END -->
	</body>
</html>