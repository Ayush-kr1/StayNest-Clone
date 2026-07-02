
// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utils/wrapAsyc.js");
// const Listing = require("../models/listing.js");
// const {isLoggedIn, isOwner, validateListing } = require("../middleware.js");

// const listingController = require("../controllers/listings.js");
// const multer = require("multer");
// const {storage} = require("../cloudConfig.js");
// const upload = multer({ storage});

// router

//    .route("/")
//    //.get(wrapAsync(listingController.index))
//    wrapAsync(listingController.updateListing)
//    .post(
//     isLoggedIn, 
//     upload.single("listing[image]"), 
//     validateListing, 
//     wrapAsync(listingController.createLiating)
// );


// //New Route  L-07
// router.get("/new",isLoggedIn, listingController.renderNewFrom);

// //router
// //      .route("/:id")
// //      .get(wrapAsync(listingController.showListing))
// //    .put( 
// //      isLoggedIn, 
// //      isOwner, 
// //      upload.single("listing[image]"), 
// //      validateListing, 
// //      wrapAsync(listingController.lupdateListing)
// // )
// router
//   .route("/")
//   .get(wrapAsync(listingController.index))
//   .post(
//     isLoggedIn,
//     upload.single("listing[image]"),
//     validateListing,
//     wrapAsync(listingController.createLiating)
//   );


//    .delete(
//    isLoggedIn, 
//    isOwner, 
//    wrapAsync(listingController.destroyListing)
// );


// //Edit Route  L-08
// router.get(
//     "/:id/edit", 
//     isLoggedIn, 
//     isOwner, 
//     wrapAsync(listingController.renderEditForm)
// );

// module.exports = router;


const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsyc.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");

const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createLiating)
  );

// New Route
router.get("/new", isLoggedIn, listingController.renderNewFrom);

// Show, Update, Delete
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;