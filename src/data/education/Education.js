import WYLogo from 'assets/WY-Logo.jpg';
import PEALogo from 'assets/PEA-Logo.png';
import AMHLogo from 'assets/AMH-Logo.png';

const HIGH_SCHOOL = {
	schools: [
		{
			imageSrc: PEALogo,
			title: 'Phillips Exeter Academy',
			description: 'Exeter, NH',
			date: "'15",
			details: [
				'Studied as a post-graduate boarding student at Phillips Exeter Academy before attending Amherst College',
				"Member of the Phillips Exeter Academy Men's Ice Hockey Team"
			],
			extra: 'Ranked #2 Best Private School in America',
			link:
				'https://www.businessinsider.com/best-private-high-schools-in-america-2017-8#2-phillips-exeter-academy-24'
		},
		{
			imageSrc: WYLogo,
			title: 'Whitney M. Young Magnet High School',
			description: 'Chicago, IL',
			date: "'14",
			details: [
				'Nationally ranked public school',
				"Member of the inaugural Whitney Young Men's Lacrosse Team",
				"Lacrosse Chicago City Champion '14"
			],
			extra: 'Top 30 Ranked Public High School in America',
			link:
				'https://www.businessinsider.com/best-public-high-schools-in-america-2017-8#6-whitney-m-young-magnet-high-school-chicago-il-20'
		}
	]
};

const UNIVERSITY = {
	schools: [
		{
			imageSrc: AMHLogo,
			title: 'Amherst College',
			description: 'Amherst, MA',
			date: "'19",
			details: [
				'Double majoring in Mathematics, Computer Science',
				"Forward on the NCAA Men's Ice Hockey Team",
				'Member of: Computer Science Club, Artificial Intelligence Club, Amherst Leads',
				'Relevant Math Coursework: Discrete Mathematics, Linear Algebra, Abstract Algebra',
				'Relelvant CS Coursework: Data Structures & Algorithms, Artificial Intelligence, Machine Learning, Networks'
			],
			extra: "Candidate for Bachelor of Arts '19",
			link: 'https://www.usnews.com/best-colleges/amherst-college-2115/overall-rankings'
		}
	]
};

export default {
	HIGH_SCHOOL,
	UNIVERSITY
};
