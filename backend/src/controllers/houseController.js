const prisma = require("../utils/prisma");

const createHouse = async (req, res) => {
  try {
    const {
      title,
      rent,
      location,
      university,
      ownerName,
      ownerPhone,
      description,
      availableFrom,
    } = req.body;

    if (
      !title ||
      !rent ||
      !location ||
      !university ||
      !ownerName ||
      !ownerPhone ||
      !description
    ) {
      return res.status(400).json({
        message: "All required fields must be provided",
      });
    }

    const house = await prisma.house.create({
      data: {
        title,
        rent: Number(rent),
        location,
        university,
        ownerName,
        ownerPhone,
        description,
        availableFrom: availableFrom ? new Date(availableFrom) : null,
        postedById: req.user.id,
      },
    });

    return res.status(201).json({
      message: "House created successfully",
      house,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create house",
      error: error.message,
    });
  }
};

const getAllHouses = async (req, res) => {
  try {
    const { university, location, minRent, maxRent } = req.query;

    const filters = {};

    if (university) {
      filters.university = {
        contains: university,
      };
    }

    if (location) {
      filters.location = {
        contains: location,
      };
    }

    if (minRent || maxRent) {
      filters.rent = {};

      if (minRent) {
        filters.rent.gte = Number(minRent);
      }

      if (maxRent) {
        filters.rent.lte = Number(maxRent);
      }
    }

    const houses = await prisma.house.findMany({
      where: filters,
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      message: "Houses fetched successfully",
      count: houses.length,
      houses,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch houses",
      error: error.message,
    });
  }
};

const getSingleHouse = async (req, res) => {
  try {
    const { id } = req.params;

    const house = await prisma.house.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!house) {
      return res.status(404).json({
        message: "House not found",
      });
    }

    return res.status(200).json({
      message: "House fetched successfully",
      house,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch house",
      error: error.message,
    });
  }
};

const updateHouse = async (req, res) => {
  try {
    const { id } = req.params;

    const existingHouse = await prisma.house.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingHouse) {
      return res.status(404).json({
        message: "House not found",
      });
    }

    const {
      title,
      rent,
      location,
      university,
      ownerName,
      ownerPhone,
      description,
      availableFrom,
    } = req.body;

    const updatedHouse = await prisma.house.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
        rent: rent ? Number(rent) : undefined,
        location,
        university,
        ownerName,
        ownerPhone,
        description,
        availableFrom: availableFrom ? new Date(availableFrom) : undefined,
      },
    });

    return res.status(200).json({
      message: "House updated successfully",
      house: updatedHouse,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update house",
      error: error.message,
    });
  }
};

const deleteHouse = async (req, res) => {
  try {
    const { id } = req.params;

    const existingHouse = await prisma.house.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingHouse) {
      return res.status(404).json({
        message: "House not found",
      });
    }

    await prisma.house.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).json({
      message: "House deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete house",
      error: error.message,
    });
  }
};

module.exports = {
  createHouse,
  getAllHouses,
  getSingleHouse,
  updateHouse,
  deleteHouse,
};