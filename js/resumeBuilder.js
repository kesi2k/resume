 var bio = {
 		name: 'Makesi Hamilton',
 		role: 'Project Engineer',
 		contacts:{
 			mobile: '678-599-8790',
 			email: 'mhamilton868@gmail.gatech.edu',
 			github:'https://github.com/kesi2k',
 			location:'Stone Mountain, Georgia'

 		},
 		welcomeMessage: 'Hello, I am Makesi Hamilton. A Georgia Tech civil enginneer graduate, with five years experience in the construction seector.',
 		skills:'node.js, Python, javascript, C#, HTML, CSS',
 		biopic:'https://avatars2.githubusercontent.com/u/16753191?v=3&s=460'

 		//display: CALL DISPLAY FUNCTION 

 	};

 var education = {
 		schools:
 		[{
 			name: 'Presentation Chaguanas',
 			location:'Chagunas, Trinidad',
 			degree:'',
 			majors:'',
 			dates:'',
 			url:''},
 		
 			{name: 'Georgia Institute of Technology',
 			location:'Atlanta, Georgia',
 			degree:'',
 			majors:'Civil Engineering',
 			dates:'2003-2007',
 			url:''

 		}],



	 	onlineCourses:[
	 		{
	 			title: 'Front End Development',
	 			school:'FreeCodeCamp',
	 			url:'https://www.freecodecamp.com/'},

	 		{
	 			title: 'Full Stack web Developer',
	 			school:'Udacity',
	 			url:'https://www.udacity.com'


	 		}]


	 	//display: CALL DISPLAY FUNCTION

	 	}

 var work = {

 		jobs:[
 			{
 			employer:'Senegal Software',
 			title:'Developer',
 			location:'Atlanta, Georgia',
 			dates:' March 2017 - Present',
 			description:''},
 			
 			{
 			employer:'Bree and Associates',
 			title:'Project Engineer',
 			location:'Durham, North Carolina',
 			dates:' October 2015 – March 2016',
 			description:''},

 			{
 			employer:'Amnesty Construction',
 			title:'Project Manager',
 			location:'Marabella, Trinidad',
 			dates:'November 2014 – October 2015',
 			description:''},

 			{employer:'Estate Management and Business Development ',
 			title:'Project Engineer',
 			location:'Valsayn, Trinidad ',
 			dates:'April 2010 – June 2012',
 			description:''},

 			{employer:'Chaguaramas Development Authority ',
 			title:'Projects Officer',
 			location:'Chaguaramas, Trinidad',
 			dates:'November 2007 – October 2009',
 			description:''
 		}]


 		//display: CALL DISPLAY FUNCTION

 	}

 var projects = {

 		projects:[{
	 			title:'A Weather App',
	 			description:'Visitors to the web page are shown the weather at their current location.',
	 			images:'http://s3-us-west-2.amazonaws.com/i.cdpn.io/491230.wMOKWZ.46a91bd8-31af-4112-b113-dea255658ccc.png',
	 			url:'http://kesi2k.github.io/A-Weather-App'
	 			},
	 			{
	 			title:'My quote machine',
	 			description:'Visitors can click through some inspiratinal quotes.',
	 			images:'http://codepen.io/Kesi2k/pen/rxQjvZ/image/large.png',
	 			url:'http://kesi2k.github.io/Quote-machine'
	 			},
	 			{
	 			title:'Tic-tac-toe',
	 			description:'A game of Tic-tac-toe versus the browser. This project uses the react library. ',
	 			images:'http://codepen.io/Kesi2k/pen/NNyPje/image/large.png',
	 			url:'https://safe-reef-45769.herokuapp.com/'
	 			},
	 			{
	 			title:'Simon game',
	 			description:'A replication of the memory game Simon.',
	 			images:'http://codepen.io/Kesi2k/pen/redyZa/image/large.png',
	 			url:'http://kesi2k.github.io/Simon-game'
	 			},
	 			{
	 			title:'Pomodoro clock',
	 			description:'A time management assistant.',
	 			images:'http://codepen.io/Kesi2k/pen/VabevZ/image/large.png',
	 			url:'http://kesi2k.github.io/Pomodoro-Clock'
	 			},
	 			{
	 			title:'Wikipedia search',
	 			description:'Uses wikipedias API to return search results to user.',
	 			images:'http://codepen.io/Kesi2k/pen/BjeoPv/image/large.png',
	 			url:'http://kesi2k.github.io/wikipedia'
	 			},
	 			{
	 			title:'Message post',
	 			description:'An app for authenticated users to post messages.',
	 			images:'http://codepen.io/Kesi2k/pen/adQpMx/image/large.png',
	 			url:'https://kesi2k.github.io/Twitch-API'
	 			}]


	 	//display: CALL DISPLAY FUNCTION

}




