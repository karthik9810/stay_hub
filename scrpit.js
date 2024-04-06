document.addEventListener('DOMContentLoaded', function() {
    // Get all prices
    var prices = document.querySelectorAll('.exclusives .price');

    // Add click event listener to each price
    prices.forEach(function(price) {
        price.addEventListener('click', function() {
            // Remove 'active' class from all prices
            prices.forEach(function(otherPrice) {
                otherPrice.classList.remove('active');
            });

            // Add 'active' class to clicked price
            price.classList.add('active');
        });
    });
});
