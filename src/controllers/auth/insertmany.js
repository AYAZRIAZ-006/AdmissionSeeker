import mongoose from "mongoose";
import University from "../../models/UniversitySchema.js";
import Department from "../../models/Department.js";
import sendSuccessResponse from "../../utils/sendSuccessResponse.js";
const insertMany = async (req, res, next) => {
    try {
        const id = "64635597cc0ecbb3d1c657a5";
        const universityId = mongoose.Types.ObjectId(id);
        // University.insertMany([
        //     // {
        //     //     universityName: "NDU",
        //     //     email: "NDU@gmail.com",
        //     //     password: "Ayaz@006",
        //     //     confirmPassword: "Ayaz@006",
        //     //     campusID: "NDU224",
        //     //     city: "islamabad",
        //     //     province: "fedral",
        //     //     sector: "public",
        //     //     website: "https://www.NDUs.edu.pk/"
        //     // },
        //     // {
        //     //     universityName: "NDU",
        //     //     email: "NDU@gmail.com",
        //     //     password: "Ayaz@006",
        //     //     confirmPassword: "Ayaz@006",
        //     //     campusID: "NDU224",
        //     //     city: "islamabad",
        //     //     province: "fedral",
        //     //     sector: "public",
        //     //     website: "https://www.iuu.edu.pk/"
        //     // },
        //     // {
        //     //     universityName: "NDU",
        //     //     email: "NDU@gmail.com",
        //     //     password: "Ayaz@006",
        //     //     confirmPassword: "Ayaz@006",
        //     //     campusID: "NDU224",
        //     //     city: "islamabad",
        //     //     province: "fedral",
        //     //     sector: "public",
        //     //     website: "https://www.iuu.edu.pk/"
        //     // },
        //     {
        //         universityName: "NDU",
        //         email: "NDU@gmail.com",
        //         password: "Ayaz@006",
        //         confirmPassword: "Ayaz@006",
        //         campusID: "NDU224",
        //         city: "islamabad",
        //         province: "fedral",
        //         sector: "public",
        //         website: "https://www.NDU.edu.pk/"
        //     },
        //     {
        //         universityName: "NDU",
        //         email: "ndu@gmail.com",
        //         password: "Ayaz@006",
        //         confirmPassword: "Ayaz@006",
        //         campusID: "ndu224",
        //         city: "islamabad",
        //         province: "fedral",
        //         sector: "public",
        //         website: "https://www.ndu.edu.pk/"
        //     },
        //     {
        //         universityName: "NDU",
        //         email: "NDU@gmail.com",
        //         password: "Ayaz@006",
        //         confirmPassword: "Ayaz@006",
        //         campusID: "NDU224",
        //         city: "islamabad",
        //         province: "fedral",
        //         sector: "public",
        //         website: "https://www.NDU.edu.pk/"
        //     },
        //     {
        //         universityName: "NDU",
        //         email: "NDU@gmail.com",
        //         password: "Ayaz@006",
        //         confirmPassword: "Ayaz@006",
        //         campusID: "NDU224",
        //         city: "islamabad",
        //         province: "fedral",
        //         sector: "public",
        //         website: "https://www.NDU.edu.pk/"
        //     },
        //     {
        //         universityName: "NDU",
        //         email: "NDU@gmail.com",
        //         password: "Ayaz@006",
        //         confirmPassword: "Ayaz@006",
        //         campusID: "NDU224",
        //         city: "islamabad",
        //         province: "fedral",
        //         sector: "private",
        //         website: "https://www.NDU.edu.pk/"
        //     },
        //     {
        //         universityName: "NDU",
        //         email: "NDU@gmail.com",
        //         password: "Ayaz@006",
        //         confirmPassword: "Ayaz@006",
        //         campusID: "NDU224",
        //         city: "islamabad",
        //         province: "fedral",
        //         sector: "private",
        //         website: "https://www.NDUh.edu.pk"
        //     },
        // ]).then(function () {
        //     console.log("Data inserted")  // Success
        // }).catch(function (error) {
        //     console.log(error)      // Failure
        // });
        Department.insertMany(
            [
                {
                  dep_Id: "UOSphdcivil123",
                  dep_Name: "Civil Engineering",
                  deciplineType: ["civil engineering", "Infrastructure Engineering", "Structural Engineering", "Environmental Engineering", "Geotechnical Engineering"],
                  level: "phd",
                  semester: 6,
                  applyMerit: 3.2,
                  isAdmissionOpen: true,
                  openingDate: "2023-04-16",
                  closingDate: "2023-05-20",
                  fee: 95000,
                  universityId,
                },
                {
                  dep_Id: "UOSphdcom123",
                  dep_Name: "computer science",
                  deciplineType: ["computer science", "artificial intelligence", "software engineering", "data science"],
                  level: "bachelor",
                  semester: 8,
                  applyMerit: 63.6,
                  isAdmissionOpen: true,
                  openingDate: "2023-04-16",
                  closingDate: "2023-06-07",
                  fee: 77000,
                  universityId,
                },
                {
                  dep_Id: "UOSenvi657",
                  dep_Name: "BBA",
                  deciplineType: ["business administration", "accounting and finance", "marketing", "entrepreneurship"],
                  level: "bachelor",
                  semester: 8,
                  applyMerit: 51.2,
                  isAdmissionOpen: true,
                  openingDate: "2023-09-25",
                  closingDate: "2023-10-28",
                  fee: 55000,
                  universityId,
                },
                {
                  dep_Id: "UOSenvi789",
                  dep_Name: "Environmental Sciences",
                  deciplineType: ["Atmospheric Sciences", "Biodiversity and Conservation", "Environmental Chemistry", "Environmental Microbiology", "Environmental Planning and Management"],
                  level: "bachelor",
                  semester: 8,
                  applyMerit: 51.1,
                  isAdmissionOpen: true,
                  openingDate: "04-06-2023",
                  closingDate: "31-07-2023",
                  fee:67000,
                universityId,
                },
                {
                    dep_Id: "UOSmenvi789",
                    dep_Name: "Environmental Sciences",
                    deciplineType: ["Atmospheric Sciences", "Biodiversity and Conservation", "Environmental Chemistry", "Environmental Microbiology", "Environmental Planning and Management"],
                    level: "mphil",
                    semester: 4,
                    applyMerit: 3.1,
                    isAdmissionOpen: true,
                    openingDate: "04-06-2023",
                    closingDate: "31-07-2023",
                    fee:67000,
                  universityId,
                  },
                  {
                    dep_Id: "UOSedu456",
                    dep_Name: "Education",
                    deciplineType: ["Elementary Education", "Secondary Education", "Special Education", "Curriculum and Instruction", "Educational Administration"],
                    level: "master",
                    semester: 4,
                    applyMerit: 2.4,
                    isAdmissionOpen: true,
                    openingDate: "04-03-2023",
                    closingDate: "31-03-2023",
                    fee: 89800,
                  universityId,
                  },
                  {
                    dep_Id: "UOSmchem012",
                    dep_Name: "Chemistry",
                    deciplineType: ["Analytical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Biochemistry"],
                    level: "master",
                    semester: 4,
                    applyMerit: 3.42,
                    isAdmissionOpen: true,
                    openingDate: "03-05-2023",
                    closingDate: "05-06-2023",
                    fee: 89000,
                  universityId,
                  },
                  {
                    dep_Id: "UOSmbus567",
                    dep_Name: "Business Administration",
                    deciplineType: ["Accounting", "Finance", "Marketing", "Human Resource Management", "Entrepreneurship"],
                    level: "mphil",
                    semester: 4,
                    applyMerit: 2.4,
                    isAdmissionOpen: true,
                    openingDate: "04-06-2023",
                    closingDate: "02-06-2023",
                    fee: 80000,
                  universityId,
                  },
                  {
                    dep_Id: "UOSphdelec123",
                    dep_Name: "Electrical Engineering",
                    deciplineType: ["Power Engineering", "Control Engineering", "Telecommunication Engineering", "Electronics Engineering"],
                    level: "master",
                    semester: 4,
                    applyMerit: 3.4,
                    isAdmissionOpen: true,
                    openingDate: "2023-05-01",
                    closingDate: "2023-06-20",
                    fee: 89000,
                    universityId: universityId,
                  },
                  {
                    dep_Id: "UOScs321",
                    dep_Name: "computer science",
                    deciplineType: ["Artificial Intelligence", "Data Science", "Software Engineering", "Computer Networks"],
                    level: "bachelor",
                    semester: 8,
                    applyMerit: 57.8,
                    isAdmissionOpen: true,
                    openingDate: "2023-07-01",
                    closingDate: "2023-08-30",
                    fee: 75000,
                    universityId: universityId,
                  },
                  {
                    dep_Id: "UOSphdmech231",
                    dep_Name: "Mechanical Engineering",
                    deciplineType: ["Thermodynamics", "Mechatronics", "Robotics", "Automobile Engineering"],
                    level: "mphil",
                    semester: 4,
                    applyMerit:3.59,
                    isAdmissionOpen: true,
                    openingDate: "2023-09-06",
                    closingDate: "2023-10-29",
                    fee: 55000,
                    universityId: universityId,
                  },
                  {
                    dep_Id: "UOSMcivil123",
                    dep_Name: "Civil Engineering",
                    deciplineType: ["Civil Engineering", "Infrastructure Engineering", "Structural Engineering", "Environmental Engineering", "Geotechnical Engineering"],
                    level: "master",
                    semester: 4,
                    applyMerit: 3.1,
                    isAdmissionOpen: true,
                    openingDate: "2023-04-15",
                    closingDate: "2023-05-08",
                    fee: 30000,
                    universityId: universityId,
                  },                  
              ]
                          
        ).then(function () {
            console.log("Data inserted")  // Success
        }).catch(function (error) {
            console.log(error)      // Failure
        });
        return sendSuccessResponse(res, 201, true, "University registered successfully. ", null, );
    } catch (err) {
        console.log(err)
        next(err)
    }
}

export default insertMany;
