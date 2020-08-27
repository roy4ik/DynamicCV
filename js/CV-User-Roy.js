console.log("CvSection loaded")

// Classes for CV Sections
experience = {
    sectionName: "Experience",
    company1: {
        companyName: "Cornerstone OnDemand",
        position1: {
            title: "Solution Consultant",
            properties: {
                year: {
                    start: [2019, 10],
                    end: [2020, 3],
                },
                sectionName: "Skills",
                skills: ["HTML", "CSS", "Java-Script", "Pre-Sales", "Sales", "Public-Speaking", "Project-Management"],
                description: "",
            }
        },
        position2: {
            title: "Dedicated Product Support Specialist",
            properties: {
                year: {
                    start: [2017, 03],
                    end: [2019, 10],
                },
                sectionName: "Skills",
                skills: ["HTML", "CSS", "Java-Script", "Pre-Sales", "Sales", "Public-Speaking", "Project-Management", "Mentoring", "Technical Support", "LMS", "EPM", "ATS", "SCM", "CMS", "Salesforce", "Extensive knowledge in API debugging", "Managing of client relations and client enablement", "Technical troubleshooting and analysis", "Proficient knowledge of 'Jira' and 'Salesforce' solutions", "Successful delivery of product release projects", "Dedicated mentor for new hires"],
                description: "",
            }
        },
    },
    company2: {
        companyName: "Knesset - The Parliament of Israel",
        position1: {
            title: "Tour guide and diplomatic reception",
            year: {
                start: [2015, 8],
                end: [2016, 2],
            },
            sectionName: "Skills",
            skills: ["Public Speaking", "Proficient knowledge of diplomatic language and representation"],
            description: "",
        },
    },
    company3: {
        companyName: "Gaming VC Corporation Limited",
        position1: {
            title: "Customer and technical support",
            year: {
                start: [2012, 8],
                end: [2013, 12],
            },
            sectionName: "Skills",
            skills: ["Proficient customer relation skills", "Customer-Service", "Client Relations"],
            description: "",
        },
    },
    company4: {
        companyName: "Military Service - Air Force (IAF)",
        position1: {
            title: "Combat Soldier - Arial Defense",
            year: {
                start: [2011, 10],
                end: [2012, 8],
            },
            sectionName: "Skills",
            skills: [],
            description: "Honourably discharged due to injury",
        },

    },
    company5: {
        companyName: "Freelancer",
        position1: {
            title: "Web Designer",
            year: {
                start: [2007, 8],
                end: [201, 11],
            },
            sectionName: "Skills",
            skills: ["HTML", "PHP", "CSS", "SQL", "Adobe - Photoshop"],
            description: "",
        },
        position2: {
            title: "Snowboarding Instructor",
            year: {
                start: [2006, 11],
                end: [2011, 1],
            },
            sectionName: "Skills",
            skills: "",
            description: "",
        },
    },
}


education = {
    sectionName: "Education",
    academia: {
        school: {
            name: "Interdisciplinary Center Herzeliya, International track - R.R.I.S",
            degree1: {
                title: "B.A.in Government studies",
                specialisation: ["Specialization in Global Affairs and Conflict Resolution", "Specialization in Business Administration", "Certificate in European Studies", "Model UN"],
                "year": {
                    start: [2006, 11],
                    end: [2011, 1],
                },
                description: "",
            },

        },
    },
    professionalTraining: {
        sectionName: "Professional Training",
        school: {
            name: "Developers.Institute",
            degree1: {
                title: "Full Stack - Python Bootcamp",
                year: {
                    start: [2020, 8],
                    end: [2020, 10],
                },
                skills: ["HTML", "CSS", "Python", "Java-Script", "Bootstrap", "OOP", "Databases", "Mongo-DB", "Django", "OOP"],
                description: "",
            },
        },
        school: {
            name: "Codecademy",
            degree1: {
                title: "SQL: Table Transformation",
                year: {
                    start: [2018, 5],
                    end: [2018, 5],
                },
                skills: ["SQL"],
                description: "",
            },
            degree2: {
                title: "SQL: Analysising Business Metric",
                year: {
                    start: [2018, 5],
                    end: [2018, 5],
                },
                skills: ["SQL"],
                description: "",
            },
            degree3: {
                title: "Learn Swift",
                year: {
                    start: [2020, 1],
                    end: [2018, 1],
                },
                skills: ["Swift"],
                description: "",
            },
            degree4: {
                title: "Responsive Design",
                year: {
                    start: [2020, 1],
                    end: [2018, 1],
                },
                skills: ["Responsive Design", "HTML", "CSS"],
                description: "",
            },
            degree5: {
                title: "Learn CSS",
                year: {
                    start: [2020, 1],
                    end: [2018, 1],
                },
                skills: ["Responsive Design", "HTML", "CSS"],
                description: "",
            },
            degree6: {
                title: "Learn HTML",
                year: {
                    start: [2020, 1],
                    end: [2018, 1],
                },
                skills: ["Responsive Design", "HTML", "CSS"],
                description: "",
            },
            degree7: {
                title: "Learn React.Js",
                year: {
                    start: [2020, 4],
                    end: [2018, 4],
                },
                skills: ["Responsive Design", "Java-Script", "React", "HTML", "CSS"],
                description: "",
            },
        },
        school: {

            name: "Cyber U",
            degree1: {
                title: "Agile Planning and Estimation",
                year: {
                    start: [2018, 6],
                    end: [2018, 8],
                },
                skills: ["Agile", "Scrum", "Project Management"],
                description: "",
            },
            degree2: {
                title: "The Client Lifecycle: Solution Consulting Demonstrations",
                year: {
                    start: [2019, 10],
                    end: [2019, 11],
                },
                skills: ["Consulting", "Pre-Sales", "Solution Consulting"],
                description: "",
            },
        },
    },
}
skills = {
    skills: {
        sectionName: "Skills",
        soft: ["Product Analysis", "Project Management", "Agile", "Scrum", "Troubleshooting", "UX/UI design", "Consulting", "Feature Definition", "Problem Solving", "Decision Making", "Mentoring", "Leadership"],
        hard: ["Java-Script", "Bootstrap", "OOP", "HTML", "Bootstrap", "React", "JSX", "XML", "JSON", "API", "Salesforce", "C", "C#", "Cornerstone Suites"],
    },
    languages: {
        sectionName: "Languages",
        languages: [
            "German" ["Native"],
            "English" ["Native"],
            "Swiss-German" ["Native"],
            "French" ["Intermediate"],
            "Hebrew" ["Intermediate"],
        ],
    }
}
profile = {
    sectionName: "Profile",
    description: "A highly experienced and technical product specialist and consultant with a track record of converting client’s needs into working solutions.",
}