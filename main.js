


$(function(){

var $orders = $('#orders');
var $orders1 = $('#orders1');
var $orders2 = $('#orders2');
var $orders3 = $('#orders3');
var $orders4 = $('#orders4');
var $orders5 = $('#orders5');
var $orders6 = $('#orders6');
var $orders7 = $('#orders7');

$.ajax({

	type: 'GET',
	url: 'https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths',
	success: function(orders){


		console.log(orders);
console.log(orders.paths[0]);
console.log(orders.quote_max);
console.log(orders.paths[0].id);
console.log(orders.paths[0].name);
console.log(orders.paths[0].image);
console.log(orders.paths[0].tags);
console.log(orders.paths[0].learner);
console.log(orders.paths[0].hours);
console.log(orders.paths[0].description);
console.log(orders.paths[0].sign_up);

$orders2.append('<li>' +  orders.paths[0].description + '</li>');
$orders1.append('<img  src="' +orders.paths[0].image+'">');
$orders3.append( ' ' +orders.paths[0].learner + "  " +"Learners" );
$orders4.append( ' ' +orders.paths[0].hours + " " +"Hours" );
$orders5.append('<h4>'+ '<bold>'+orders.paths[0].name+'</bold>'+'</h4>'  );
$orders6.append( orders.paths[0].tags   );
$orders7.append(  '<center><a href="'+orders.paths[0].sign_up+'"' + ' class="btn btn-info btn-lg" target="_blank"   role="button" >' + '<span class="glyphicon glyphicon-paperclip"></span>' +" View Curriculum"+'</a> </center'  );


for (var i=0; i<orders.paths.length; i++) {
 console.log(orders.paths[i].name);

 $orders.append('<center><h3><b><u> ' +  orders.paths[i].name + '</u></b></h3>' +  ' </br><img  src="' +orders.paths[i].image+'">'+'<p>'+ orders.paths[i].description+'</p>'  +' </center> <hr>');

}

            
		

			 
		}
	});
});


