function trimAndLowerCase(array) {
    const updateArray = array.map(element => {
        return element.trim().toLowerCase();
    });
    return updateArray;
};
export default trimAndLowerCase;