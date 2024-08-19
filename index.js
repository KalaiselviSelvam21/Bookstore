function mycart(){
    window.open("cart.html");
}

function Homepage(){
    location.href ="index.html";
}
function Books(){
    const element = document.getElementById("title");
    element.scrollIntoView({ behavior: "smooth"});
}
function contact(){
    const element = document.getElementById("contactus");
    element.scrollIntoView({ behavior: "smooth"});
}

function shopallbooks(){
    location.href = "books.html";
}

//Adding items to the cart and storing them in local storage
