import PacmanLogo from 'assets/Pacman-Logo.ico';
import TALogo from 'assets/TA-Logo.png';
import HRDLogo from 'assets/HRD-Logo.png';
import QuasarLogo from 'assets/Quasar-Logo.png';
import MeetumLogo from 'assets/Meetum-Logo.png';
import CodingLogo from 'assets/Coding-Logo.jpg';

const SCHOOL = {
	projects: [
		{
			imageSrc: PacmanLogo,
			title: 'A.I. Pacman - Capture The Flag Tournament',
			description: 'Final project for COSC-243 (A.I.): Capture The Flag Tournament',
			date: "Fall '17",
			details: [
				'Impemented Particle Filtering to detect the probable location of opposing ghosts',
				'Implemented Q-Learning to teach our pacman/ghosts how to play capture the flag',
				'The code we wrote is located in myTeam.py'
			],
			extra: 'Skills: Python, Q-Learning, Particle Filtering',
			link: 'https://github.com/maxproche/AI_CTF'
		},
		{
			imageSrc: PacmanLogo,
			title: 'A.I.: Pacman - Particle Filtering',
			description: 'Project for COSC-243 (A.I.): Reinforcement Learning',
			date: "Fall '17",
			details: [
				'Implemented particle filtering to detect where ghosts were given an undeterministic environment'
			],
			extra: 'Skills: Python, A.I.',
			link: 'http://ai.berkeley.edu/tracking.html'
		}
	]
};

const MOBILE = {
	projects: [
		{
			imageSrc: CodingLogo,
			title: 'ListenIn',
			description: 'Music Messaging Application - Currently in Development',
			date: 'Present',
			details: [
				'Developing a music sharing application using React-Native, Redux, and React-Native APIs',
				'Implementing Soundcloud’s API for music access, and Firebase for authentication and as a real-time database'
			],
			extra: 'Skills: React Native, Javascript, npm, Firebase, API',
			link: ''
		},
		{
			imageSrc: HRDLogo,
			title: 'Heart Rate detection Demo App',
			description: 'iOS demo application developed for Think BioSolution',
			date: "Summer '17",
			details: [
				'Utilized Swift’s multi-threading capabilities to execute expensive tasks such as reading/writing video and running facial recognition/image processing technologies in the background while users interacted with the UI',
				'Implemented open-source libraries (dLib and iOS openCV) for the facial detection and image processing aspects of the application'
			],
			extra: 'Skills: iOS, Swift, Objective-C, cocoaPods, xCode, git',
			link: ''
		},
		{
			imageSrc: QuasarLogo,
			title: 'QuasaR',
			description: 'iOS demo application developed for Think BioSolution',
			date: "Summer '17",
			details: [
				'Developed the application to connect with a Raspberry Pi device to retrieve, display, and store fitness data',
				'Implemented Swift’s HTTP post request methods to retrieve and store data from the device upon user request'
			],
			extra: 'Skills: iOS, Swift, Objective-C, cocoaPods, xCode, git',
			link: ''
		},
		{
			imageSrc: MeetumLogo,
			title: 'Meetum',
			description: 'Social networking application that was developed for Amherst College students',
			date: "Fall '16",
			details: [
				'Collaborated as a team to discuss innovative application features to increase traffic flow',
				'Assisted with the application’s data analytics'
			],
			extra: 'Learned basics of: npm, AngularJS, Ionic, MongoDB',
			link: ''
		}
	]
};

const WEB = {
	projects: [
		{
			imageSrc: TALogo,
			title: 'Live Site Projects',
			description: 'Ported all of the header/navigation logic into React',
			date: "Summer '18",
			details: [
				'Rewrote the header of the TripAdvisor website using React, Redux, Javascript, and Java',
				'Ported over all of the logic of the previous header: front-end logic, click tracking, device size logic, right-to-left logic, ...etc.',
				'Discovered and fixed a major bug on right-to-left pages that affected thousands of users per day',
				'The header is the only part of the site that is visible on every single TripAdvisor page.',
				'The new React header I helped write will be used millions of times per day by TripAdvisor customers'
			],
			extra: 'Skills: React, Redux, Java, Java servlets, Dust, SVN, JIRA',
			link: 'https://www.tripadvisor.com/'
		},
		{
			imageSrc: TALogo,
			title: 'TripAdvisor Hackathon',
			description: 'Finalist in the annual TripAdvisor Intern Hackathon',
			date: "Summer '18",
			details: [
				'Integrated TicketMaster’s API to retrieve information about upcoming concerts based on a user’s current location',
				'Implemented an internal Java API to supply React web components with concert information retrieved from TicketMaster',
				'Finished as a finalist amongst 18 teams and presented a working demo of the project in front of hundreds of TripAdvisor employees'
			],
			extra: 'Skills: API, React, Java, Redux, Javascript',
			link: ''
		},
		{
			imageSrc: CodingLogo,
			title: 'maxproche.github.io',
			description: 'Personal website',
			date: "Fall '18",
			details: ['Developed my personal website using React, Redux, Javascipt, HTML, CSS, Webpack'],
			extra: 'Skills: React, Redux, Javascript, HTML, CSS, Webpack',
			link: 'https://github.com/maxproche'
		}
	]
};

export default {
	SCHOOL,
	MOBILE,
	WEB
};
