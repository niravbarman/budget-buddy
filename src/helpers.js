//Local Storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const deleteItem = ({key}) => {
    localStorage.removeItem(key);
}