# YongShi-Book


-----------------------------------------------------------------
# Chapter 15:
Starting chapter 15 which going to deployment of the web we built. There are several ways for deployment web that developed. In this course will use Heroku to do the deployment. Heroku is current famous one and easier one for the web application deployment. We have did the personal website deployment, so which is more similar to it, use the github and Heroku account for the deploymet. Due to my chapter 14 did not run well on my machine, I am still trouble shooting it, since it run well at professor's machine. So my screen shot may not quite good as this moment, but the codes are right in the repo.

https://tracker-ui-shi.herokuapp.com/

And my api and ui links:

https://github.ccs.neu.edu/yongshi2021/5610tracker-api

https://github.ccs.neu.edu/yongshi2021/5610tracker-ui

ch15 after deploy with error piazza @470 and @559 I was keep trouble shooting on my computer, that my computer not working out the web, but at prof's the web running well; so I moving to ch15 deploy now, but again I meet errors as below:


now I suspecting my computer issue at ch14/15 is due to the google sign in and vpn issue, here is my analysis:


+ for google need I connect thru VPN (as my area is not allowed directly browsing google, we need use VPN);


+ but for the http://ui.promernstack.com:8000/ and my https://tracker-ui-shi.herokuapp.com/ when connect is not allowed to use VPN;


so seems I meet a conflict things. This is my current suspect reason for my ch14 and ch15 failed issue on my computer.




for my https://tracker-ui-shi.herokuapp.com

when I turn on VPN: 503
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch15vpn.png)




when I not turn on VPN: google fail
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch15novpn.png)


P.S. that I successfully deployed api and ui:
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch15apideploy.JPG)


![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch15ui.JPG)


I update config for the DB_URL from atlas, and in atlas there is one thing need setup is that I need set the IP for everywhere can connect, then can insert issues to DB. now I can see the issue lists,
but my google signin has issue, don't know if this is still a vpn related issue or .env issue, but in my ch14 @470 seems the codes all right when running at prof's pc... I am keep checking .env etc...

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/Ch15done.JPG)


Finally after I reset Heroku config and google api links update, fixed issue and works now:
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch15f.JPG)




# note and errors:
+ heroku config:set \
DB_URL=$DB_URL \
JWT_SECRET=YOUR_SPECIAL_SECRET \
COOKIE_DOMAIN=herokuapp.com
as windows user will need set as below
heroku config:set DB_URL=mongodb+srv://shy1515shy:xxxxxx@cluster0.iv4rh.mongodb.net/Cluster0?retryWrites=true&w=majority JWT_SECRET=YOUR_SPECIAL_SECRET COOKIE_DOMAIN=herokuapp.com

+ heroku config:set \
UI_API_ENDPOINT=https://tracker-api-$GITHUB_USER.herokuapp.com/graphql \
UI_AUTH_ENDPOINT=https://tracker-api-$GITHUB_USER.herokuapp.com/auth \
GOOGLE_CLIENT_ID=$GOOGLE_CLIENT_ID
as windows user will need set as below(the ID is my self ID)
heroku config:set UI_API_ENDPOINT=https://tracker-api-shi.herokuapp.com/graphql UI_AUTH_ENDPOINT=https://tracker-api-shi.herokuapp.com/auth GOOGLE_CLIENT_ID=959560330934-14kddl21q7in0pi6e6bfcl4cjl2c79ba.apps.googleusercontent.com

+ as windows user will need set as: 
heroku config:set UI_SERVER_ORIGIN=https://tracker-ui-shi.herokuapp.com

+ heroku config:set \
UI_API_ENDPOINT=https://tracker-ui-$GITHUB_USER.herokuapp.com/graphql \
UI_AUTH_ENDPOINT=https://tracker-ui-$GITHUB_USER.herokuapp.com/auth \
UI_SERVER_API_ENDPOINT=https://tracker-api-$GITHUB_USER.herokuapp.com/graphql \
API_PROXY_TARGET=https://tracker-api-$GITHUB_USER.herokuapp.com
as windows user will need set as below
heroku config:set UI_API_ENDPOINT=https://tracker-ui-shi.herokuapp.com/graphql UI_AUTH_ENDPOINT=https://tracker-ui-shi.herokuapp.com/auth UI_SERVER_API_ENDPOINT=https://tracker-api-shi.herokuapp.com/graphql API_PROXY_TARGET=https://tracker-api-shi.herokuapp.com

+ DB_URL mongodb+srv://shy1515shy:<password>@cluster0.iv4rh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



-----------------------------------------------------------------
# Chapter 14:
In this chapter we are going to set signin and signout for the web. And use Google authenticate user. For this implementation will serve as a good example for the integrations and most web using. So by doing this, users can view all the informations on the tracking, but can not edit, so after sign in the user can edit issues. And finally need take note the confidential log in information should be ignore from the git hub upload.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch14enderror.JPG)


