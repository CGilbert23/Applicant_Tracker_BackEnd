# Applicant_Tracker_BackEnd

**Purpose** 
The goal of this project is to create a highly functional and intuitive application that allows a set of users 
to track and update the status of all the company's job applicants across six key steps. In doing so, the application 
will help to identfy bottleknecks in the system and help the users responsible for the application (HR) to gain a better 
understanding of how efficiently they are completing their tasks.

The process includes an intitial screening by the recrutiter, a set of testing the applicant must complete, a manager interview,
a background check, and a set of paperwork that must be completed. Only when all six of these tasks have been set to "Complete" 
is the applicant then considered to be finished and their completion time is recorded.

**Details** 
The application is built using a React front end tied to an express/node backend that is linked to a postgreSQL database (PG ADMIN 4). 
The back end is built to handle four main functionalities -> loading all applicant data currently in the database, inserting new applicant 
data based off a user form entry, updating existing applicant data as the status of key steps changes, and deleting out any unnecrsary applicant data.
In addition, the database has a series of triggers to assist with handling user input, specifically on inserts and updates. For example, in the event
all six steps are entered as "Complete" a trigger will fire that then sets the "Overall Completion Date" to a timestamp of the event. 
This allows the application to then calcualte a variance that is used to track the overall time each applicant takes to progress through the process which is dispalyed on the front page of the application.

In the front end, all state is lifted up into the "home.js" tab where it is then passed as props to the many different components in use. Similariliy to the back end, the main functionality is with regards to functions that exist to select, insert, update, and delete data. In addition, there is a search & filter component as well as an ability to export the data to csv.

**Future Updates**
Given the application is only in a development enviornment it is likely more functionality will be built in as user feedback generates new requirements. For this reason, it is unpredicatable what the end state of the application may look like. However, given the corporate setting this will likely run in, it is likley to need code regarding data storage and user authentication.
