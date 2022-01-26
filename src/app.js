const express = require("express")
const app = express()
const applicantsRouter = require("./applicants/applicants.router")

const cors = require('cors')
app.use(cors({
  Origin: '*'  }))

const morgan = require("morgan")
app.use(morgan("dev"))

app.use(express.json())
app.use(
    express.urlencoded({
      extended: true
    })
  )


  /*Error Handler*/
  app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}` });
  });

  app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  });


module.exports= app;