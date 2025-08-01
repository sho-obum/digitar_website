"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { NewNav } from "@/components/NewNav";
import { CallToAction } from "@/components/CallToAction";

const page = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹80k - ₹120k",
      description: "Build beautiful, responsive user interfaces using React, Next.js, and modern web technologies.",
      requirements: [
        "5+ years of React/Next.js experience",
        "Strong TypeScript skills",
        "Experience with Tailwind CSS",
        "Knowledge of modern build tools"
      ]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / US",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹70k - ₹100k",
      description: "Create stunning user experiences and interfaces that delight our users and drive business growth.",
      requirements: [
        "Proficiency in Figma and Adobe Creative Suite",
        "Strong portfolio of web/mobile designs",
        "Understanding of design systems",
        "Experience with prototyping tools"
      ]
    },
    {
      id: 3,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote / US",
      type: "Full-time",
      experience: "4-6 years",
      salary: "₹90k - ₹140k",
      description: "Build scalable APIs and backend services that power our applications and serve millions of users.",
      requirements: [
        "Strong Node.js/Python experience",
        "Database design and optimization",
        "Cloud platforms (AWS/GCP)",
        "API design and development"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹85k - ₹125k",
      description: "Manage our cloud infrastructure and deployment pipelines to ensure reliable, scalable systems.",
      requirements: [
        "Experience with Docker and Kubernetes",
        "CI/CD pipeline management",
        "Cloud infrastructure (AWS/Azure)",
        "Monitoring and logging tools"
      ]
    },
   
  ];

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] relative">
      <NewNav />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 mt-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We're building the future of digital experiences. Join us and help create amazing products that impact millions of users worldwide.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Side - Photo with Glow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl h-fit">
                <h2 className="text-2xl font-semibold text-white mb-6">Why Join Us?</h2>
                
                {/* Photo Container with Glow Effect */}
                <div className="relative mb-8">
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Placeholder for your photo */}
                    <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                      {/* <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v10l4-4 4 4V8" />
                          </svg>
                        </div>
                        <p className="text-gray-400 text-sm">Your team photo will go here</p>
                      </div> */}
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl -z-10"></div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Remote-first culture</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Competitive salary & equity</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Health & wellness benefits</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Learning & development</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-600 to-pink-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Flexible time off</span>
                  </div>
                </div>

                {/* Culture Note */}
                <div className="mt-8 p-4 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl">
                  <h4 className="text-white font-semibold mb-2">Our Culture</h4>
                  <p className="text-gray-300 text-sm">
                    We believe in fostering creativity, encouraging innovation, and supporting each other's growth in a collaborative environment.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Job Openings */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold text-white mb-8">Open Positions</h2>
                
                {/* Job Listings */}
                <div className="space-y-6">
                  {jobOpenings.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full">
                              {job.department}
                            </span>
                            <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full">
                              {job.location}
                            </span>
                            <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full">
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-300 text-sm">{job.experience}</p>
                          <p className="text-white font-semibold">{job.salary}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      
                      {/* Expanded Details */}
                      {selectedJob === job.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-white/10 pt-4 mt-4"
                        >
                          <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                          <ul className="space-y-2 mb-6">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-purple-500/25"
                          >
                            Apply for this position
                          </motion.button>
                        </motion.div>
                      )}
                      
                      {/* Expand/Collapse Indicator */}
                      <div className="flex justify-center mt-4">
                        <motion.div
                          animate={{ rotate: selectedJob === job.id ? 180 : 0 }}
                          className="w-6 h-6 text-gray-400"
                        >
                          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 text-center">
                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6">
                    <h3 className="text-white font-semibold mb-2">Don't see your role?</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
                    >
                      Submit General Application
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom spacing */}
          <div className="mt-20">
            {/* Additional content space */}
          </div>
        </div>
      </div>
      <CallToAction/>
    </div>
  );
};

export default page;
