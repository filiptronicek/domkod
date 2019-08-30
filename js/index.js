function generate() {
  console.log($("#content").val())
  console.log("YAY");
  $("#qrcode").html("");
  $("#qrcode").qrcode($("#content").val());
}
$("html").keydown(function(){
  generate()
})