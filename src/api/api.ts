import axios from "axios"
export const URL = "http://localhost:4000"


// Fetch all products
export const fetchProducts = async () => {
    try {
        const { data } = await axios.get(`${URL}/products`);
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }
}

// Fetch product details
export const fetchProductDetails = async (id: number) => {
    try {
        const { data } = await axios.get(`${URL}/products/${id}`);
        console.log(data);

        return data;

    } catch (error) {
        console.log(error);
    }
}


