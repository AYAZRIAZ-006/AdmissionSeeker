
const uniqueDepartment = (departments, matchWith) => {
    const errors = { dep_Id: "" };
    if (departments.length <= 0) return true;
    departments.forEach((dep) => {
        if (dep.dep_Id === matchWith.dep_Id) {
            errors.dep_Id = "dep_Id already exists";
        }
        // if (dep.dep_Name === matchWith.dep_Name) {
        //     errors.dep_Name = "dep_Name already exists";
        // }
        return false;
    });
    return errors;
};

export default uniqueDepartment;