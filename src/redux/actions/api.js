export const getCategories = async() => {
    try {
        const response = await fetch("http://localhost:3005/categories");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async(url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}