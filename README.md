About the Program: 
 The project concerns development of “University Student Registration System” with Student, Academic advisor, Registrar, and Sysadmin actors. Access to the system is by user name and password. Transactions issued by users are digitally signed by RSA-SHA512  and kept DES-encrypted

**#HOW TO RUN THE PROGRAM. **

Install node and xampp
Open the client folder in terminal/cmd and type 'npm i'
Do the same for the server folder. 



**# The DATABASE**
Start the xampp app, start apache and MySQL, click on MySQL 'Admin'
Create a database 'term_project' ad twwo tables: users and advsiors_student

**#Structure of the Tables **
![usersTable](https://user-images.githubusercontent.com/61919778/172020421-db9c1e10-a6ca-4224-94b7-52126c0c4811.PNG)
###set the id for usersTable to start from 1000
![advisors_student](https://user-images.githubusercontent.com/61919778/172020424-6a800d3b-cd16-49ad-8511-4c275406cea9.PNG)

**#Run the program**
Navigate to the server folder in terminal and type 'npm start'
Navigate to the client folder in terminal and type 'npm start'
