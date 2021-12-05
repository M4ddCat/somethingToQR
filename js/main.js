$(function(){
    let checkValToQR;
    setInterval(() => {
        let valueToQR = ($('.converter').val());
        if  (valueToQR.length >= 1) {
            if (checkValToQR != valueToQR) {
                $(".qrcode").html("");
                $('.qrcode').css('margin-top', '20px').qrcode({width: 200, height: 200, text: valueToQR}).slideDown();
            }
        }
        else {
            $(".qrcode").slideUp();
        }
    });
});
