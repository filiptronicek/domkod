let toConvert = $("#content").val();
const input = document.getElementById("content");

const date = new Date();
const month = date.getMonth();

function generate(text) {
    $("#qrcode").html("");
    $("#qrcode").qrcode(text);
}

const updateQR = () => {
    if (toConvert != $("#content").val()) {
        toConvert = $("#content").val();
        generate(toConvert);
    }
    if ($("#content").val() == "") {
        $("#qrcode").html("");
    }
};

if (navigator.clipboard.readText) {
  navigator.clipboard.readText().then(
    clipText => {
      input.value = clipText;
      updateQR();
    });
}

if (month == 11 || month == 0 || month == 1) {
    new Snowflakes({count: 50, maxOpacity: 0.8, maxSize: 20, zIndex: 2});
}
