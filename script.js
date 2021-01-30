// setting default value
defaultValue("first");
defaultValue("economy");

function defaultValue(ticket) {
    document.getElementById(ticket + "-count").defaultValue = "0";
}


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
        document.getElementById('show-first-amount').innerText = " $" + ticketNewCount * 150;
    }
    if (ticket == 'economy') {
        ticketTotal = ticketCount * 100;
        document.getElementById('show-economy-number').innerText = ticketNewCount;
        document.getElementById('show-economy-amount').innerText = " $" + ticketNewCount * 100;
    }

    calculateTotal();
}

//calculate subtotal , tax , finaltotal
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


//click on book now
function handleClickBookNow() {
    const finalTotal = document.getElementById('final-total');
    grandTotal = finalTotal.innerText;
    if (grandTotal === '00') {
        alert("You have not select any ticket");
    } 
    else {
        bookNow = document.getElementById('book-now');
        bookNow.innerText = "Booking Confirmed";
        bookNow.style.backgroundColor = "green";
        displayNone("first-count");
        displayNone("economy-count");
        displayNone("operator");
        displayNone("operator-2");
        displayBlock("show-first");
        displayBlock("show-economy");
        disableInput();
    }
}

function displayNone(id) {
    document.getElementById(id).style.display = "none";
}

function displayBlock(id) {
    document.getElementById(id).style.display = "block";
}

function disableInput() {
    let disableInput = document.getElementsByTagName("input");
    for (let i = 0; i < disableInput.length; i++) {
        const element = disableInput[i];
        element.disabled = true;
    }
}