const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const DataModel = require("../models/dataModel");

//saving data in mongoDb
exports.addData = catchAsyncErrors(async (req, res, next) => {
  const jsonData = req.body; // Assuming JSON data is sent in the request body
  // Insert data into MongoDB
  const result = await DataModel.create(jsonData);
  res
    .status(201)
    .json({ sucess: true, message: "Data added successfully", result });
});



//getting data
exports.getData = catchAsyncErrors(async (req, res, next) => {
  const data = await DataModel.find({}).limit(30);
  res.status(200).json({
    sucess: true,
    message: "Data Fetched successfully",
    data,
  });
});
