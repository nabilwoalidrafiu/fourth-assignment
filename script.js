document.getElementById("first-count").defaultValue = "0";
document.getElementById("economy-count").defaultValue = "0";


// click on operator
function handleTicketChange(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

    let ticketTotal = 0;
    if (ticket == 'first') {
        ticketTotal = ticketCount * 150;
        document.getElementById('show-first-number').innerText = ticketNewCount;
        document.getElementById('show-first-amount').innerText = "$" + ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotal = ticketCount * 100;
        document.getElementById('show-economy-number').innerText = ticketNewCount;
        document.getElementById('show-economy-amount').innerText = "$" + ticketNewCount * 100;
    }

    calculateTotal();
}


function calculateTotal() {
    const firstCount = getInputValue('first');
    const economyCount = getInputValue('economy');

    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = totalPrice;

    const tax = totalPrice * 0.1;
    document.getElementById('tax-amount').innerText = tax;

    const finalTotal = totalPrice + tax;
    document.getElementById('final-total').innerText = finalTotal
}

function getInputValue(ticket) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


// Click on Book Now
document.getElementById('book-now').addEventListener('click', function () {
    bookNow = document.getElementById('book-now');
    bookNow.innerText = "Booking Confirmed";
    bookNow.style.backgroundColor = "green";
    const hideFirst = document.getElementById('first-count')
    hideFirst.style.display = "none";
    const hideEconomy = document.getElementById('economy-count');
    hideEconomy.style.display = "none";


    const showFirst = document.getElementById('show-first');
    showFirst.style.display = "block";
    const showEconomy = document.getElementById('show-economy');
    showEconomy.style.display = "block";
    document.getElementById("operator").style.display = "none";
    document.getElementById("operator-2").style.display = "none";

})
