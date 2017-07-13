$("#firstTable tr").click(function() {
   alert($(this).attr('id'));
   $("#tbodySecond tr").remove();
});

$("#secondTable tr").click(function() {
   alert($(this).attr('id'));
   $("#tbodyThird tr").remove();
});

$(document).ready(function(){
    $('#firstTable').DataTable();
});

$(document).ready(function(){
    $('#secondTable').DataTable();
});

$(document).ready(function(){
    $('#thirdTable').DataTable();
});

$(document).ready(function(){
    $('#datatables').DataTable();
});