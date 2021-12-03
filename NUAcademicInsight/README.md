# NUAcademicInsight
Heroku Link: https://academic-insight-ui.herokuapp.com/reviews

----------------------------------
# Iter3
In this final week, team continue working on the features fulfilled and removing on the bugs which carried from Iter2 last week. 

+ Our team had a discussion on the project outcomes, the design pattern. We designed our plan to utilize time remained, to sum up and create a bug-free final application. 
+ Everyone has learned a lot. We reflected on the pages regarding to visual design and user experience. Though we changed back and forth, we figured out our final design during our team meetings. 
+ Github maintainence is new to most of us. Fortunately, we successfully pulled and merged with each other's code and prevented conflits. 
+ To sum up, the team demostrated great teamwork spirit. We effectively supported each other and always reached a when we disagreed with each other. This teamwork experience aws memorable.




+ Payton completed the profile page. Using the frontend set up from Yong, the information about the user who is signed in is displayed for their reference. When a user logs into their account, that information is sent to the profile page using the href link. 

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/SignUpExample.png)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/LogInExample.png)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/ProfilePageExample.png)

+ Yong continue slightly change on the profile page front end; and with Payton help combine with the sign up/log in pages to get the basic profile showing up as above screen shot. For the profile page there do can have more improvement as the design phase if have more time, can add in more profile information including self page etc. So far get these functions features for let it running first. And for the search page, we do also met difficulties when wanting to have another website format, but that's too much work such as css features coding. So we gave that up and changed back to the issue tracker structure for the searching page. For this project I do have a lot of basic knowledge improvement and which is my first time to coding with team. Especially thanks team for the helping me out when I meet questions.

+ Yuting updated the blogs page and the blog database to show more data in the blog table. The add a new blog button is moved to the nav bar for the style consistency. The post button is working now. When clicking on "Add a New Blog", there will be a form show up so that user can put information for the new blog. When click on "Post", the new blog will be added to the blog table on the Blogs page. To be able to show the new blog added, user need to click on the refresh button on the browser. If user click on "Cancel", it will go back to Blogs page without any change.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/ClickToAdd.png)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/addANewBlog.png)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/postOrCancel.png)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/showBlog.png)

+ Jiameng refined the landing page. He removed the 'close case' button from issue tracker code and debugged the edit and remove buttons (the first figure below). He also implemented 'view review details' funcion which allows users to click on a review and read its details (the second figure two below). Finally, Jiameng changed the edit review section and debugged write a review function. Now, the user won't encounter an issue when they add a new review. They also get some suggestions on aspects of courses they can comment on (the third figure below).

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/button.png)




![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/Review_details.png)




![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/edit_success.png)



----------------------------------
# Iter2
Team keep working on the backends in this week.

+ Payton continued to work on the log in and sign up pages. The pages were changed to modals to allow the user to access them and easily return their previous page. The sign up page was set up to have the user input their name, email and password. A query to the database is made for the email provided. If the query returns an existing account, the user is unable to create another account with that email. If the email is not connected to an account, the new account is created. The log in page is set up to have the user input their email and password. A query is made for the provided email and find the user's account information. The user's stored password is compared to the input password as a security check. Once a user is logged in, they are able to access a drop down menu with the options to view their profile page or sign out. When a user signs out, that drop down menu returns to the log in button.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/2login.jpg)

+ Jiameng continued working on the landing page and sucessfully implemented CRUD operations for review data. The landing page now displays reviews. **Once again, Jiameng is using his other github account, so his commits don't show in the insight or history section.**

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/reviewDisplay.png)

+ When a user clicks 'write a review' on the navbar, there pops a modal (the first firgue below) for the user to enter title of her review and name of the course which she would like to review. These two fields are required. Once the user submits the review, the website brings her to the edit page (the second figure below) to provide more informations most of which are not required. 

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/reviewAdd.png)

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/reviewEdit.png)

+ The user can also click on edit and delete buttons to edit and delete reviews(the first and second figures below). The website doesn't need a close button, but Jiameng kept the button to make it more convenient to add a new function next week. The third and forth figures below show the success of edit and delete operations. The delete operations don't have notification of success for now. 

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/reviewEditTwo.png)

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/reviewEditSuccess.png)

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/reviewDelete.png)

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/reviewDeleteSuccess.png)

