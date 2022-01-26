
const router = require("express").Router({ mergeParams: true });
const controller = require("./controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.addApplicant).get(controller.getApplicants).all(methodNotAllowed);



router.route("/:applicant_id").put(controller.updateApplicants).delete(controller.deleteApplicant).all(methodNotAllowed)



module.exports = router;
