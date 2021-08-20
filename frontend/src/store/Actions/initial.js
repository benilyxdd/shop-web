export const FETCH_DATA = "FETCH_DATA";
export const FILTER = "FILTER";

export const fetchData = () => {
    return async (dispatch) => {
        const response = await fetch("https://fakestoreapi.com/products");
        const responseData = await response.json();
        const products = await responseData.map((product) => {
            const item = {
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image,
            };
            return item;
        });
        dispatch({ type: FETCH_DATA, data: products });
    };
};

export const FilteredProducts = (products, keyWord) => {
    const filteredList = products.filter((items) => {
        return items.name.included(keyWord);
    });
    return { type: FILTER, data: filteredList };
};
