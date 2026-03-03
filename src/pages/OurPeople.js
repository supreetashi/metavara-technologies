import React, { useState, useEffect, useRef } from 'react';
import '../styles/Ourpeople.css';
import { FaLinkedin, FaPython, FaReact, FaLayerGroup, FaTasks, FaCheckCircle, FaUserTie } from "react-icons/fa";
import { SiDocker } from "react-icons/si";


const roleConfig = {
  'Python Developer': { icon: <FaPython />, color: '#3776AB', label: 'Python' },
  'ReactJs Developer': { icon: <FaReact />, color: '#61DAFB', label: 'React' },
  'Fullstack Developer': { icon: <FaLayerGroup />, color: '#6c63ff', label: 'Fullstack' },
  'DevOps Engineer': { icon: <SiDocker />, color: '#2496ED', label: 'DevOps' },
  'Scrum Master': { icon: <FaTasks />, color: '#f97316', label: 'Scrum' },
  'Quality Analyst': { icon: <FaCheckCircle />, color: '#22c55e', label: 'QA' },
  'HR': { icon: <FaUserTie />, color: '#a855f7', label: 'HR' },
  'Director': { icon: <FaUserTie />, color: '#1565c0', label: 'Director' },
};

const OurPeople = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const leadership = [
    {
      id: 1,
      name: 'Radhika Reddy',
      role: 'Director',
      image: '/images/team/radhika-reddy.png',
      linkedin: 'https://linkedin.com/in/radhika-panchadara-36853626',
      accent: '#1565c0',
      description: 'An experienced technology professional currently serving as Director at Metavara Technologies Private Limited, leading initiatives in software development and emerging technologies. Previously worked as a Quality Test Engineer in a multinational company, gaining strong expertise in software quality assurance and process improvement. Earlier, served as an Assistant Professor at Malla Reddy Engineering College for over four years, contributing to academic excellence and mentoring engineering students in technical subjects.'
    },
  ];

  const coreTeam = [
    {
      id: 101,
      name: 'Sai Mohan Gorrela',
      role: 'Python Developer',
      image: '/images/team/sai-mohan-gorrela.png',
      linkedin: 'https://linkedin.com/',
      accent: '#1565c0',
      description: 'Python developer specializing in backend APIs and scalable applications.'
    },


    {

      id: 102,
      name: 'Varalakshmi Singiri',
      role: 'ReactJs Developer',
      image: '/images/team/varalakshmi-singiri.png',
      linkedin: 'https://linkedin.com/in/varalakshmi090/',
      accent: '#0097a7',
      description: 'React Developer specializing in reusable UI components and optimizing frontend performance. Self-motivated graduate with strong problem-solving skills.'

    },

    {

      id: 103,
      name: 'Krishna Teja Vemulapalli',
      role: 'Python Developer',
      image: '/images/team/Krishna-Teja-Vemulapalli.jpeg',
      linkedin: 'https://linkedin.com/in/krishnatejavemulapalli?',
      accent: '#01579b',
      description: 'Associate Software Engineer at Metavara Technologies, contributing to design, development, and optimization of scalable software solutions.'

    },

    {

      id: 105,
      name: 'Prajwal M',
      role: 'Python Developer',
      image: '/images/team/prajwal-m.png',
      linkedin: 'https://linkedin.com/',
      accent: '#1976d2',
      description: 'Experienced Python developer focused on enterprise automation.'
    },

    {
      id: 201,
      name: 'Anil Kumar Reddy N',
      role: 'ReactJs Developer',
      image: '/images/team/anil-kumar-reddy.jpeg',
      linkedin: 'https://linkedin.com/',
      accent: '#006064', description: 'Experienced ReactJs developer focused on enterprise automation.'
    },
    {
      id: 202,
      name: 'Neerajakshulu Ambati',
      role: 'ReactJs Developer',
      image: '/images/team/neerajakshulu-ambati.jpeg',
      linkedin: 'https://linkedin.com/in/neerajakshulu-ambati-aa5773126?',
      accent: '#00838f',
      description: 'Experienced ReactJs developer. Passionate about learning new things in a dynamic environment.'
    },

    {
      id: 203,
      name: 'Shradha Mathpati',
      role: 'ReactJs Developer',
      image: '/images/team/shradha-mathpati.jpeg',
      linkedin: 'https://linkedin.com/',
      accent: '#00695c',
      description: 'Experienced ReactJs developer focused on enterprise automation.'

    },
    {
      id: 204,
      name: 'Pallavi Biradar',
      role: 'ReactJs Developer',
      image: '/images/team/pallavi-biradar.png',
      linkedin: 'https://linkedin.com/',
      accent: '#004d61',
      description: 'Experienced ReactJs developer focused on enterprise automation.'

    },
    {
      id: 206,
      name: 'Guruswamy',
      role: 'ReactJs Developer',
      image: '/images/team/guruswamy.png',
      linkedin: 'https://linkedin.com/in/guruswamy-913a64217',
      accent: '#0097a7',
      description: 'React Developer specializing in reusable UI components and optimizing frontend performance.'

    },

    {
      id: 207,
      name: 'Ramya Reddy K',
      role: 'ReactJs Developer',
      image: '/images/team/ramya-reddy-k.png',
      linkedin: 'https://linkedin.com/',
      accent: '#00796b',
      description: 'Experienced ReactJs developer focused on enterprise automation.'
    },

    {
      id: 208,
      name: 'Supreet Ashi',

      role: 'ReactJs Developer',
      image: '/images/team/supreet.png',

      linkedin: 'https://linkedin.com/in/supreet-a-809b0a223?',
      accent: '#00796b',
      description: 'Experienced ReactJs developer focused on enterprise automation and Aspiring Full Stack Developer. HTML, CSS,  JavaScript, Java, Hibernate, Spring Boot, Node.js, MySQL. Passionate About Building Clean & Scalable Applications.'
    },

    {
      id: 301,
      name: 'Praneetha Garladinne',
      role: 'Fullstack Developer',
      image: '/images/team/praneetha-garladinne.jpeg',
      linkedin: 'https://linkedin.com/',
      accent: '#6c63ff',
      description: 'Experienced Fullstack Developer focused on enterprise automation.'
    },

    {
      id: 302,
      name: 'Mahammad Shareef',
      role: 'Fullstack Developer',
      image: '/images/team/shaik-mahammad-shareef.png',
      linkedin: 'https://linkedin.com/',
      accent: '#6c63ff',
      description: 'Experienced Fullstack Developer focused on enterprise automation.'
    },
    {
      id: 303,
      name: 'Hemanth K',
      role: 'DevOps Engineer',
      image: '/images/team/hemanth-k.png',
      linkedin: 'https://linkedin.com/',
      accent: '#2496ED',
      description: 'Experienced DevOps Engineer focused on enterprise automation.'
    },
    {
      id: 304,
      name: 'Akshatha G K',
      role: 'DevOps Engineer',
      image: '/images/team/akshatha-g-k.png',
      linkedin: 'https://linkedin.com/',
      accent: '#2496ED',
      description: 'Experienced DevOps Engineer focused on enterprise automation.'
    },
    {
      id: 305,
      name: 'Krishnaveni Linga',
      role: 'DevOps Engineer',
      image: '/images/team/krishnaveni-linga.png',
      linkedin: 'https://linkedin.com/in/krishnaveni-linga-806314291/',
      accent: '#2496ED',
      description: 'DevOps Engineer focused on cloud-native infrastructure and automating workflows.'
    },

    {
      id: 306,
      name: 'Anjaneyulu U',
      role: 'DevOps Engineer',
      image: '/images/team/anjaneyulu-u.png',
      linkedin: 'https://linkedin.com/in/anji-ullithula-a24bb726a?/',
      accent: '#2496ED',
      description: '4+ years of Experience in DevOps, Infrastructure and Hosting based 24X7 support.'
    },

    {
      id: 307,
      name: 'Manoj Bacha',
      role: 'DevOps Engineer',
      image: '/images/team/manoj-bacha.png',
      linkedin: 'https://linkedin.com/',
      accent: '#2496ED',
      description: 'Experienced DevOps Engineer focused on enterprise automation.'
    },

    {
      id: 308,
      name: 'Sowmya Reddy',
      role: 'Scrum Master',
      image: '/images/team/sowmya-reddy.png',
      linkedin: 'https://linkedin.com/',
      accent: '#f97316',
      description: 'Experienced Scrum Master focused on enterprise automation.'

    },
    {
      id: 309,
      name: 'Savitha N',
      role: 'Quality Analyst',
      image: '/images/team/savitha-n.png',
      linkedin: 'https://linkedin.com/in/savitha-n27',
      accent: '#22c55e',
      description: 'Experienced Quality Analyst focused on enterprise automation.'
    },

    {
      id: 310,
      name: 'HemaSree Kodaganti',
      role: 'HR',
      image: '/images/team/hemasree-kodaganti.png',
      linkedin: 'https://linkedin.com/',
      accent: '#a855f7',
      description: 'Experienced HR focused on Functional Testing, Regression Testing, Smoke and Sanity Testing.'
    },
    {
      id: 311,
      name: 'Rajani G',
      role: 'Quality Analyst',
      image: '/images/team/rajani-g.png',
      linkedin: 'https://linkedin.com/',
      accent: '#22c55e',
      description: 'Experienced Quality Analyst focused on enterprise automation.'

    },

  ];

  const AnimatedCard = ({ person, index, onClick }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const config = roleConfig[person.role] || roleConfig['Director'];

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(true); },
        { threshold: 0.12 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className={`leader-card ${visible ? 'card-visible' : 'card-hidden'}`}
        style={{
          '--accent': person.accent,
          '--accent-light': hexToRgba(person.accent, 0.10),
          '--accent-mid': hexToRgba(person.accent, 0.18),
          '--icon-color': config.color,
          '--icon-bg': hexToRgba(config.color, 0.12),
          animationDelay: `${(index % 4) * 90}ms`,
        }}
        onClick={() => onClick(person)}
      >

        <div className="image-corner-icon">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 5V1H5" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 1H13V5" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 9V13H9" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 13H1V9" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>


        <div className="square-photo-wrap">
          <img src={person.image} alt={person.name} className="square-photo" />

          <div className="tech-icon-badge" title={config.label}>
            {config.icon}
          </div>
        </div>


        <div className="leader-info">
          <h3>{person.name}</h3>
          <span className="role-tag">
            <span className="role-icon">{config.icon}</span>
            {person.role}
          </span>
        </div>
      </div>
    );
  };

  const renderTeamGrid = (members) => (
    <div className="leadership-grid">
      {members.map((person, index) => (
        <AnimatedCard
          key={`${person.id}-${index}`}
          person={person}
          index={index}
          onClick={setSelectedPerson}
        />
      ))}
    </div>
  );

  return (
    <div className="content-section">
      {selectedPerson ? (
        <div className="profile-wrapper">
          <div className="profile-left">
            <div className="profile-photo-square" style={{ '--accent': selectedPerson.accent }}>
              <img src={selectedPerson.image} alt={selectedPerson.name} />
              <div className="profile-tech-badge">
                {(roleConfig[selectedPerson.role] || roleConfig['Director']).icon}
              </div>
            </div>

            <h1>{selectedPerson.name}</h1>
            <h3 style={{ color: selectedPerson.accent }}>{selectedPerson.role}</h3>

            <a href={selectedPerson.linkedin} target="_blank" rel="noreferrer" className="linkedin-icon">
              <FaLinkedin />
            </a>

            <hr />
            <p>{selectedPerson.description}</p>

            <button className="back-btn" onClick={() => setSelectedPerson(null)}>
              ← Back to Team
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="page-header">
            <h1>Our People</h1>
            <p>
              At Metavara Technologies, our strength is our people. We are a team of professionals from different backgrounds, working together with a strong commitment to technology and quality.
            </p>
          </div>

          <div className="section-block">
            <h2>Leadership Team</h2>
            {renderTeamGrid(leadership)}
          </div>

          <div className="section-block">
            <h2>Core Team</h2>
            {renderTeamGrid(coreTeam)}
          </div>
        </>
      )}
    </div>
  );
};

export default OurPeople;
