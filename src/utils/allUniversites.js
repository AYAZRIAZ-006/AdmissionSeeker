import University from "../models/UniversitySchema.js";
// import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
import sendSuccessResponse from "./sendSuccessResponse.js";


const allUniversities = async (req, res) => {
    try {
        const universities = await University.find({}).select("universityName email city sector website");
        console.log(universities)
        // if(!universities) throw new ApiError("error",404, "No data found", true);
        if(universities.length < 1) {
            const universities = [{
                email: 'no data found',
                city:" no data found",
                sector: "no data found",
                    universityName: "No date found",
                    website:"https://www.google.com/",
              }]
        return sendSuccessResponse(res, 200, true, "No universities. ", null, universities);
        }
        return sendSuccessResponse(res, 200, true, "Your universities. ", null, universities);

    } catch (error) {
        res.status(404).json(error);
    }
};

export default allUniversities;