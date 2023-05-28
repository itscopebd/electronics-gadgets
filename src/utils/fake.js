// save data localStorage 
const addToBD = (id) => {

    let shoppingCart = {};
    const storedData = localStorage.getItem("cartData");
    if (storedData) {
        shoppingCart = JSON.parse(storedData)
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem("cartData", JSON.stringify(shoppingCart))
}



const getSavedData = () => {
    const saveData = localStorage.getItem("cartData");
    if (saveData) {
        const convertString = JSON.parse(saveData);
        return convertString;

    }
}

const getCartData = async () => {
    const cart = [];
    const getCart = getSavedData();
    const products = await fetch("products.json");
    const pData =  await products.json();

    for (const id in getCart) {
        const foundProduct = pData.find(product => product.id === id)
        if (foundProduct) {
            foundProduct.quantity = getCart[id];
            cart.push(foundProduct)
        }
    }
    console.log(cart)
    return {cart};
}

const removeSpecificCart=id=>{
    

    const storedCart=localStorage.getItem("cartData");
    if(storedCart){
       const shoppingCart=JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem("cartData", JSON.stringify(shoppingCart))
        }
    }
}

export { addToBD, getSavedData, getCartData,removeSpecificCart }