+ Yong continue working on the profile frontend page outlines and tried to link with backend for the data loading. Search page no change as original frontend and backend. Previous design the profile page should include user information and blogs posted, at this moment can only do the user basic information of name and email for simplify the backend technics, with Payton help on the data loading and combine with the log in page the logical, and sign up page data query.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/2profile.jpg)

+ Yuting continue working on the blog page related frontend and backend. At the end of Iter2, Blogs page was successfully connected to the backend. The data shown on Blog page came from blog.mongo.js under api/scripts. For the next iteration, will continue to build blogs page and connect the 'add a new blog' page to the backend so that when a new blog is added, it will show up on the blogs page.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/updatedBlogs.png)


----------------------------------
# Iter1
Team started and ongoing to coding on the frontend pages, and also moving on to work at the links between frontend and backend.

+ Payton finished the log in and sign up page as below web page showing, these are new added pages located below the about link at upper right corner. Payton also created the schemas on the backend to store the information for the blogs, reviews, and profiles. These schemas were added to the issue tracker's schema.graphql file. Then the data for the reviews were populated in a scripts file from the data Jiameng collected at Colby College.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/1logInAndSignUp.JPG)

+ **Jiameng's commits don't appear in insights section because he is using another Github account to push into the repository.** Except for collecting data, Jiameng completed the landing page as shown in the first picture below. He tried to change the visual design of the landing page but decided not to do so due to the complexity of css loader used by Webpack. He developed the NavBrand and other links in the NavBar including Write a review and Blog. He also created a list to display course reviews in the landing page. Finally, he implemented pages to write a review and edit review as shown in the second and third picture below. 

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/1landing.jpg)

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/createReview.png)

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/editReview.png)

+ Yong also looking on the search page per the previously design, at this moment combine this at landing page as above, also fully utilized the issue tracker search model, to save coding time and backend linkage. And also created one profile page for later profile store view develop.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/1profile.jpg)

+ Yuting moving on the blog page and add new blog page coding, this is extention from the above landing page. One of the page is also take the advantage of issue tracking, the issue report page. In this way also can benifit on coding reduction.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/BlogsPage.png)

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/AddNewBlog.png)



----------------------------------
# Iter0.2
We did primary design on the web, and define 8 pages at this moment. Team working on each pages. Payton: login page and sign up page. Yong: search page and profile page. Jiameng: landing page and coment page. Yuting: blog page and a page to display different comments.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/02d1.JPG)


![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/02d2.JPG)


![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/02d3.JPG)


![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight/blob/master/readme_image/02d4.JPG)



----------------------------------
# Iter0.1
Team NU Academic Insight #Iter0.1

+ Web Name: NU Academic Insight

+ Objective: There is professor rate website, but we want to have a website focus more on course introduction and review, to benefit students especially new students on course selection for self semester better plan.

+ Target Audience: To students expecially new students who want to know more about courses which going to register.

+ Main Features:
  + A user can read, post, delete and modify reviews on courses. Like the issue tracker, use forms to tracking the posts.
  + A user can comment on others�� reviews, and ask questions, discussions. Add on comments function field and tracking posts.
  + In addition, there will be an additional blog section where users can post articles about their life in NEU and their advice   + to other students. Users can also like and comment on others�� posts. 
  + If we have time, we will also build ranking lists where students can vote for their favorite courses.



----------------------------------
# Iter0.0
Team NU Academic Insight #Iter0.0
+ This is NU Academic Insight. We plan to build a course-review website similar to ratemyprofessor.com, but we will focus on course reviews instead of professor reviews. On our website, a user can read, post, delete and modify reviews on courses at NEU. A user can comment on others�� reviews. In addition, there will be an additional blog section where users can post articles about their life in NEU and their advice to other students. Users can also like and comment on others�� posts. If we have time, we will also build ranking lists where students can vote for their favorite courses in each department at NEU.




+ Let's meet the team:

  + Payton Welch

  + Yong Shi

  + Yuting Zhang

  + Jiameng Sun



