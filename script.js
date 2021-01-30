document.getElementById("first-count").defaultValue = "0";
document.getElementById("economy-count").defaultValue = "0";

function name(params) {

}

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
    }
    if (ticket == 'economy') {
        ticketTotal = ticketCount * 100;
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


document.getElementById('book-now').addEventListener('click', function () {
        document.getElementById('first-increase').style.pointerEvents = 'none';
        document.getElementById('first-decrease').style.pointerEvents = 'none';
        document.getElementById('economy-increase').style.pointerEvents = 'none';
        document.getElementById('economy-decrease').style.pointerEvents = 'none';

        // document.getElementsByTagName('span').style.pointerEvents = 'none';
        firstInput=document.getElementById("first-count").disabled = true;
        firstInput.disabled = true;
        economyInput = document.getElementById('economy-count');
        economyInput.disabled = true;
        // economyInput.innerText = "1 ticket $100"

        input = document.getElementsByClassName("inp-style")
        input.disabled = true;
        bookNow = document.getElementById('book-now');
        bookNow.innerText = "Booking Confirmed";
        bookNow.style.backgroundColor = "green";
        
    
})

