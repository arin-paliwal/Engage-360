import React from 'react';
import { ArrowLeft, Edit, Calendar, Building, Briefcase, MapPin } from 'lucide-react';

export default function JobDescription() {
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <header className="mb-6">
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span>Back to Job List</span>
        </button>
        <h1 className="text-2xl font-bold mt-4">UI/UX Designer</h1>
      </header>

      <nav className="flex border-b mb-6">
        <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-medium">
          Job Description
        </button>
        <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
          Candidates
        </button>
      </nav>

      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-grow">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Job Description</h2>
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <Edit className="w-4 h-4 mr-1" />
                <span>Description</span>
              </button>
            </div>

            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">About Company</h3>
              <p className="text-gray-600">
                We craft digital products for business and user goals. Help find solutions with UI / UX designs that are intuitive and in accordance with client business goals. We provide a high-quality service in UI/UX Design & Development. We craft digital products for businesses in achieving user goals by providing intuitive solutions. We have worked with a vast number of clients who have different backgrounds such as construction, insurance, health, marketing, cryptocurrency, stocks, games, startup, real estate and many others.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">What you'll do</h3>
              <p className="text-gray-600 mb-2">Areas you could work on:</p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Work as a User Interface Designer for our B2B SaaS product along with stakeholders</li>
                <li>Translate client briefs into a clear, user-friendly interface design and interactions. Develop both low and high-fidelity mockups.</li>
                <li>Testing and design assumptions and usability level of your design. Validate your design decisions through user feedback, iterate your designs based on this feedback, and meticulously document the process.</li>
                <li>Work closely with a team of project managers, client stakeholders, researchers, and content designers.</li>
                <li>Conduct user research and evaluate user feedback</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>A mid level product designer with min. 3 years of experience.</li>
                <li>A designer with a strong UX and UI portfolio that demonstrates problem-solving skills, design methods, and software proficiency.</li>
                <li>An organized designer that always documents their works, Figma files, and research reports.</li>
                <li>Comfortable with fast-paced work environments, context switching, and excited to drive the projects forwards.</li>
                <li>Able to explain your design process, outcome, and decisions that you've made.</li>
                <li>A proactive, solution-oriented person who is proactive and willing to learn and who seeks growth in every aspect of this job.</li>
                <li>Able to work independently and is a reliable teammate even in a remote working setting.</li>
              </ul>
            </section>
          </div>

          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Perks and benefits</h2>
            <p className="text-gray-600">
              [Content for perks and benefits would go here]
            </p>
          </div>
        </main>

        <aside className="lg:w-1/3">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Job Overview</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Calendar className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Active until</p>
                  <p className="font-medium">Jan 31, 2024</p>
                </div>
              </li>
              <li className="flex items-start">
                <Building className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Department Type</p>
                  <p className="font-medium">Design</p>
                </div>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Job Type</p>
                  <p className="font-medium">Full-time</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-medium">Onsite Indonesia, Jakarta</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

