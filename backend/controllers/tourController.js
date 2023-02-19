import Tour from "../models/Tour.js";

// creacion de nuevos tours
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res
      .status(200)
      .json({ success: true, message: "Succesfuly created", data: savedTour });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to create  " });
  }
};

// actualizar tours

export const updateTour = async (req, res) => {
  const id = req.params.id
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new:true })

    res.status(200).json({
        success: true,
        message: "Succesfuly updated",
        data: updatedTour,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to updated" });
  }
};
// get single
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTour = await Tour.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Succesfuly deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};

// get all tour
export const getAllTour = async (req, res) => {
  try {
  } catch (err) {}
};
