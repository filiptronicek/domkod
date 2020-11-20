var toConvert = $("#content").val();
function generate(text) {

    $("#qrcode").html("");
    $("#qrcode").qrcode(text);
}

setInterval(() => {
    if (toConvert != $("#content").val()) {
        toConvert = $("#content").val();
        generate(toConvert);
    }
    if ($("#content").val() == "") {
        $("#qrcode").html("");

    }

}, 10);
var date = new Date();
var month = date.getMonth();
if (month == 11 || month == 0 || month == 1) {
    var sf = new Snowflakes({count: 50, maxOpacity: 0.8, maxSize: 20, zIndex: 2});
}
