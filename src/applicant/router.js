
const router = require("express").Router({ mergeParams: true });
const controller = require("./controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

/*GET AND POST FROM ROOT PATH (ALL DATA)*/
router.route("/").post(controller.addApplicant).get(controller.getApplicants).all(methodNotAllowed);

/*UPDATE OR DELETE FROM SPECIFIC PATH*/
router.route("/:applicant_id").put(controller.updateApplicants).delete(controller.deleteApplicant).all(methodNotAllowed)



module.exports = router;
