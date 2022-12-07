export const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
};
export const getTotalPriceFromLS = () => {
    const data = localStorage.getItem('totalPrice');
    return data ? +data : 0;
};
