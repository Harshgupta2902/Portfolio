"use client"
import { useState } from "react";
 
const projects = [
  {
    title: 'Gradding App',
    description: 'Gradding is a Flutter-based mobile application designed to assist students who aspire to study abroad. It provides comprehensive guidance and resources, making the process smoother and more organized',
    imageUrl: 'https://gradding.s3.ap-south-1.amazonaws.com/website-images/uploads/images/media/ogimage-674e.png',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.gradding&hl=en-IN'
  },
  {
    title: 'Course Finder',
    description: 'Developed by Gradding, for students to find Courses for their overseas education. On this app, you will get easy access to 70000+ Courses in 800+ universities of 8+ countries',
    imageUrl: 'https://play-lh.googleusercontent.com/59QdYRw6Fiv1YCThqAZwhoyi5DKUQ_1d7ApJ85UWfHuZtCzWn4N2LUs-6BXcbGGWIwc=w416-h235-rw',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.gradding.finder&hl=en_IN',
  },
  {
    title: 'College Predictor',
    description: 'Developed by Gradding for students to find their dream university for overseas education. On this app, you will get easy access to 800+ universities in 8+ countries',
    imageUrl: 'https://play-lh.googleusercontent.com/vesmOnDN2G8sbWoKp9RNr2g5fVrRkwQv3b0Q6VEXt7FO3ts50FZ9ux40x02YMYc_vFw=w416-h235-rw',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.gradding.predictor&hl=en_IN',
  },
 {
    title: 'IELTS Preparation',
    description: 'Developed by Gradding for students who are specifically tailored for IELTS, PTE, GMAT, SAT, and ACT exams. It provides necessary preparation materials, practice tests, and personalized learning plans to excel in these standardized tests for the students',
    imageUrl: 'https://play-lh.googleusercontent.com/3cuds4ge2Fke7yJXn7HsTnr7zdcDVoIo7SC3ICotTY005Yy7k6mtS2ssROAx3vBE3g=w416-h235-rw',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.gradding.ieltsprep&hl=en-IN',
  },
  {
    title: 'MySIP Online',
    description: 'Mysiponline is a popular online platform that allows users to check their SIP (Subscriber Identity Module) balance, recharge, and manage their mobile phone accounts. The website provides a user-friendly interface to access various services, including bill payments, data usage, and call logs',
    imageUrl: 'https://play-lh.googleusercontent.com/rvobt18fxbVYIBbSHh7PtRa0JfhNPD3D3YYaIxLvowcQ7KLs9Tl3dPqjJW6kpAfBrBs=w416-h235-rw',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.mysiponline&hl=en_US',
  },
 {
    title: 'MySIP Calculator',
    description: 'Mysiponline is a popular online platform that allows users to invest and check their SIP. On this App, Calculate your future value of monthly sip investment compounded monthly or annually',
    imageUrl: 'https://play-lh.googleusercontent.com/kWxTSxa9BysbdUkgfZMkgxLuKw3XMYowGE6-cs6j-69cW2uElF-uevlJRTnvCRAiaeg=w416-h235-rw',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.mysiponline.calculator&hl=en_IN',
  },
  {
    title: 'WoodenStreet',
    description: 'The Wooden Street application is an online marketplace that specializes in sourcing authentic, handmade, and unique wooden decorative items from artisans and craftspeople worldwide. Their platform allows users to discover and purchase one-of-a-kind wooden products, such as wooden street art, wooden furniture, and decorative items!',
    imageUrl: 'https://www.woodenstreet.com/images/cover.gif',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.woodenstreet&hl=en_US',
  },
  {
    title: 'Ipo Live GMP',
    description: 'Discover upcoming IPOs, latest mutual fund NAVs, and utilize fintech tools like calculators and PAN verification. All in one sleek, user-friendly platform',
    imageUrl: 'https://play-lh.googleusercontent.com/OfRyja3s146KPKJm8d6yHQ1D6zRVHlohNnUAuGUImANkmOwHsi9fFf4JQluUe0wDXWQ=w416-h235-rw',
    caseStudyUrl: "https://play.google.com/store/apps/details?id=com.ipotec"
  },
   {
    title: 'IpoTec',
    description: 'Discover upcoming IPOs, latest mutual fund NAVs, and utilize fintech tools like calculators and PAN verification. All in one sleek, user-friendly platform',
    imageUrl: 'https://www.ipotec.in/og_image.png',
    caseStudyUrl: "https://ipotec.in"
  },
  {
    title: 'MRP',
    description: 'Global assignment help refers to online academic assistance provided by experts to students worldwide. This type of help is particularly useful for students who are struggling with complex assignments, research papers, or projects. Global assignment help services offer a range of benefits, including timely submissions, improved grades, and enhanced learning outcomes',
    imageUrl: 'https://www.globalassignmenthelp.com/images/og_GAH.jpg',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.globalassignmenthelp&hl=en_US',
  },
  {
    title: 'Winners',
    description: 'The Winners Institute - Indias Best Coaching for. Competitive and Govt. Jobs Exam Preparation',
    imageUrl: '/winners.png',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.winners.institute&hl=en_US',
  },
  {
    title: 'Nemo Chat',
    description: "It's an online voice and video streaming app like YoHo where users can join multiple public groups and also create their own private groups and stream audio and video and create new friend online",
    imageUrl: 'https://play-lh.googleusercontent.com/_ffYdRMVwejEMlW8IfNUR9BS_T3jRWgkJiVvPEoDQUJKfk5pxnzfrTxPeaBgkBM9Ew=w416-h235-rw',
    caseStudyUrl: 'https://play.google.com/store/apps/details?id=com.nemochatapp.tech&hl=en_IN',
  }, 
  {
    title: 'This website ✨',
    description: 'Portfolio website built in Next.js 14 to showcase my projects, experience and resume through a cooler way',
    imageUrl: 'https://nextjs.org/static/blog/next-14/twitter-card.png',
    caseStudyUrl: 'https://harsh29.vercel.app/',
  },
];

const PreviousWork: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div id='previouswork' className="bg-transparent text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-20">Previous Projects</h2>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-[#0a0a0a] project-card"
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.imageUrl} alt={project.title} />
              </div>
              <div className="flex-1 bg-transparent p-6 flex flex-col justify-between pw-bg">
                <div className="flex-1">
                  {project.caseStudyUrl !== '#' ? (
                    <a href={project.caseStudyUrl} target='_blank' rel='noopener noreferrer'>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                        <p
                          className={`mt-3 text-base text-gray-300 description ${hoveredProject === project.title ? 'expand' : 'truncate'}`}
                        >
                          {project.description}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-300">{project.title}</p>
                      <p
                        className={`mt-3 text-base text-gray-300 description ${hoveredProject === project.title ? 'expand' : 'truncate'}`}
                      >
                        {project.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .truncate {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .expand {
    -webkit-line-clamp: unset;
  }
      `}</style>
    </div>
  );
};

export default PreviousWork;
