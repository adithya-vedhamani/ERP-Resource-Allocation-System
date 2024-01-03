const Listing = require('../model/Listing');

const getAllListings = async (req, res, next) => {
    try {
        const listings = await Listing.find();
        if (!listings || listings.length === 0) {
        return res.status(404).json({ message: 'No listings found' });
        }
        return res.status(200).json({ listings });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    }

const getListingById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const listing = await Listing.findById(id);
        if (!listing) {
        return res.status(404).json({ message: 'No listing found' });
        }
        return res.status(200).json({ listing });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    }


module.exports = {
    getAllListings,
    getListingById,
};