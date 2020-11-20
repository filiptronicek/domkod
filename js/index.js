let toConvert = $("#content").val();

const date = new Date();
const month = date.getMonth();

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

if (month == 11 || month == 0 || month == 1) {
    new Snowflakes({count: 50, maxOpacity: 0.8, maxSize: 20, zIndex: 2});
}