# note and errors:
+ Listing 14-3 the directory should be ui/sample.env. and the sample.env need copy to rename as .env.
+ I got issue for the sign in that saying missing env var GOOGLE_CLIENT_ID... need keep on the trouble shooting piazza @470, https://piazza.com/class/knrre5w2exg4hu?cid=470
...even already update the .env code with client id there and prof checked all working well, but on my PC still fail.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch14id.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch14myid.JPG)


-----------------------------------------------------------------
# Chapter 13:
In this chapter, we will do more features. These features is across the different technologies (front-end, back-end, database) and make them run together and works. first refactor the UI code to reuse common code across many components that display the Toast messages. and move most of the repeated code in the components into new file using a pattern common to
React. Then, we¡¯ll implement the Report page that has until now been a placeholder. Finally implement an Undo operation when deleting issues to resurrect them. Finally, we¡¯ll display a search bar in which the users can type keywords and look for issues matching the keywords.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch13end1.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch13end2.JPG)

# note and errors:
+ at first I didn't get the search run, after in api folder run "$ mongo issuetracker scripts/init.mongo.js", to reinit db to fix the issue.
+ listing 13-5 'Lorem ipsum dolor sit amet, ${i}' should be surrounded by backticks.
+ listing 13-24 history.push('/edit/${value}') should be history.push(`/edit/${value}`).

-----------------------------------------------------------------
# Chapter 12:
Starting Chapter 12. In this chapter, we are going to explore another cornerstone of React to generate HTML on the server, and to being able to render directly to the DOM. This enables creation of isomorphic applications, and finally render to the DOM or create HTML. Server rendering is rather than fetch data via APIs and construct the DOM on the browser, the entire HTML is constructed on the server and sent to the browser. At last learn on the redirect.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch12ended.JPG)

# note and errors:
+ run this npm command and it need run very long time maybe took me ~20mins. Just make note here.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch12note.JPG)

+ listing 12-1 there is one curly bracket should delete.
+ listing 12-3 rules should be "rules". and the ' should be ".
+ listing 12-33 should be ui/server/render.jsx.

-----------------------------------------------------------------
# Chapter 11:
In this Chapter we install Bootstrap, to build websites which looks more professionally styled and responseive. These are one of CSS frameworks. React-Bootstrap is a safe alternative that built on top of the popular Bootstrap and fits current our needs. In this Chapter will go thru React-Bootsrap basics techniques. Chapter start with installing react-bootstrap versions.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch11ended.JPG)

# note and errors:
+ I got styles not actios issue at begining and thought was code issue, after double check on code, finally suspect due to bootstrap not trigger issue. At end I re org my public folder: in ui folder terminal to do "> mklink /J public\bootstrap node_modules\bootstrap\dist"), after make this link, now my bootstrap works. I shared at piazza also for this one.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch11end.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch11issue.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch11ts.JPG)

+ Listing11-8 in the Page() should keep NavBar and Footer.
+ Listing 11-10 should remove imports form react router dom.

-----------------------------------------------------------------
# Chapter 10:
Start for Chapter10 React forms. In this chapter we add user input for the issue tracker web with react. User input is one of the important parts of a web, so we will more on to the issue tracker web page to let use input new issues. So in this chapter will convert hard coded issues to more flexible with user inputs, then form an edit page, finally will add the ability to delete issues from the list page.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch10end1.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch10end2.JPG)

# note and errors:
+ several quotes mark wrong with ¡°, but should be '', eg. return num != null ? num.toString() : ¡°;...
+ follow instructor node for Chrome: The date validation described in the book does not work for Chrome. In fact, Chrome will allow an invalid date to be entered and then fail to render properly if one is entered. A solution (h/t to Magnus Frennberg) for this is as follows. In DateInput.jsx replace this code:

  function unformat(str) {
      const val = new Date(str);
      return Number.isNaN(val.getTime()) ? null : val;
  }
with

  function unformat(str) {
      const isDate = str.match(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/);
      return isDate ? new Date(str) : null;
  }

-----------------------------------------------------------------
# Chapter 9:
In this chapter is continue develop for the issue tracker page to add more features, the most focus in this time is to use the setting up of routing for the the single page application, which use react routing components. At last on the issue tracker page, show up the description when add individual issue.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch9end.JPG)

# note and errors:
+ Listing 9-10. ui/src/IssueFilter.js: New Component with Filter Links, .js should be .jsx.
+ At the end of chapter9 need npm start in API and UI, and start mongod, all of them to get run.

-----------------------------------------------------------------
# Chapter 8:
This chapter continue structure the back end and front end, in the api and ui folders further seperate js files. And further separate the issues file to add, table, filter, list. In this way can help better management for a large project and also benefit on web maintanance. And later in this chapter introduce the webpack, to boundle modules and implemetation.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch8end.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch8webpack.JPG)

# note and errors:
+ at last in the console did not show the log request, need go to setting to check the log request item, then can show out.

