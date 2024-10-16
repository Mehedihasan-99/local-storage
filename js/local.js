console.log("hello")


const addProduct = () => {
    const productfiled  = document.getElementById('product-name');
    const product = productfiled.value;
    const quantityfiled  = document.getElementById('product-quantity');
    const quantity = quantityfiled.value;
    productfiled.value = '';
    quantityfiled.value = '';
    console.log(product, quantity);
    displayProduct(product, quantity)
    saveProductToLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) => {
    const container = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    container.appendChild(li);
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const displayProductFormLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    for(const product in saveCart){
        const quantity = saveCart[product]
        // console.log(product, quantity);
        displayProduct(product, quantity)
    }
}

displayProductFormLocalStorage()