function openWhatsApp() {
    // Replace "+123456789" with your WhatsApp number including the country code
    var whatsappNumber = "+916203629464";
    
    // Check if the user is using a mobile device or a desktop
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // If the user is on a mobile device, open WhatsApp directly
        window.location.href = "whatsapp://send?phone=" + whatsappNumber;
    } else {
        // If the user is on a desktop, open WhatsApp Web
        window.location.href = "https://web.whatsapp.com/send?phone=" + whatsappNumber;
    }
}
