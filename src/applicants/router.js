const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { route } = require("express/lib/application");
const applicantsController = require("./controller");

// @route   GET
// @desc    Get Applicants
// @access  Public
router.get(`/`, applicantsController.getApplicants);


// @route   GET APPLICANT
// @desc Update Applicants
// @access  Public

router.get('/:id', applicantsController.updateApplicants)

// @route   POST
// @desc    Add Applicant
// @access  Public
router.post(
    `/`, 
    [
        check("first_name").not().isEmpty().withMessage("First name is required"),
        check("last_name").not().isEmpty().withMessage("Last name is required"),
        check("position").not().isEmpty().withMessage("Position is required"),
        check("store").not().isEmpty().withMessage("Store is required"),
        check("overall_stauts").not().isEmpty().withMessage("Overall status is required"),
        check("recruiterscreen_status").not().isEmpty().withMessage("Screen status is required"),
        check("testing_status").not().isEmpty().withMessage("Testing status is required"),
        check("interview_status").not().isEmpty().withMessage("Interview status is required"),
        check("backgroundcheck_status").not().isEmpty().withMessage("Background check status is required"),
        check("drugscreen_status").not().isEmpty().withMessage("Drug screen status is required"),
        check("paperwork_status").not().isEmpty().withMessage("Paperwork status is required"),
        check("date_in").not().isEmpty().withMessage("Date IN is required"),
        check("notes").not().isEmpty().withMessage("Model is required"),
    ],
    applicantsController.addApplicant
);


// @route   GET
// @desc    Delete Applicant
// @access  Public

router.get(`/:id`, applicantsController.deleteApplicant);


// @route GET
// @desc Table Sum
// @access Public
router.get('/sum',applicantsController.tableSum)


module.exports = router;