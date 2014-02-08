function submitAddress(){
  $("#submitButton").hide();
  $("#submitButtonLoading").show();
  var name = $("#full-name").val();
  var address_line1 = $("#address-line1").val();
  var address_line2 = $("#address-line2").val();
  var city = $("#city").val();
  var region = $("#region").val();
  var postal_code = $("#postal-code").val();
  var country = $("#country").val();
  var length = $("#length").val();
  var width = $("#width").val();
  var height = $("#height").val();
  var weight = $("#weight").val();
  $.post('/submit',
    {
      name:name,
      address_line1:address_line1,
      address_line2:address_line2,
      city:city,
      region:region,
      postal_code:postal_code,
      country:country,
      length:length,
      width:width,
      height:height,
      weight:weight
    },
    function(data){
      if(data['status'] == 'error'){
        $("#status").addClass('alert-danger');
        $("#status").removeClass('alert-success');
        $("#status").html(data['message']);
      }else if(data['status'] == 'success'){
        $("#status").addClass('alert-success');
        $("#status").removeClass('alert-danger');
        text = 'New label created.  ';
        text = 'Tracking Code: '+data['message']['tracking_code']+' ';
        text += '<a href="'+data['label_url']+'">Get Label</a>';
        $("#status").html(text);
      }
      $("#status").show('slow');
    },
    'json'
  );
  return false;
}
