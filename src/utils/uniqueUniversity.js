import University from "../models/UniversitySchema.js";

const unique = (university, matchWith) => {
    const errors = { email: "", campusID: "" };
    if (university.length <= 0) return true;
    university.forEach((university) => {
        if (university.email === matchWith.email) {
            errors.email = "Email already exists";
        }
        if (university.campusID === matchWith.campusID) {
            errors.campusID = "campusID already exists";
        }
        if (university.universityID === matchWith.universityID) {
            errors.universityID = "universityID already exists";
        }
        return false;
    });
    return errors;
};

export default unique;