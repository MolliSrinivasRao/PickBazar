export function Addtocart(cartArg,product){

    const cart = {...cartArg}
    let price = product.price;
    if(product.discount) price -= product.discount;
    if (cart.products.length) {
        const productIndex = cart.products.findIndex(e => e.id == product.id);
        if (productIndex == -1) {
            cart.products.push({
                ...product,
                productQty: 1
            });
            cart.totalPrice +=  product.price
        }
        else {
            cart.products[productIndex] = {
                ...cart.products[productIndex],
                productQty : cart.products[productIndex].productQty + 1
            }
            cart.totalPrice += product.price
        }
    }
    else {
        cart.products.push({
            ...product,
            productQty: 1
        });
        cart.totalPrice += product.price
    };
  return cart;
}

export const deleteCart = () => {
    return {
        products : [],
        totalPrice: 0,
    }
}

export const deleteProduct = (cartArg,product) =>{
    const cart = {...cartArg};
    let price = product.price;
    if(product.discount)price -= product.discount;
    cart.products = cart.products.filter((e)=> e.id!==product.id);
    cart.totalPrice -= price * product.productQty;
    return cart; 
}


export const removefromCart = (cartArg,product) =>{
    const cart = {...cartArg};
    let price = product.price;
    if(product.discount)price -= product.discount;
    if(price == 0){
        return deleteCart();
    }
    if(cart?.products?.length){
        const productIndex = cart.products.findIndex(e => e.id == product.id);
        if (productIndex!== -1) {
            if(cart?. products[productIndex].productQty == 1){

            }
            else{
                cart.products[productIndex].productQty -= 1;
                cart.price -= product.price
        
            }
            
        }
       
    }
   
    return cart;
   }