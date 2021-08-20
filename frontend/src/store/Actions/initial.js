export const FETCH_DATA = "FETCH_DATA";
export const FILTER = "FILTER";
export const SEARCH_VALUE_CHANGE = "SEARCH_VALUE_CHANGE"
export const RESET_SEARCH = "RESET_SEARCH"
export const RESET_TAG = "RESET_TAG"
export const FILTER_TAG = 'FILTER_TAG'

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

export const filter = (products, keyWord) => {
    const filteredList = products.filter((item) => {
        return item.name.includes(keyWord);
    });
    return { type: FILTER, data: filteredList };
};

export const searchValueChange = (input) => {
    return { type: SEARCH_VALUE_CHANGE, data: input };
}

export const resetSearch = () => {
    return { type: RESET_SEARCH };
}

export const resetTag = () => {
    return { type: RESET_TAG };
}

export const filterTag = (products, tagValue, choice) => {
    tagValue = [ ...tagValue, choice];
    let newList = []
    tagValue.map((tag) => {
        const temp = products.filter((product) => {
            return product.tag === tag;
        });
        newList = [...newList , ...temp ]
    })
    
    return { type: FILTER_TAG, choice: tagValue, data: newList};
}