-----------------------------------------------------------------
# Chapter 7:
In this chapter that saperate files to API and UI, and in each folders install node modules. And then do more at architecture and make them more flexible to carry more apps traffics. At last to learn on ESLint to check code standards and practices also catches possible bugs earlier.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch7ApiEnd.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch7UiEnd.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch7UiEnd2.JPG)

# note and errors:
+ Listing7-17 some "" should remove, can refer to Listing7-22 as correct one which VS editor happy.
+ For windows the enter is CRLF, can put "linebreak-style": [0 ,"error", "windows"] in rules of the .eslintrc file.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/ch7ApiEnd2.JPG)

-----------------------------------------------------------------
# Chapter 6:
In this chapter is going to learn on MongoDB. It is the database layer and the M in the MERN stack. by now, we had
an array of issues in the Express server¡¯s memory that we used as the database. For this chapter will replace this with real
persistence and read and write the list of issues from a MongoDB database.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/chapter6end.JPG)

# note and errors:
+ for the install MongoDB, I firstly downloaded the current version 4.4.6, but when install found my laptop win8 can not support it. It required win10 and above. So I re download a previous version 3.6.23 for my windows, this one works.
+ open mongod.exe first to start the server, than can use the mongo.exe for the shell running. For me to use "C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" and "C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"
+ I met problem that mongo command not found, I setup environment variable path for the bin folder at Control Panel\System and Security\System; restart terminal and fixed.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/6-3error2.png)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/6-3error.png)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/6-3errorfix.png)

-----------------------------------------------------------------
# Chapter 5:
In this chapter did modify on the server file, seperate the server file to .graphql. This introduce the API functions. In the web page of Graphal can run the query language to query out informations such as id title created of the issues. Later on continue update files to get error message and build in more powerfull query informations. Step by step can finally get the codes fulfilled with the book.

![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/5-1listing.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/chapter5query.JPG)

# note and errors:
+ when run the install $ npm install graphql@0 apollo-server-express@2, need wait for a while ~5mins to start the install.

-----------------------------------------------------------------
# Chapter 4:
In this chapter we make components that respond to user input and other events, React uses a data structure called state in the component.In this chapter, we learnt how to use React State and how it can be manipulated to change how the
component looks and what it shows on screen. Below is the beginning with listing4-1/2 update with empty table and then load with information:
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/Listing4-2end.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/Listing4-2end2.JPG)

Post adding listing4-7 which make the add issue function, and tested add function works well:
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/listing4-7end.JPG)
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/listing4-7endadd.JPG)

# note and errors:
+ NA.
+ log the tag screen here.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/chapter4end-tag.JPG)

-----------------------------------------------------------------
# Chapter 3:
In this chapter we did improve on the web with react etc componants, and also did a form update with more features. And use npm run watch to auto update for App.js for App.jxs. Also learnt on the rows and table functions. After went thru all the chapter, and debugging, there is more sense on the javascript language and the web basics, src, pusblic, server.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/Chapter3end.JPG)

# note and errors:
+ "By now you should be running npm run watch in a console and have started the server using npm start
in a separate console. Thus, any changes to App.jsx should have been automatically compiled. So, if you
refresh your browser, you should see the greeting with all the continents, just as before." here is very important that the sequence is: run npm start in one console, then npm run watch in another console, now the any change to App.jsx can automatically compile to update App.js accordingly. Refresh the web page to test it.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/npmstart-npmrunwatch.JPG)

+ Listing3-6 error which missing one ' before the New'.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/Listing3-6error.JPG)

-----------------------------------------------------------------
# Chapter 2:
I am very exciting when see my Hello World webpage! My first time do this! This is a begining with the online tools and server, later on in this Chapter build the local server and seperate the src and public and server 3 forders, to get introduction of the web by node and npm. Also converted the codes to IE functional at the chapter end.

My first time doing web, with the online tools and server.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/helloworld.JPG)

The local server with localhost3000 hello world.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/helloworld3000.JPG)

The seperated folders hello world on Chrome.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/HelloChrome.JPG)

The same one after convert IE functional.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/HelloIE.JPG)

The end of chapter start with nodemon.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/HelloChapter2end.JPG)

# note and errors: 
+ Listing2-7 the come is missing > and <.
![image](https://github.ccs.neu.edu/NEU-CS5610-SU21/YongShi-Book/blob/master/readme_image/Listing2-7error.JPG)

+ package.json file should creat when run npm init, it's different with package-lock,json.

-----------------------------------------------------------------
# Chapter 1:
Let me tracking week1 into Chapter 1 here. I am a new to JS(javascript) code an Align student, I spent one week total around 30hrs finished the JS tutoring. I think I can share some BKM(best known method). First follow the instructions on the code generating; if stuck, can quick refer to the hint; if still no clue, can move on the the forum to check more on the solutions and discussions; Also for the good codes examples, can save some for self learning further. As I am a junior coder can finish in this way, hope everyone can get thru this first week smoothly. Then also piazza with team and TAs and professor. Let's moving on together!