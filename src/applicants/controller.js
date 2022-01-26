const methods = {};
const { validationResult } = require("express-validator");
const { queryInstance } = require("../db/connection");

methods.getApplicants = async (req, res) => {
  try {
    const applicants = await queryInstance('SELECT * from applicants');
    res.json({ applicants });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};


methods.updateApplicants = async (req, res) => {
  try {
    const applicant_id = req.params.applicant_id
    const {recruiterscreen_status, backgroundcheck_status, interview_status, paperwork_status, drugscreen_status, testing_status } = req.body;
    const applicants = await queryInstance(`UPDATE applicants SET recruiterscreen_status = '${recruiterscreen_status}', testing_status='${testing_status}', interview_status='${interview_status}', backgroundcheck_status='${backgroundcheck_status}', drugscreen_status='${drugscreen_status}', paperwork_status='${paperwork_status}' WHERE applicant_id = '${applicant_id}'`);
    res.json({ applicants });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};



methods.addApplicant = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { store, first_name, last_name, position, recruiterscreen_status,testing_status,backgroundcheck_status,interview_status,drugscreen_status,paperwork_status, date_in, currentdate, variance, notes } = req.body;

  try {
    const applicants = await queryInstance(`INSERT INTO applicants (store, first_name,last_name,position, recruiterscreen_status,testing_status,backgroundcheck_status,interview_status,drugscreen_status,paperwork_status, date_in, notes) VALUES ('${store}', '${first_name}', '${last_name}', '${position}', '${recruiterscreen_status}', '${testing_status}', '${backgroundcheck_status}','${interview_status}','${drugscreen_status}','${paperwork_status}','${date_in}', '${notes}') RETURNING *`);
    res.json({ applicants });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
}; 

methods.deleteApplicant = async (req, res) => {
  try {
    const applicant_id = req.params.applicant_id;
    console.log(applicant_id)
    const applicants = await queryInstance(`DELETE FROM applicants WHERE applicant_id = '${applicant_id}' RETURNING *`);
    res.json({ applicants });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};

methods.tableSum = async (req, res) => {
try{
  const store = req.params.store
  console.log(store)
  const applicants = await queryInstance('Select AVG(variance) from applicants where store = '${store}'')
  res.json({applicants});
}catch (err){
  console.error(err.message);
  return res.status(500).send(err.message);
}
}

module.exports = methods;
