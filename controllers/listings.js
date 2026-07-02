
const Listing = require("../models/listing");

// ================= HOME + SEARCH =================

module.exports.index = async (req, res) => {
    let { search } = req.query;

    let allListings;

    if (search) {
        allListings = await Listing.find({
            $or: [
                { title: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
                { country: { $regex: search, $options: "i" } },
            ],
        });
    } else {
        allListings = await Listing.find({});
    }

    res.render("listings/index.ejs", { allListings });
};


// ================= NEW FORM =================

module.exports.renderNewFrom = (req, res) => {
    res.render("listings/new.ejs");
};


// ================= SHOW LISTING =================

module.exports.showListing = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");

    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    // Remove orphan reviews (whose author is deleted)
    listing.reviews = listing.reviews.filter(
        (review) => review.author != null
    );

    res.render("listings/show.ejs", { listing });
};


// ================= CREATE =================

module.exports.createLiating = async (req, res) => {

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;
    newListing.image = { url, filename };

    await newListing.save();

    req.flash("success", "New Listing Created!");

    res.redirect("/listings");
};


// ================= EDIT FORM =================

module.exports.renderEditForm = async (req, res) => {

    let { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");

    res.render("listings/edit.ejs", {
        listing,
        originalImageUrl,
    });
};


// ================= UPDATE =================

module.exports.updateListing = async (req, res) => {

    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = {
            url,
            filename,
        };

        await listing.save();
    }

    req.flash("success", "Listing Updated!");

    res.redirect(`/listings/${id}`);
};


// ================= DELETE =================

module.exports.destroyListing = async (req, res) => {

    let { id } = req.params;

    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");

    res.redirect("/listings");
};