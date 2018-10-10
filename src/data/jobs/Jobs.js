import AMHLogo from 'assets/AMH-Logo.png';
import TALogo from 'assets/TA-Logo.png';
import ThinkBioLogo from 'assets/ThinkBio-Logo.jpg';
import DHLogo from 'assets/DH-Logo.jpg';
import SCLogo from 'assets/SC-Logo.png';
import RCLogo from 'assets/RC-Logo.png';

const SOFTWARE_JOBS = {
	jobs: [
		{
			imageSrc: TALogo,
			title: 'TripAdvisor',
			description: 'Needham, MA',
			date: "Summer '18",
			details: [
				"Worked alongside a full-time engineer to recreate the website's header and navigation which millions of users rely on every day",
				'Made heavy use of React, Java, and Javascript to write responsive web components for all devices, languages, and layouts',
				'Learned how to work efficiently and responsibly in a large code base with hundreds of other engineers, and push live code on a weekly basis'
			],
			extra: 'Skills: Java, Javascript, React, Java Servlets, SVN, HTML, CSS, Less, JIRA',
			link: 'https://www.tripadvisor.com/'
		},
		{
			imageSrc: ThinkBioLogo,
			title: 'Think BioSolution',
			description: 'Dublin, Ireland',
			date: "Summer '17",
			details: [
				'Developed two fully-functioning iOS demo applications from scratch using xCode, Swift, and Objective-C',
				'Created an iOS application to retrieve, store, and display information from a Raspberry Pi device',
				'Utilized open-source libraries to run image processing and facial detection in the app'
			],
			extra: 'Skills: iOS Development, Swift, Objective-C, Git, xCode'
		}
	]
};

const UNIVERSITY_JOBS = {
	jobs: [
		{
			imageSrc: AMHLogo,
			title: 'Amherst College Department of Mathematics',
			description: 'Grading Assistant',
			date: "Summer '17 - Present",
			details: [
				'Classes I have graded for: Introduction to Calculus (one semester), Multivariable Calculus (two semesters)',
				'Selected by the Mathematics department to grade and provide feedback for homework assignments',
				'Spend 5-7 hours per week grading homework assignments'
			],
			extra: 'Skills: Mutlivarible Calculus, Calculus, Math, Time Management'
		},
		{
			imageSrc: AMHLogo,
			title: 'Amherst College Department of Computer Science',
			description: 'Teaching Assistant',
			date: "Summer '17 - Spring '18",
			details: [
				'Assisted in teaching students how to better understand, and implement, the fundamentals of Java and object-oriented programming'
			],
			extra: 'Skills: Mutlivarible Calculus, Calculus, Math, Time Management'
		},
		{
			imageSrc: AMHLogo,
			title: 'Amherst College Athletics',
			description: 'Event Staff',
			date: "Fall '15 - Present",
			details: [
				'Assist athletic department with game day preparations and other duties as assigned',
				'Assistance includes: setting up fields before games, taking statistics, announcing and other game day tasks'
			],
			extra: 'Amherst, MA'
		}
	]
};

const OTHER_JOBS = {
	jobs: [
		{
			imageSrc: DHLogo,
			title: 'Delaney Hockey',
			description: 'Coaching Assistant',
			date: "'10 - Present",
			details: [
				'Create and organize training drills for large groups of participants from ages 4-15 in order to improve their ice hockey skills and understanding of the game ',
				'Discussed the best training practices and drills amongst other coaches',
				'Worked when called upon, usually consisting of 2-3 weeks of work at a time'
			],
			extra: 'Illinois',
			link: 'http://www.delaneyhockey.com/'
		},
		{
			imageSrc: SCLogo,
			title: 'Sage Corps',
			description: 'Sage Fellow',
			date: "Summer '17",
			details: [
				'Sage Corps is a selective global entrepreneurship program that sends top college students (Fellows) to study and intern abroad with tech startups',
				'Fellows spend their days alongside CEOs, CTOs, and COOs tackling real problems and building impactful solutions.'
			],
			extra: 'Dublin, Ireland',
			link: 'https://sagecorps.com/'
		},
		{
			imageSrc: RCLogo,
			title: 'Camp Counselor/Hockey Coach',
			description: 'Robert Crown Camp',
			date: "Summers '12 & '13",
			details: [
				'Assist athletic department with game day preparations and other duties as assigned',
				'Assistance includes: setting up fields before games, taking statistics, announcing and other game day tasks'
			],
			extra: 'Evanston, IL'
		}
	]
};

export default {
	SOFTWARE_JOBS,
	UNIVERSITY_JOBS,
	OTHER_JOBS
};
