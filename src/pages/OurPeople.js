import React, { useState } from 'react';
import '../styles/Ourpeople.css';
import { FaLinkedin } from "react-icons/fa";

const OurPeople = () => {

  const [selectedPerson, setSelectedPerson] = useState(null);

  const leadership = [
    {
      id: 1,
      name: 'Radhika Reddy',
      role: 'Director',
      image: '/images/team/radhika-reddy.png',
      linkedin: 'https://linkedin.com/in/radhika-panchadara-36853626',
      description: 'An experienced technology professional currently serving as Director at Metavara Technologies Private Limited, leading initiatives in software development and emerging technologies. Previously worked as a Quality Test Engineer in a multinational company, gaining strong expertise in software quality assurance and process improvement. Earlier, served as an Assistant Professor at Malla Reddy Engineering College for over four years, contributing to academic excellence and mentoring engineering students in technical subjects. Combines industry and academic experience to drive innovation, quality, and growth in the technology domain.'
    },
  ];

    const coreTeam = [
    {
      id: 101,
      name: 'Sai Mohan Gorrela',
      role: 'Python Developer',
      image: '/images/team/sai-mohan-gorrela.png',
      linkedin: 'https://linkedin.com/',
      description: 'Python developer specializing in backend APIs and scalable applications.'
    },

    {
      id: 102,
      name: 'Varalakshmi Singiri',
      role: 'Python Developer',
      image: '/images/team/varalakshmi-singiri.png',
      linkedin: 'https://linkedin.com/in/varalakshmi090/',
      description: 'Experienced Python developer focused on enterprise automation An independent and self-motivated Under graduate with Problem-solving skills and I’m passionate about exploring the ways that technology can provide practical solutions to everyday problems and pursuing a challenging career and being part of a progressive organization that gives me scope to enhance my knowledge and skills.'
    },

    { id: 104, 
      name:'MOHAMMAD IMTHIYAZ', 
      role:'Python Developer',
       image: '/images/team/mohammad-imthiyaz.png', 
       linkedin: 'https://linkedin.com/in/yerragudi-mohammad-imthiyaz-3aa876288?/',
      description: 'Experienced Python developer focused on enterprise automation I am a B.Tech final-year student with hands-on experience in backend development using Django and Django Rest Framework (DRF). I have worked on building RESTful APIs, database design, and API testing using Postman..'
      },

      { id: 103, 
        name: 'Krishna Teja Vemulapalli',
         role: 'Python Developer',
         image: '/images/team/Krishna-Teja-Vemulapalli.jpeg',
         linkedin: 'https://linkedin.com/in/krishnatejavemulapalli?',
      description: 'Krishna works as an Associate Software Engineer at Metavara Technologies, contributing to the design, development, and optimization of scalable software solutions. With a strong foundation in software engineering principles, he is involved in the complete development lifecycle, including requirement analysis, implementation, testing, and performance enhancement. He collaborates effectively with cross-functional teams to deliver reliable, efficient, and user-focused applications while ensuring clean, maintainable code. Committed to continuous learning and innovation, also consistently adopts modern technologies and best practices to support organizational growth and technical excellence.'
     },

     { id: 105,
       name: 'Prajwal M', 
      role: 'Python Developer', 
      image: '/images/team/prajwal-m.png',
     linkedin: 'https://linkedin.com/',
      description: 'Experienced Python developer focused on enterprise automation.'
     },

     // React JS Developers 
     { id: 201,
       name: 'Anil Kumar Reddy N', 
      role: 'ReactJs Developer', 
      image: '/images/team/anil-kumar-reddy.jpeg',
       linkedin: 'https://linkedin.com/',
      description: 'Experienced ReactJs developer focused on enterprise automation.'
     },

     { id: 202,
       name: 'Neerajakshulu Ambati', 
      role: 'ReactJs Developer', 
      image: '/images/team/neerajakshulu-ambati.jpeg', 
      linkedin: 'https://linkedin.com/in/neerajakshulu-ambati-aa5773126?',
      description: 'Experienced ReactJs developer focused on enterprise automation To work in a dynamic environment that enables me to utilize my Knowledge and learn new things, and to progress professionally and personally..'
    },

    { id: 203,
       name: 'Shradha Mathpati', 
      role: 'ReactJs Developer', 
      image: '/images/team/shradha-mathpati.jpeg', 
      linkedin: 'https://linkedin.com/',
      description: 'Experienced ReactJs developer focused on enterprise automation.'
    },

    { id: 204, 
      name: 'Pallavi Biradar', 
      role: 'ReactJs Developer', 
      image: '/images/team/pallavi-biradar.png', 
    linkedin: 'https://linkedin.com/',
      description: 'Experienced ReactJs developer focused on enterprise automation.'
    },

    { id: 206, 
      name: 'Guruswamy',
       role: 'ReactJs Developer', 
       image: '/images/team/guruswamy.png', 
      linkedin: 'https://linkedin.com/in/guruswamy-913a64217',
      description: 'I am currently working at Metavara Technologies as a React Developer, contributing to the development of modern, responsive, and user-friendly web applications. I specialize in building reusable UI components, optimizing frontend performance, and implementing scalable solutions using React, HTML, CSS, and JavaScript.'
    },

      { id: 207,
         name: 'Ramya Reddy K', 
        role: 'ReactJs Developer', 
        image: '/images/team/ramya-reddy-k.png',
      linkedin: 'https://linkedin.com/',
      description: 'Experienced ReactJs developer focused on enterprise automation.'
     },


     { id: 301, 
      name: 'Praneetha Garladinne', 
      role: 'Fullstack Developer',
       image: '/images/team/praneetha-garladinne.jpeg', 
       linkedin: 'https://linkedin.com/',
      description: 'Experienced Fullstack Developerfocused on enterprise automation.'
      }, 
      
      { id: 302, 
        name: 'Mahammad Shareef', 
        role: 'Fullstack Developer', 
        image: '/images/team/shaik-mahammad-shareef.png', 
        linkedin: 'https://linkedin.com/',
      description: 'Experienced Fullstack Developer focused on enterprise automation.'
      
      }, 
        
        { id: 303, 
          name: 'Hemanth K', 
          role: 'DevOps Engineer', 
          image: '/images/team/hemanth-k.png', 
          linkedin: 'https://linkedin.com/',
      description: 'Experienced DevOps Engineer focused on enterprise automation.'
        }, 
        { id: 304, 
          name: 'Akshatha G K', 
          role: 'DevOps Engineer', 
          image: '/images/team/akshatha-g-k.png', 
          linkedin: 'https://linkedin.com/',
         description: 'Experienced DevOps Engineer focused on enterprise automation.'
        }, 
        
        { id: 305, 
          name: 'Krishnaveni Linga', 
          role: 'DevOps Engineer', 
          image: '/images/team/krishnaveni-linga.png',
          linkedin: 'https://linkedin.com/in/krishnaveni-linga-806314291/',
         description: 'Experienced DevOps Engineer focused on enterprise automation I focus on building and managing cloud-native infrastructure, automating workflows, and improving system reliability. Passionate about learning new tools and applying DevOps best practices in real-world projects..'
         }, 
         
         { id: 306, 
          name: 'Anjaneyulu U',
           role: 'DevOps Engineer',
            image: '/images/team/anjaneyulu-u.png', 
            linkedin: 'https://linkedin.com/in/anji-ullithula-a24bb726a?/',
           description: 'Experienced DevOps Engineer focused on enterprise automation 4+ years of Experience in DevOps, Infrastructure and Hosting based 24X7 support environment. Seeking a Technical position fully utilizing strong customer service attitude, exceptional organizational ability, and technical skills..'
          
          }, 
          
          { id: 307,
             name: 'Manoj Bacha', 
             role: 'DevOps Engineer',
              image: '/images/team/manoj-bacha.png', 
              linkedin: 'https://linkedin.com/',
              description: 'Experienced DevOps Engineer focused on enterprise automation.'
            }, 
            
            { id: 308,
               name: 'Sowmya Reddy',
                role: 'Scrum Master', 
                image: '/images/team/sowmya-reddy.png', 
                linkedin: 'https://linkedin.com/',
                 description: 'Experienced Scrum Master focused on enterprise automation.'
              },
              
              { id: 309,
                 name: 'Savitha N',
                  role: 'Quality Analyst', 
                  image: '/images/team/savitha-n.png', 
                  linkedin: 'https://linkedin.com/in/savitha-n27',
                  description: 'Experienced Quality Analyst focused on enterprise automation.'
                }, 
                
                { id: 310, 
                  
                  name: 'HemaSree Kodaganti', 
                  role: 'HR', 
                  image: '/images/team/hemasree-kodaganti.png', 
                  linkedin: 'https://linkedin.com/',
                   description: 'Experienced HR focused on enterprise automation and Functional Testing, Regression Testing, Smoke and Sanity Testing Integration Testing.'

                }, 
                
                { id: 311,
                   name: 'Rajani G',
                    role: 'Quality Analyst', 
                    image: '/images/team/rajani-g.png', 
                    linkedin: 'https://linkedin.com/',
                     description: 'Experienced Quality Analyst focused on enterprise automation.'
                  
                  },

  ];

  const renderTeamGrid = (members) => (
    <div className="leadership-grid">
      {members.map((person) => (
        <div
  key={person.id}
  className="leader-card"
  onClick={() => setSelectedPerson(person)}
>
  <div className="leader-image-container">
    <img
      src={person.image}
      alt={person.name}
      className="leader-image"
    />
    <div className="image-corner-icon">⛶</div>
  </div>

  <div className="leader-info">
    <h3>{person.name}</h3>
    <p>{person.role}</p>
  </div>
</div>

      ))}
    </div>
  );

  return (
    <div className="content-section">

      {/* PROFILE VIEW */}
      {selectedPerson ? (
        <div className="profile-wrapper">

          <div className="profile-left">
            <h1>{selectedPerson.name}</h1>
            <h3>{selectedPerson.role}</h3>

            <a
              href={selectedPerson.linkedin}
              target="_blank"
              rel="noreferrer"
              className="linkedin-icon"
            >
              <FaLinkedin />
            </a>

            <hr />

            <p>{selectedPerson.description}</p>

            <button className="back-btn" onClick={() => setSelectedPerson(null)}>
              ← Back to Team
            </button>
          </div>

          <div className="profile-right">
            <img src={selectedPerson.image} alt={selectedPerson.name} />
          </div>

        </div>
      ) : (
        <>
          <h1>Our People</h1>
          <p>
            At Metavara Technologies, our strength lies in our people. We are a diverse team of
            innovators, engineers, and strategists united by a passion for technology and a commitment
            to excellence.
          </p>

          <h2>Leadership Team</h2>
          {renderTeamGrid(leadership)}

          <h2 style={{ marginTop: '3rem' }}>Core Team</h2>
          {renderTeamGrid(coreTeam)}
        </>
      )}

    </div>
  );
};

export default OurPeople;