//Cotroller. Get all the info from models


var controller = {

	init:function(){
		bioView.init()


	},
	getBio:function(){
		var myBio = bio
		return myBio

	},
	getContacts: function(){
		var myContacts = bio.contacts
		return myContacts

	},
	getWorkHistory:function(){
		var myWorkHistory = work.jobs
		return myWorkHistory
	},

	getProjects: function(){
		var myProjs = projects.projects
		return myProjs

	},

	getEducation:function(){
		var myEdu = education.schools[1]
		return myEdu

	},
	getOnlineEdu:function(){
		var myOnlEdu = education.onlineCourses
		return myOnlEdu
	}
}


//View that appends all info to the HTML page

var bioView = {
	init: function(){
		bioView.render()

	},
	render: function(){
	//Populate my bio info
	myBio = controller.getBio()

	var filledName = HTMLheaderName.replace("%data%", myBio.name);
	var filledRole = HTMLheaderRole.replace("%data%", '');
	var filledBioPic = HTMLbioPic.replace("%data%", myBio.biopic);
	var filledHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", myBio.welcomeMessage)

	$("#header").prepend(filledRole);
	$("#header").prepend(filledName);
	$("#header").append(filledBioPic);
	$("#header").append(filledHTMLwelcomeMsg);




	//Populate my contact info
	myContact = controller.getContacts()

	var filledContactInfo = [];
	filledContactInfo.push(HTMLemail.replace("%data%", myContact.email));
	filledContactInfo.push(HTMLgithub.replace("%data%", myContact.github));
	filledContactInfo.push(HTMLmobile.replace("%data%", myContact.mobile));
	filledContactInfo.push(HTMLlocation.replace("%data%", myContact.location));

	for(var i=0;i < filledContactInfo.length; i++){
		$('#topContacts').append(filledContactInfo[i]);
		$('#footerContacts').append(filledContactInfo[i]);

		}



	//Populate my work history
	workHistory = controller.getWorkHistory()

	$("#workExperience").append(HTMLworkStart);


	for (var i=0; i< workHistory.length;i++){

			var filledEmployer = HTMLworkEmployer.replace("%data%", workHistory[i].employer);
			var filledWorkTitle = HTMLworkTitle.replace("%data%", workHistory[i].title);
			var filledWorkLocation = HTMLworkLocation.replace("%data%", workHistory[i].location);
			var filledDatesWorked = HTMLworkDates.replace("%data%", workHistory[i].dates);


			$('.work-entry').append(filledEmployer);
			$('.work-entry').append(filledWorkTitle);
			$('.work-entry').append(filledWorkLocation);
			$('.work-entry').append(filledDatesWorked);


	}

	//Populate my project section

	projs = controller.getProjects();

	$('#projects').append(HTMLprojectStart);

	for (var i=0;i<projs.length;i++){
		var filledProjTitle = HTMLprojectTitle.replace("%data%", projs[i].title);
		//var filledProjImage = HTMLprojectImage.replace("%data%", projs[i].images);
		var filledProjDescription = HTMLworkDescription.replace("%data%", projs[i].description);

		$('.project-entry').append(filledProjTitle);
		//$('.project-entry').append(filledProjImage);
		$('.project-entry').append(filledProjDescription);


	}

	//Populate education section
	myEdu = controller.getEducation();

	$('#education').append(HTMLschoolStart);


		var filledSchoolName = HTMLschoolName.replace("%data%", myEdu.name);
		var filledMajor = HTMLschoolMajor.replace("%data%", myEdu.majors);
		var filledDates = HTMLschoolDates.replace("%data%", myEdu.dates);


		$('.education-entry').append(filledSchoolName);
		$('.education-entry').append(filledDates);
		$('.education-entry').append(filledMajor);
		


	myOnlEdu = controller.getOnlineEdu()

	$('#education').append(HTMLonlineClasses);

	for (var i=0; i< myOnlEdu.length; i++){
		$("#education").append(HTMLschoolStart);

		var filledOnlineschool = HTMLonlineSchool.replace("%data%", myOnlEdu[i].school )
		var filledTitle = HTMLonlineTitle.replace("%data%", myOnlEdu[i].title )
		var filledURL = HTMLonlineURL.replace("%data%", myOnlEdu[i].url )

		$(".education-entry:last").append(filledOnlineschool);
		$(".education-entry:last").append(filledTitle);
		$(".education-entry:last").append(filledURL);


	}


	}

}

controller.init()





 