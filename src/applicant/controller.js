const methods = {};
const { validationResult } = require("express-validator");
const { queryInstance } = require("../db/connection");

const getApplicants = async (req, res) => {
  try {
    const applicants = await queryInstance('SELECT * from applicants');
    res.json({ applicants });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};
/*recruiterscreen_completion = '${recruiterscreen_completion}, testing_completion=${testing_completion}, interview_completion = ${interview_completion}, backgroundcheck_completion=${backgroundcheck_completion}, drugscreen_completion = ${drugscreen_completion}, paperwork_completion = ${paperwork_completion}*/

const updateApplicants = async (req, res) => {
  try {
    const applicant_id  = req.params.applicant_id;
    const {recruiterscreen_status, backgroundcheck_status, interview_status, paperwork_status, drugscreen_status, testing_status, notes } = req.body
    
    const applicants = await queryInstance(`UPDATE applicants SET recruiterscreen_status = '${recruiterscreen_status}', testing_status='${testing_status}', interview_status='${interview_status}', backgroundcheck_status='${backgroundcheck_status}', drugscreen_status='${drugscreen_status}', paperwork_status='${paperwork_status}', notes='${notes}' WHERE applicant_id = '${applicant_id}' returning *`);
    
    res.json({ applicants })
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};

const addApplicant = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { store, first_name, last_name, position, recruiterscreen_status,testing_status,backgroundcheck_status,interview_status,drugscreen_status,paperwork_status, date_in } = req.body;

  try {
    const applicants = await queryInstance(`INSERT INTO applicants (store, first_name,last_name,position, recruiterscreen_status,testing_status,backgroundcheck_status,interview_status,drugscreen_status,paperwork_status, date_in) VALUES ('${store}', '${first_name}', '${last_name}', '${position}', '${recruiterscreen_status}', '${testing_status}', '${backgroundcheck_status}','${interview_status}','${drugscreen_status}','${paperwork_status}','${date_in}') RETURNING *`);
    res.json({ applicants });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
}; 

const deleteApplicant = async (req, res) => {
  try {
    const applicant_id = req.params.applicant_id;
    const applicants = await queryInstance(`DELETE FROM applicants WHERE applicant_id = '${applicant_id}' RETURNING *`);
    res.json({ applicants });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(err.message);
  }
};



module.exports = 
{deleteApplicant,getApplicants,updateApplicants,addApplicant}
