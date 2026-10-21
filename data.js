// NPTEL Software Engineering (2026) - generated from the assignment PDFs.
// Source of truth: PDFs in /PDFs. Exceptions are clearly flagged in each
// question's `fixes` array (see parse_report.txt for the full audit).
window.SE_DATA = {
 "titles": {
  "1": "Introduction to Software Engineering",
  "2": "Software Life Cycle Models",
  "3": "Agile Development: Scrum & XP",
  "4": "Software Requirements & SRS",
  "5": "Software Design: Cohesion & Coupling",
  "6": "Function-Oriented Design: DFDs & Structured Analysis",
  "7": "Object-Oriented Analysis & UML Modelling",
  "8": "OO Design: Class Relationships & Analysis Objects",
  "9": "Software Testing Fundamentals",
  "10": "Black-Box Testing Techniques",
  "11": "White-Box Coverage & Combinatorial Testing",
  "12": "Advanced Testing: Cyclomatic Complexity & Mutation"
 },
 "weeks": [
  {
   "num": 1,
   "title": "Introduction to Software Engineering",
   "questions": [
    {
     "id": "w1q1",
     "week": 1,
     "n": 1,
     "text": "Which of the following are considered major challenges faced in modern software development projects?",
     "options": [
      {
       "k": "a",
       "t": "Software maintenance costs are very high."
      },
      {
       "k": "b",
       "t": "Projects often exceed their scheduled timelines."
      },
      {
       "k": "c",
       "t": "Increasing hardware speed completely eliminates software quality issues."
      },
      {
       "k": "d",
       "t": "Users expect software systems to be reliable and user-friendly."
      },
      {
       "k": "e",
       "t": "Software systems are becoming increasingly large and complex."
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "e"
     ],
     "sol": "The major challenges in modern software development include high maintenance costs, schedule overruns, growing user expectations for reliability and usability, and increasing system size and complexity—all of which make projects harder to manage and deliver. However, faster hardware does not eliminate software quality issues, as poor design, bugs, and security flaws remain independent of processing power."
    },
    {
     "id": "w1q2",
     "week": 1,
     "n": 2,
     "text": "Which of the following statements are characteristics of structured programming?",
     "options": [
      {
       "k": "a",
       "t": "A program is divided into smaller modules or functions"
      },
      {
       "k": "b",
       "t": "The use of excessive GOTO statements is encouraged"
      },
      {
       "k": "c",
       "t": "Control structures such as sequence, selection, and iteration are used"
      },
      {
       "k": "d",
       "t": "Proper indentation improves program readability"
      },
      {
       "k": "e",
       "t": "Structured programming discourages code documentation"
      }
     ],
     "ans": [
      "a",
      "c",
      "d"
     ],
     "sol": "Structured programming promotes modularity (dividing programs into functions), uses disciplined control structures like sequence, selection, and iteration, and encourages proper indentation for readability—all of which improve clarity and maintainability. It explicitly discourages excessive GOTO statements and does not discourage documentation; in fact, clear documentation is often encouraged alongside self-explanatory code."
    },
    {
     "id": "w1q3",
     "week": 1,
     "n": 3,
     "text": "Which of the following statements support the idea that “The more a software product is maintained, the less maintainable it becomes”?",
     "options": [
      {
       "k": "a",
       "t": "Frequent changes can increase software complexity"
      },
      {
       "k": "b",
       "t": "Poorly documented modifications reduce code understandability"
      },
      {
       "k": "c",
       "t": "Continuous maintenance always improves software structure"
      },
      {
       "k": "d",
       "t": "Repeated patches may introduce inconsistencies in design"
      },
      {
       "k": "e",
       "t": "Lack of proper refactoring during maintenance can degrade code quality"
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "e"
     ],
     "sol": "Frequent changes, poor documentation, repeated patches, and lack of refactoring gradually degrade a software system's structure, making it harder to understand and modify over time— this is known as software entropy. The statement that continuous maintenance always improves structure is false, because without deliberate effort, maintenance often introduces new flaws and inconsistencies."
    },
    {
     "id": "w1q4",
     "week": 1,
     "n": 4,
     "text": "Which of the following are generally categorized as software service projects?",
     "options": [
      {
       "k": "a",
       "t": "Software maintenance"
      },
      {
       "k": "b",
       "t": "Development of a commercial off-the-shelf software product"
      },
      {
       "k": "c",
       "t": "Software customization for a client"
      },
      {
       "k": "d",
       "t": "Outsourced software development"
      },
      {
       "k": "e",
       "t": "Software testing and support services"
      }
     ],
     "ans": [
      "a",
      "c",
      "d",
      "e"
     ],
     "sol": "Software service projects involve providing ongoing support, custom solutions, or contract-based work for specific clients, such as maintenance, customization, outsourced development, and testing services. In contrast, developing a commercial off-the-shelf (COTS) product is a product- development effort, not a service project, as it is built for mass sale rather than for a particular client."
    },
    {
     "id": "w1q5",
     "week": 1,
     "n": 5,
     "text": "Based on the distinction between jobs, projects, and exploration activities, which of the following statements are correct?",
     "options": [
      {
       "k": "a",
       "t": "Jobs usually involve repetitive and well-understood tasks"
      },
      {
       "k": "b",
       "t": "Exploration activities generally have a high degree of uncertainty in outcomes"
      },
      {
       "k": "c",
       "t": "Projects typically contain both routine activities and challenging tasks"
      },
      {
       "k": "d",
       "t": "Projects always have completely predictable outcomes"
      },
      {
       "k": "e",
       "t": "Exploration activity may encompass searching for new scientific discoveries"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "Jobs are routine and well-understood, exploration involves high uncertainty (e.g., scientific discovery), and projects mix routine work with novel challenges—but they never guarantee completely predictable outcomes. Therefore, the claim that projects always have predictable results is false, while the others accurately describe these activity types."
    },
    {
     "id": "w1q6",
     "week": 1,
     "n": 6,
     "text": "Which of the following statements regarding types of software are correct?",
     "options": [
      {
       "k": "a",
       "t": "Packaged software is prewritten software available for purchase"
      },
      {
       "k": "b",
       "t": "Custom software is usually developed according to specific user requirements"
      },
      {
       "k": "c",
       "t": "Horizontal market software is designed to satisfy the needs of many companies"
      },
      {
       "k": "d",
       "t": "Vertical market software is intended for a particular industry domain"
      },
      {
       "k": "e",
       "t": "Packaged software is always developed for only one specific customer"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "d"
     ],
     "sol": "Packaged software is prewritten for mass purchase, custom software is built for specific user needs, horizontal software serves many companies (e.g., payroll), and vertical software targets a specific industry (e.g., hospital management). However, packaged software is not developed for just one customer—that describes custom software, making option e incorrect."
    },
    {
     "id": "w1q7",
     "week": 1,
     "n": 7,
     "text": "Why should software developers focus on writing readable and well-structured code?",
     "options": [
      {
       "k": "a",
       "t": "Readable code makes debugging easier"
      },
      {
       "k": "b",
       "t": "Readable code helps other developers understand the program more easily"
      },
      {
       "k": "c",
       "t": "Readable code always guarantees minimum memory usage"
      },
      {
       "k": "d",
       "t": "Readable code simplifies software maintenance and modification"
      },
      {
       "k": "e",
       "t": "Readable code facilitates effective testing of the software"
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "e"
     ],
     "sol": "Readable code improves debugging, collaboration, maintenance, and testing by making the program's logic clear and easy to follow. However, it does not guarantee minimum memory usage—that depends on algorithmic and data-structure choices, not readability alone."
    },
    {
     "id": "w1q8",
     "week": 1,
     "n": 8,
     "text": "Which of the following projects can be classified as software service-type projects?",
     "options": [
      {
       "k": "a",
       "t": "Providing long-term support and maintenance for a hospital management system"
      },
      {
       "k": "b",
       "t": "Customizing an existing payroll software package for a specific company"
      },
      {
       "k": "c",
       "t": "Developing a banking application for a particular client organization"
      },
      {
       "k": "d",
       "t": "Developing a generic photo-editing software product for worldwide commercial sale"
      },
      {
       "k": "e",
       "t": "Migrating and integrating legacy software systems for a client"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "Service-type projects involve providing support, customization, or bespoke development for specific clients—such as maintenance, customizing payroll, building a banking application for one client, or migrating legacy systems. Developing a generic photo-editing product for worldwide sale is a product-development effort (COTS), not a service project."
    },
    {
     "id": "w1q9",
     "week": 1,
     "n": 9,
     "text": "Which of the following issues are commonly associated with the build-and-fix model of software development?",
     "options": [
      {
       "k": "a",
       "t": "Coding begins without complete requirement analysis"
      },
      {
       "k": "b",
       "t": "Little effort is made toward proper software design"
      },
      {
       "k": "c",
       "t": "Code is systematically documented during development"
      },
      {
       "k": "d",
       "t": "The model guarantees highly maintainable software"
      },
      {
       "k": "e",
       "t": "Testing is usually unsystematic and performed late"
      },
      {
       "k": "f",
       "t": "The resulting software may suffer from poor quality and maintainability"
      }
     ],
     "ans": [
      "a",
      "b",
      "e",
      "f"
     ],
     "sol": "The build-and-fix model starts coding without proper analysis or design, uses unsystematic testing done late, and typically produces low-quality, hard-to-maintain software. It does not encourage systematic documentation and certainly does not guarantee maintainability."
    },
    {
     "id": "w1q10",
     "week": 1,
     "n": 10,
     "text": "Which of the following situations illustrate the use of the principle of abstraction in software development?",
     "options": [
      {
       "k": "a",
       "t": "Representing the logic of a program using pseudocode before implementation"
      },
      {
       "k": "b",
       "t": "Dividing a large software system into smaller modules"
      },
      {
       "k": "c",
       "t": "Designing control flow structure before writing code"
      },
      {
       "k": "d",
       "t": "Ignoring unnecessary implementation details during system design"
      },
      {
       "k": "e",
       "t": "Testing whether a program produces correct outputs for various inputs"
      }
     ],
     "ans": [
      "a",
      "c",
      "d"
     ],
     "sol": "Abstraction means focusing on essential ideas while hiding irrelevant details—using pseudocode, designing control flow at a high level, and ignoring implementation specifics during design all exemplify this. Testing outputs (option e) is about validation, not abstraction, and dividing into modules (option b) is decomposition, though closely related."
    }
   ]
  },
  {
   "num": 2,
   "title": "Software Life Cycle Models",
   "questions": [
    {
     "id": "w2q1",
     "week": 2,
     "n": 1,
     "text": "Which of the following statements regarding milestones in a software life cycle model are correct?",
     "options": [
      {
       "k": "a",
       "t": "Milestones help project managers track the progress of a software project"
      },
      {
       "k": "b",
       "t": "Entry into and exit from a development phase are considered important milestones"
      },
      {
       "k": "c",
       "t": "Absence of proper milestones always results in poor software quality"
      },
      {
       "k": "d",
       "t": "Milestones help in monitoring and controlling project activities"
      },
      {
       "k": "e",
       "t": "Milestones eliminate the need for project documentation and reviews"
      }
     ],
     "ans": [
      "a",
      "b",
      "d"
     ],
     "sol": "Milestones serve as measurable checkpoints that help project managers track progress, monitor activities, and mark phase transitions (entry/exit). However, their absence does not always lead to poor quality, and they do not eliminate the need for documentation and reviews—those remain essential regardless of milestones."
    },
    {
     "id": "w2q2",
     "week": 2,
     "n": 2,
     "text": "A student while working on a software project, is suffering from the “99% complete syndrome. Which of the following situations are likely indicators of this syndrome?",
     "options": [
      {
       "k": "a",
       "t": "The student repeatedly claims the project is almost finished, but important tasks still remain incomplete."
      },
      {
       "k": "b",
       "t": "Most modules are coded, but testing and debugging have not been properly completed."
      },
      {
       "k": "c",
       "t": "The student accurately estimates the remaining work and delivers the project on time."
      },
      {
       "k": "d",
       "t": "Documentation, integration, and validation activities are postponed until the end."
      },
      {
       "k": "e",
       "t": "The project progress appears high on paper, but the final deliverable is not ready for deployment."
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "e"
     ],
     "sol": "The \"99% complete syndrome\" is marked by repeated claims of near-completion while critical tasks like testing, debugging, integration, and documentation remain unfinished—progress looks high on paper but the software is not deployable. Accurate estimation and on-time delivery (option c) are the opposite of this syndrome, so they are not indicators."
    },
    {
     "id": "w2q3",
     "week": 2,
     "n": 3,
     "text": "Which of the following are important factors to be assessed to determine the technical feasibility of a software project?",
     "options": [
      {
       "k": "a",
       "t": "Availability of required hardware and software resources"
      },
      {
       "k": "b",
       "t": "Technical expertise of the development team"
      },
      {
       "k": "c",
       "t": "Compatibility with existing systems"
      },
      {
       "k": "d",
       "t": "Expected profit from the software product"
      },
      {
       "k": "e",
       "t": "Ability of the technology to handle expected system performance requirements"
      },
      {
       "k": "f",
       "t": "Estimated market demand for the product"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "Technical feasibility assesses whether the project can be built with available resources, team expertise, system compatibility, and performance capabilities—all technical concerns. Expected profit (d) and market demand (f) relate to economic and market feasibility, not technical feasibility."
    },
    {
     "id": "w2q4",
     "week": 2,
     "n": 4,
     "text": "Which of the following statements about the Classical Waterfall Model are correct?",
     "options": [
      {
       "k": "a",
       "t": "The development process progresses through a sequence of distinct phases."
      },
      {
       "k": "b",
       "t": "Requirements are expected to be completely specified before development begins."
      },
      {
       "k": "c",
       "t": "The model supports frequent backtracking between all phases during normal execution."
      },
      {
       "k": "d",
       "t": "Testing is generally performed after the coding phase is completed."
      },
      {
       "k": "e",
       "t": "The Waterfall Model emphasizes continuous customer feedback throughout development."
      }
     ],
     "ans": [
      "a",
      "b",
      "d"
     ],
     "sol": "The Classical Waterfall Model follows a linear, sequential progression through distinct phases, with complete requirements specified upfront and testing performed after coding. It does not support frequent backtracking (c) nor emphasize continuous customer feedback (e)—those are characteristics of iterative or Agile models."
    },
    {
     "id": "w2q5",
     "week": 2,
     "n": 5,
     "text": "Which of the following statements regarding software maintenance are correct?",
     "options": [
      {
       "k": "a",
       "t": "Corrective maintenance involves fixing errors that were not detected during software development."
      },
      {
       "k": "b",
       "t": "Corrective maintenance aims at addressing system defects."
      },
      {
       "k": "c",
       "t": "Adaptive maintenance is performed to port software to a new environment or platform."
      },
      {
       "k": "d",
       "t": "Corrective maintenance mainly focuses on adding new features requested by users."
      },
      {
       "k": "e",
       "t": "Adaptive maintenance may be required when migrating software to a new operating system."
      },
      {
       "k": "f",
       "t": "Perfective maintenance can improve the efficiency and implementation of a system."
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e",
      "f"
     ],
     "sol": "Corrective maintenance fixes bugs/defects (options a and b), adaptive maintenance handles environment changes like new OS or platforms (c and e), and perfective maintenance improves efficiency or implementation (f). Adding new features (d) is actually perfective maintenance, not corrective, so option d is incorrect."
    },
    {
     "id": "w2q6",
     "week": 2,
     "n": 6,
     "text": "Which of the following statements regarding phase containment of errors in software engineering are correct?",
     "options": [
      {
       "k": "a",
       "t": "Errors should ideally be detected and corrected in the same phase in which they are introduced."
      },
      {
       "k": "b",
       "t": "The cost of correcting an error generally increases if it is detected in later phases of development."
      },
      {
       "k": "c",
       "t": "Phase containment of errors helps reduce software development and maintenance costs."
      },
      {
       "k": "d",
       "t": "Errors introduced during requirements analysis are easiest to fix after system deployment."
      },
      {
       "k": "e",
       "t": "Testing is the only phase in which software errors can be detected."
      }
     ],
     "ans": [
      "a",
      "b",
      "c"
     ],
     "sol": "Phase containment emphasizes detecting and fixing errors in the same phase they are introduced, which reduces costly rework—fixing errors later (especially after deployment) is far more expensive. Errors can be detected through reviews and inspections in any phase, not just testing (e), and requirements errors are hardest to fix after deployment, not easiest (d)."
    },
    {
     "id": "w2q7",
     "week": 2,
     "n": 7,
     "text": "Which of the following are commonly cited limitations of the classical waterfall model in modern software development projects?",
     "options": [
      {
       "k": "a",
       "t": "Difficulty in accommodating changing requirements after development begins"
      },
      {
       "k": "b",
       "t": "Requirement for a complete and stable requirements specification at an early stage"
      },
      {
       "k": "c",
       "t": "Delayed delivery of working software until the end of the project"
      },
      {
       "k": "d",
       "t": "Continuous customer feedback available throughout all development phases"
      },
      {
       "k": "e",
       "t": "Limited flexibility in handling evolving user needs"
      },
      {
       "k": "f",
       "t": "Frequent incremental releases delivered during development"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "The classical waterfall model struggles with changing requirements, requires fully stable specifications upfront, delivers working software only at the end, and offers little flexibility for evolving user needs—these are its key limitations. Continuous customer feedback (d) and frequent incremental releases (f) are not features of waterfall; they describe iterative/Agile models."
    },
    {
     "id": "w2q8",
     "week": 2,
     "n": 8,
     "text": "Which of the following statements about the V-model of software development are correct?",
     "options": [
      {
       "k": "a",
       "t": "The V-model emphasizes verification and validation activities."
      },
      {
       "k": "b",
       "t": "Each development phase is associated with a corresponding testing phase."
      },
      {
       "k": "c",
       "t": "Coding is performed before system design begins."
      },
      {
       "k": "d",
       "t": "Test planning begins early in the development life cycle."
      },
      {
       "k": "e",
       "t": "The V-model is well-suited for projects with stable and clearly defined requirements."
      },
      {
       "k": "f",
       "t": "The V-model completely eliminates the need for software testing."
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "e"
     ],
     "sol": "The V-model emphasizes verification and validation, pairs each development phase with a corresponding testing phase, starts test planning early, and is well-suited for projects with stable, clearly defined requirements. However, coding is performed after system design (not before), and the model does not eliminate testing—it actually stresses its importance."
    },
    {
     "id": "w2q9",
     "week": 2,
     "n": 9,
     "text": "The prototyping software development model is most suitable for projects facing which of the following situations?",
     "options": [
      {
       "k": "a",
       "t": "Requirements are unclear or likely to change frequently"
      },
      {
       "k": "b",
       "t": "Users are unable to clearly specify their expectations at the beginning"
      },
      {
       "k": "c",
       "t": "Early user feedback is required to refine the system requirements"
      },
      {
       "k": "d",
       "t": "The project requirements are completely stable and well defined"
      },
      {
       "k": "e",
       "t": "Developers need to quickly demonstrate a working model of the system"
      },
      {
       "k": "f",
       "t": "The project mainly focuses on minimizing hardware manufacturing costs"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "The prototyping model is ideal when requirements are unclear, users cannot specify expectations upfront, early feedback is needed to refine requirements, or a working model must be demonstrated quickly. It is not suitable for stable, well-defined requirements (d), and it addresses software uncertainty, not hardware cost minimization (f)."
    },
    {
     "id": "w2q10",
     "week": 2,
     "n": 10,
     "text": "Which of the following can be considered as project milestones in a software life cycle?",
     "options": [
      {
       "k": "a",
       "t": "Requirements specification approved"
      },
      {
       "k": "b",
       "t": "Coding standards defined"
      },
      {
       "k": "c",
       "t": "System design completed"
      },
      {
       "k": "d",
       "t": "Use of modular programming"
      },
      {
       "k": "e",
       "t": "User acceptance testing completed"
      },
      {
       "k": "f",
       "t": "Final software delivery completed"
      }
     ],
     "ans": [
      "a",
      "c",
      "e",
      "f"
     ],
     "sol": "Project milestones are significant, measurable events like approval of requirements, completion of system design, user acceptance testing, and final delivery—these mark major progress points. Defining coding standards (b) and using modular programming (d) are development practices or guidelines, not major project milestones."
    }
   ]
  },
  {
   "num": 3,
   "title": "Agile Development: Scrum & XP",
   "questions": [
    {
     "id": "w3q1",
     "week": 3,
     "n": 1,
     "text": "Which of the following statements are true regarding the Agile software development model?",
     "options": [
      {
       "k": "a",
       "t": "Only one increment is typically planned and developed at a time"
      },
      {
       "k": "b",
       "t": "Long-term detailed plans are usually avoided"
      },
      {
       "k": "c",
       "t": "Every iteration must add major new functionality"
      },
      {
       "k": "d",
       "t": "A new software release is generally produced at the end of each iteration"
      },
      {
       "k": "e",
       "t": "Each release may be delivered to the customer for regular use"
      },
      {
       "k": "f",
       "t": "Agile development requires completion of the entire system before deployment"
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "e"
     ],
     "sol": "Agile focuses on planning and developing one increment at a time, avoids long-term detailed plans, produces a release at the end of each iteration, and encourages delivering releases to customers for regular feedback. It does not require every iteration to add major functionality (c), nor does it require the entire system to be completed before deployment (f)—that is the opposite of Agile."
    },
    {
     "id": "w3q2",
     "week": 3,
     "n": 2,
     "text": "A software company has recently developed an online shopping application for a retail store. The company has now been assigned a project to develop a similar application for a supermarket chain, with different billing rules and additional loyalty features. Which of the following software life cycle models would be most appropriate for this project?",
     "options": [
      {
       "k": "a",
       "t": "Classical waterfall model"
      },
      {
       "k": "b",
       "t": "Prototyping model"
      },
      {
       "k": "c",
       "t": "Scrum"
      },
      {
       "k": "d",
       "t": "V model"
      },
      {
       "k": "e",
       "t": "Spiral model"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "Scrum is most appropriate because the team already has a working baseline (the retail app) and can iteratively add/modify billing rules and loyalty features in short sprints, adapting to evolving requirements with frequent feedback. Waterfall, V-model, and pure prototyping are less flexible, and while Spiral is risk-driven, it is heavier and less practical than Scrum for this commercial adaptation project."
    },
    {
     "id": "w3q3",
     "week": 3,
     "n": 3,
     "text": "Agile software development emphasizes which of the following principles?",
     "options": [
      {
       "k": "a",
       "t": "Deliver working software quickly in small increments with adequate quality"
      },
      {
       "k": "b",
       "t": "Complete all documentation before starting implementation"
      },
      {
       "k": "c",
       "t": "Frequent customer feedback and continuous improvement"
      },
      {
       "k": "d",
       "t": "Deliver only fully completed systems at the end of the project"
      },
      {
       "k": "e",
       "t": "Respond effectively to changing requirements during development"
      },
      {
       "k": "f",
       "t": "Focus mainly on producing non-executable project documents rather than working software"
      }
     ],
     "ans": [
      "a",
      "c",
      "e"
     ],
     "sol": "Frequent changes, poor documentation, repeated patches, and lack of refactoring gradually degrade a software system's structure, making it harder to understand and modify over time— this is known as software entropy. The statement that continuous maintenance always improves structure is false, because without deliberate effort, maintenance often introduces new flaws and inconsistencies. [Note: the source PDF's Detailed Solution here is a pasted leftover about software entropy and does not answer this Agile question. Corrected explanation: Agile delivers working, high-quality software in small increments (a), relies on frequent customer feedback with continuous improvement (c), and responds to changing requirements during development (e). It does not require completing all documentation before implementation (b), it delivers increments rather than one final complete system (d), and it values working software over heavy documents (f).]",
     "fixes": [
      "The source PDF's Detailed Solution for this question was the wrong text (copied from another question); a corrected explanation was appended and is clearly marked in-app."
     ]
    },
    {
     "id": "w3q4",
     "week": 3,
     "n": 4,
     "text": "Which of the following questions are typically discussed during a daily Scrum meeting?",
     "options": [
      {
       "k": "a",
       "t": "What work did you complete since the last meeting?"
      },
      {
       "k": "b",
       "t": "What work will you complete before the next meeting?"
      },
      {
       "k": "c",
       "t": "What impediments are affecting your progress?"
      },
      {
       "k": "d",
       "t": "Who should be removed from the Scrum team?"
      },
      {
       "k": "e",
       "t": "What percentage of the project budget has been consumed?"
      },
      {
       "k": "f",
       "t": "What tasks are currently in progress?"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "f"
     ],
     "sol": "The Daily Scrum (stand-up) focuses on synchronizing the team by discussing work completed since the last meeting, work planned before the next meeting, impediments blocking progress, and tasks currently in progress. It is not a forum for team member evaluation (d) or budget tracking (e)—those are management concerns outside the daily stand-up."
    },
    {
     "id": "w3q5",
     "week": 3,
     "n": 5,
     "text": "Which of the following statements are true regarding Scrum?",
     "options": [
      {
       "k": "a",
       "t": "Scrum promotes iterative and incremental software development"
      },
      {
       "k": "b",
       "t": "A Scrum team organizes and manages its own work"
      },
      {
       "k": "c",
       "t": "Scrum requires all requirements to be frozen before development begins"
      },
      {
       "k": "d",
       "t": "Sprints are usually time-boxed iterations"
      },
      {
       "k": "e",
       "t": "The Scrum Master is responsible for writing all program code"
      }
     ],
     "ans": [
      "a",
      "b",
      "d"
     ],
     "sol": "Scrum promotes iterative, incremental development with self-organizing teams and time-boxed sprints. It does not freeze requirements upfront (c)—it embraces change—and the Scrum Master is a facilitator, not the sole coder (e); the Development Team writes the code."
    },
    {
     "id": "w3q6",
     "week": 3,
     "n": 6,
     "text": "Which of the following statements are true regarding the sprint backlog in a Scrum project?",
     "options": [
      {
       "k": "a",
       "t": "It contains the tasks selected for the current sprint"
      },
      {
       "k": "b",
       "t": "It is owned and managed by the development team"
      },
      {
       "k": "c",
       "t": "It contains all desired work items for the entire project"
      },
      {
       "k": "d",
       "t": "It is updated throughout the sprint as work progresses"
      },
      {
       "k": "e",
       "t": "It is prepared and controlled exclusively by the Scrum Master"
      },
      {
       "k": "f",
       "t": "It mainly consists of detailed task-level work items"
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "f"
     ],
     "sol": "The Sprint Backlog contains tasks selected for the current sprint, is owned and managed by the Development Team, is updated daily as work progresses, and consists of detailed task- level work items. It does not contain all work items for the entire project (that’s the Product Backlog), and it is not controlled exclusively by the Scrum Master—the team owns it."
    },
    {
     "id": "w3q7",
     "week": 3,
     "n": 7,
     "text": "Which of the following statements are true regarding Extreme Programming (XP)?",
     "options": [
      {
       "k": "a",
       "t": "XP emphasizes Test-Driven Development (TDD)"
      },
      {
       "k": "b",
       "t": "Test cases are often developed based on user stories"
      },
      {
       "k": "c",
       "t": "XP encourages implementing features quickly and obtaining customer feedback"
      },
      {
       "k": "d",
       "t": "Refactoring is discouraged once the code is working"
      },
      {
       "k": "e",
       "t": "Customer feedback may lead to modification of implemented features"
      },
      {
       "k": "f",
       "t": "XP requires completing all features before any customer review takes place"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "XP emphasizes TDD, derives tests from user stories, encourages rapid implementation with frequent customer feedback, and allows feedback to modify features. It encourages continuous refactoring (not discourages it), and customer reviews happen throughout, not after all features are complete."
    },
    {
     "id": "w3q8",
     "week": 3,
     "n": 8,
     "text": "Which of the following practices are commonly associated with Extreme Programming (XP)?",
     "options": [
      {
       "k": "a",
       "t": "Frequent release of small software increments"
      },
      {
       "k": "b",
       "t": "Continuous customer involvement and feedback"
      },
      {
       "k": "c",
       "t": "Pair programming as a development practice"
      },
      {
       "k": "d",
       "t": "Avoiding code refactoring after implementation"
      },
      {
       "k": "e",
       "t": "Writing automated tests before or along with code"
      },
      {
       "k": "f",
       "t": "Freezing requirements at the beginning of the project"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "XP practices include frequent small releases, continuous customer involvement, pair programming, and writing automated tests before or alongside code (TDD). It encourages continuous refactoring (not avoiding it) and embraces changing requirements (not freezing them upfront)."
    },
    {
     "id": "w3q9",
     "week": 3,
     "n": 9,
     "text": "Which of the following statements are true regarding roles in a Scrum project?",
     "options": [
      {
       "k": "a",
       "t": "The Product Owner represents customer interests"
      },
      {
       "k": "b",
       "t": "The Development Team is usually cross-functional"
      },
      {
       "k": "c",
       "t": "The Scrum Master helps remove impediments faced by the team"
      },
      {
       "k": "d",
       "t": "The Scrum Master is solely responsible for coding the product"
      },
      {
       "k": "e",
       "t": "The Development Team typically consists of a small number of members"
      },
      {
       "k": "f",
       "t": "The Product Owner mainly acts as an external auditor of the project"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "The Product Owner represents customer interests, the Development Team is cross-functional and small (typically 3–9 members), and the Scrum Master removes impediments. The Scrum Master is not solely responsible for coding (the team codes), and the Product Owner is deeply involved, not an external auditor."
    },
    {
     "id": "w3q10",
     "week": 3,
     "n": 10,
     "text": "Which of the following statements are true regarding the product backlog in Scrum?",
     "options": [
      {
       "k": "a",
       "t": "It contains all desired work items for the project"
      },
      {
       "k": "b",
       "t": "The product backlog may contain both story-based and task-based work items"
      },
      {
       "k": "c",
       "t": "The Product Owner is responsible for prioritizing the backlog"
      },
      {
       "k": "d",
       "t": "The sprint backlog and product backlog are always identical"
      },
      {
       "k": "e",
       "t": "The product backlog is updated as project needs evolve"
      },
      {
       "k": "f",
       "t": "Only completed work items are stored in the product backlog"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "The Product Backlog contains all desired work items (features, bugs, technical tasks), may include stories and tasks, is prioritized by the Product Owner, and is continuously updated as needs evolve. It is not identical to the Sprint Backlog (which is a subset for the current sprint), and it stores incomplete work—completed items are removed or marked done."
    }
   ]
  },
  {
   "num": 4,
   "title": "Software Requirements & SRS",
   "questions": [
    {
     "id": "w4q1",
     "week": 4,
     "n": 1,
     "text": "Which of the following are desirable properties of a good Software Requirements Specification (SRS) document?",
     "options": [
      {
       "k": "a",
       "t": "It should be concise but not ambiguous."
      },
      {
       "k": "b",
       "t": "It should specify how the system will be implemented."
      },
      {
       "k": "c",
       "t": "It should clearly state what the system must do."
      },
      {
       "k": "d",
       "t": "It should be easy to modify and well-structured."
      },
      {
       "k": "e",
       "t": "It should be consistent and complete."
      },
      {
       "k": "f",
       "t": "It should contain contradictory requirements for flexibility."
      }
     ],
     "ans": [
      "a",
      "c",
      "d",
      "e"
     ],
     "sol": "A good SRS must be concise yet unambiguous, clearly state what the system must do (not how), be easy to modify, well-structured, consistent, and complete. It should not specify implementation details (b) or contain contradictory requirements (f)—those are undesirable."
    },
    {
     "id": "w4q2",
     "week": 4,
     "n": 2,
     "text": "Which of the following are examples of nonfunctional requirements in an MIS software system?",
     "options": [
      {
       "k": "a",
       "t": "The maintenance costs per year should be low"
      },
      {
       "k": "b",
       "t": "The system should be easily portable to other computing environments"
      },
      {
       "k": "c",
       "t": "System should be able to complete the generation of the payroll report within a minute"
      },
      {
       "k": "d",
       "t": "The system should be secure"
      },
      {
       "k": "e",
       "t": "System should take care of the approved leave details of an employee while generating the payroll report"
      },
      {
       "k": "f",
       "t": "Generating monthly payroll reports"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "d"
     ],
     "sol": "Nonfunctional requirements specify quality attributes or constraints—low maintenance cost (a), portability (b), performance (c), and security (d) are all nonfunctional. Options (e) and (f) describe specific system functions (integrating leave details, generating reports), which are functional requirements."
    },
    {
     "id": "w4q3",
     "week": 4,
     "n": 3,
     "text": "Which of the following are sections/subsections are not commonly included in an SRS document as per the IEEE 830-1998 Software Requirements Specification (SRS) standard?",
     "options": [
      {
       "k": "a",
       "t": "Purpose"
      },
      {
       "k": "b",
       "t": "Scope"
      },
      {
       "k": "c",
       "t": "Coding Standards"
      },
      {
       "k": "d",
       "t": "Specific functional requirements"
      },
      {
       "k": "e",
       "t": "Specific nonfunctional requirements"
      },
      {
       "k": "f",
       "t": "Source Code Listings"
      }
     ],
     "ans": [
      "c",
      "f"
     ],
     "sol": "The IEEE 830-1998 SRS standard includes sections like Purpose, Scope, Specific Functional Requirements, and Specific Nonfunctional Requirements—but not Coding Standards or Source Code Listings, which belong to implementation and project documentation, not to requirements specification."
    },
    {
     "id": "w4q4",
     "week": 4,
     "n": 4,
     "text": "Which of the following characteristics may indicate a poorly written SRS document?",
     "options": [
      {
       "k": "a",
       "t": "Use of customer’s terminology to describe functionalities"
      },
      {
       "k": "b",
       "t": "Inclusion of unquantifiable terms such as “good user interface”"
      },
      {
       "k": "c",
       "t": "Use of forward references where concepts are defined later in the text"
      },
      {
       "k": "d",
       "t": "Clearly measurable and testable requirements"
      },
      {
       "k": "e",
       "t": "Wishful thinking about features for which realistic solutions are difficult"
      },
      {
       "k": "f",
       "t": "Consistent and well-structured requirements"
      }
     ],
     "ans": [
      "b",
      "c",
      "e"
     ],
     "sol": "A poorly written SRS contains subjective/unquantifiable terms like \"good user interface\" (b), forward references to concepts defined later (c), and wishful thinking about unrealistic features (e). Using customer terminology (a), having measurable/testable requirements (d), and being consistent/well-structured (f) are signs of a good SRS."
    },
    {
     "id": "w4q5",
     "week": 4,
     "n": 5,
     "text": "Consider the following requirement for an online banking system: \"The system should allow customers to transfer funds between accounts.\" Which of the following correctly classify this requirement?",
     "options": [
      {
       "k": "a",
       "t": "Functional requirement"
      },
      {
       "k": "b",
       "t": "Non-functional requirement"
      },
      {
       "k": "c",
       "t": "Requirement describing a service provided by the system"
      },
      {
       "k": "d",
       "t": "Constraint on implementation"
      },
      {
       "k": "e",
       "t": "User interface requirement"
      }
     ],
     "ans": [
      "a",
      "c"
     ],
     "sol": "The requirement describes a specific function (transferring funds) and a service the system provides to users, making it a functional requirement. It is not a non-functional requirement (quality attribute), implementation constraint, or UI-specific requirement, as it does not specify how the interface should look or how the system must be built."
    },
    {
     "id": "w4q6",
     "week": 4,
     "n": 6,
     "text": "Consider the following requirement for an e-commerce software system: \"The application must run on the Linux operating system.\" It can be considered to be which of the following types of requirements?",
     "options": [
      {
       "k": "a",
       "t": "Functional requirement"
      },
      {
       "k": "b",
       "t": "Non-functional requirement"
      },
      {
       "k": "c",
       "t": "Design constraint"
      },
      {
       "k": "d",
       "t": "Reliability requirement"
      },
      {
       "k": "e",
       "t": "External interface requirement"
      },
      {
       "k": "f",
       "t": "Requirement specifying a business rule"
      }
     ],
     "ans": [
      "b",
      "c"
     ],
     "sol": "The requirement specifies a constraint on the operating environment (\"must run on Linux\"), which is a non-functional requirement and specifically a design constraint—it restricts design/implementation choices. It is not a functional requirement (it describes no specific behavior), reliability requirement (no uptime/MTBF specified), external interface (no API/hardware interaction), or business rule (no policy/logic)."
    },
    {
     "id": "w4q7",
     "week": 4,
     "n": 7,
     "text": "Which of the following statements regarding SRS review are correct?",
     "options": [
      {
       "k": "a",
       "t": "SRS review is carried out by developers along with user representatives."
      },
      {
       "k": "b",
       "t": "The purpose of SRS review is to verify that the SRS conforms to actual user requirements."
      },
      {
       "k": "c",
       "t": "SRS review helps detect defects early and correct them."
      },
      {
       "k": "d",
       "t": "SRS review is usually performed using checklists."
      },
      {
       "k": "e",
       "t": "SRS review is mainly intended to generate source code automatically."
      },
      {
       "k": "f",
       "t": "SRS review is performed only after software implementation is completed."
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "d"
     ],
     "sol": "SRS review involves developers and user representatives to verify that the document matches actual user needs, detects defects early, and often uses checklists for systematic checking. It is not for generating code (e), and it is performed before implementation (f)—early defect detection is the whole point."
    },
    {
     "id": "w4q8",
     "week": 4,
     "n": 8,
     "text": "Which of the following issues are typically addressed during the requirements analysis activity in software development?",
     "options": [
      {
       "k": "a",
       "t": "Inconsistency in requirements"
      },
      {
       "k": "b",
       "t": "Use of layered design during implementation"
      },
      {
       "k": "c",
       "t": "Incompleteness of requirements"
      },
      {
       "k": "d",
       "t": "Lack of modular coding standards"
      },
      {
       "k": "e",
       "t": "Unstructuredness in requirements"
      },
      {
       "k": "f",
       "t": "Redundancy and unnecessary details in requirements"
      }
     ],
     "ans": [
      "a",
      "c",
      "e",
      "f"
     ],
     "sol": "Requirements analysis focuses on refining and validating requirements—resolving inconsistencies, filling gaps, removing redundancies, and structuring them clearly. It does not address design decisions like layered design (b) or coding standards (d)—those belong to design and implementation phases."
    },
    {
     "id": "w4q9",
     "week": 4,
     "n": 9,
     "text": "Consider the following partial requirement for a hospital management software system: \"The system shall authenticate users using biometric credentials during login.\" It can be considered to be which of the following types of requirements?",
     "options": [
      {
       "k": "a",
       "t": "Functional requirement"
      },
      {
       "k": "b",
       "t": "Non-functional requirement"
      },
      {
       "k": "c",
       "t": "Security requirement"
      },
      {
       "k": "d",
       "t": "External interface requirement"
      },
      {
       "k": "e",
       "t": "Performance requirement"
      }
     ],
     "ans": [
      "b",
      "c"
     ],
     "sol": "Biometric authentication is a security requirement (a quality attribute under non-functional), and thus also a non-functional requirement (since security is a quality attribute). It is not an external interface requirement (no API/hardware protocol specified) nor a performance requirement (no speed/throughput metric given)."
    },
    {
     "id": "w4q10",
     "week": 4,
     "n": 10,
     "text": "Which of the following questions are commonly included in an SRS review checklist?",
     "options": [
      {
       "k": "a",
       "t": "Have response times been specified for system functions?"
      },
      {
       "k": "b",
       "t": "Have all hardware, external software, and data interfaces been defined?"
      },
      {
       "k": "c",
       "t": "Is each requirement testable?"
      },
      {
       "k": "d",
       "t": "Have the dependencies among modules clearly defined?"
      },
      {
       "k": "e",
       "t": "Are responses to exceptional conditions specified?"
      },
      {
       "k": "f",
       "t": "Has the programming language for implementation been finalized?"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "An SRS review checklist verifies that performance (response times), interfaces, testability, and exceptional-condition responses are properly specified—all essential for a complete, unambiguous requirements document. It does not include module dependencies (d) or programming language (f), as those belong to design and implementation decisions, not to the SRS itself."
    }
   ]
  },
  {
   "num": 5,
   "title": "Software Design: Cohesion & Coupling",
   "questions": [
    {
     "id": "w5q1",
     "week": 5,
     "n": 1,
     "text": "Which of the following statements about modularity in software design are correct?",
     "options": [
      {
       "k": "a",
       "t": "Modularity involves decomposing a problem into a set of modules."
      },
      {
       "k": "b",
       "t": "Modules in a modular design are intended to be largely independent of one another."
      },
      {
       "k": "c",
       "t": "Modularity is based on the divide and conquer principle."
      },
      {
       "k": "d",
       "t": "Modularity always increases interdependence among modules."
      },
      {
       "k": "e",
       "t": "Modularity is considered an important attribute of good software design."
      },
      {
       "k": "f",
       "t": "Modularity eliminates the need for system integration."
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "Modularity decomposes a problem into modules, promotes independence (low coupling), and applies the divide-and-conquer principle—all hallmarks of good design. It does not increase interdependence (d)—it reduces it—and it does not eliminate system integration (f); integration is still needed, though it becomes easier."
    },
    {
     "id": "w5q2",
     "week": 5,
     "n": 2,
     "text": "Which of the following statements regarding coupling are correct?",
     "options": [
      {
       "k": "a",
       "t": "Coupling refers to the degree of dependence among software components."
      },
      {
       "k": "b",
       "t": "Highly coupled systems have many interdependencies among components."
      },
      {
       "k": "c",
       "t": "High coupling is generally preferred in good software design."
      },
      {
       "k": "d",
       "t": "In highly coupled systems, modifying one component may affect several other components."
      },
      {
       "k": "e",
       "t": "Coupling and modularity are completely unrelated concepts."
      },
      {
       "k": "f",
       "t": "Tightly coupled modules are easier to maintain and modify."
      }
     ],
     "ans": [
      "a",
      "b",
      "d"
     ],
     "sol": "Coupling measures dependence between components; high coupling means many interdependencies, so changes ripple widely—making maintenance harder. High coupling is not preferred (c), coupling and modularity are closely related (e), and tightly coupled modules are harder to maintain (f), not easier."
    },
    {
     "id": "w5q3",
     "week": 5,
     "n": 3,
     "text": "Which of the following statements correctly describe cohesion in software design?",
     "options": [
      {
       "k": "a",
       "t": "Cohesion refers to how strongly the elements within a module are related to one another"
      },
      {
       "k": "b",
       "t": "High cohesion generally improves maintainability and readability of software"
      },
      {
       "k": "c",
       "t": "Cohesion measures the level of dependency between different modules"
      },
      {
       "k": "d",
       "t": "Functional cohesion is considered one of the strongest forms of cohesion"
      },
      {
       "k": "e",
       "t": "Low cohesion is usually preferred because it increases module flexibility"
      },
      {
       "k": "f",
       "t": "Cohesion is concerned with the internal organization of a module"
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "f"
     ],
     "sol": "Cohesion measures how strongly elements within a module are related—high cohesion improves maintainability and readability, and functional cohesion is among the strongest types. Cohesion is not about dependency between modules (that's coupling), and low cohesion is not preferred—it makes modules harder to understand and maintain."
    },
    {
     "id": "w5q4",
     "week": 5,
     "n": 4,
     "text": "What does “common coupling” mean?",
     "options": [
      {
       "k": "a",
       "t": "Two modules share global data"
      },
      {
       "k": "b",
       "t": "Modules communicate only through parameters"
      },
      {
       "k": "c",
       "t": "Modules rely on shared logic"
      },
      {
       "k": "d",
       "t": "Modules share a common interface"
      },
      {
       "k": "e",
       "t": "Modules share code"
      },
      {
       "k": "f",
       "t": "Modules share no data, as is the common practice"
      }
     ],
     "ans": [
      "a"
     ],
     "sol": "Common coupling occurs when two or more modules access the same global data area (e.g., global variables, shared memory), creating hidden dependencies and making maintenance difficult. It does not refer to parameter passing (b), shared logic (c), common interfaces (d), code sharing (e), or sharing no data (f)—those describe other forms of coupling or no coupling at all."
    },
    {
     "id": "w5q5",
     "week": 5,
     "n": 5,
     "text": "Which of the following situations represents stamp coupling between modules?",
     "options": [
      {
       "k": "a",
       "t": "A module passes only the required data items to another module"
      },
      {
       "k": "b",
       "t": "A module passes an entire record or data structure, although only part of it is needed"
      },
      {
       "k": "c",
       "t": "One module directly modifies the internal logic of another module"
      },
      {
       "k": "d",
       "t": "A module passes control information that affects the behavior of another module"
      },
      {
       "k": "e",
       "t": "Two modules share access to the same global data structure"
      },
      {
       "k": "f",
       "t": "A module receives a complete student structure but uses only the roll number field"
      }
     ],
     "ans": [
      "b",
      "f"
     ],
     "sol": "Stamp coupling occurs when a module passes an entire data structure (record/object) to another module, but only a portion of it is actually used—as in passing a full student record but using only the roll number field (f). Passing only required data items (a) is data coupling, direct logic modification (c) is content coupling, passing control flags (d) is control coupling, and sharing global data (e) is common coupling."
    },
    {
     "id": "w5q6",
     "week": 5,
     "n": 6,
     "text": "A good modular software design generally aims to achieve which of the following characteristics?",
     "options": [
      {
       "k": "a",
       "t": "High cohesion among the elements within a module"
      },
      {
       "k": "b",
       "t": "Low coupling between different modules"
      },
      {
       "k": "c",
       "t": "Extensive dependence among different modules"
      },
      {
       "k": "d",
       "t": "Modules performing closely related functions"
      },
      {
       "k": "e",
       "t": "Strong interaction and interdependence among all modules"
      },
      {
       "k": "f",
       "t": "Minimal unnecessary communication between modules"
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "f"
     ],
     "sol": "Good modular design aims for high cohesion (elements within a module are closely related), low coupling (minimal dependence between modules), modules that perform closely related functions, and minimal unnecessary communication between modules. Extensive dependence (c) and strong interaction among all modules (e) are signs of poor design—they indicate high coupling and low independence."
    },
    {
     "id": "w5q7",
     "week": 5,
     "n": 7,
     "text": "Which of the following statements are related to coupling in software design?",
     "options": [
      {
       "k": "a",
       "t": "Coupling indicates the degree of interdependence between modules"
      },
      {
       "k": "b",
       "t": "High coupling is generally desirable in modular software design"
      },
      {
       "k": "c",
       "t": "The amount of data exchanged between modules affects coupling"
      },
      {
       "k": "d",
       "t": "Coupling measures how closely the internal elements of a module are related"
      },
      {
       "k": "e",
       "t": "Low coupling improves module independence and maintainability"
      },
      {
       "k": "f",
       "t": "Modules with excessive interaction are usually considered highly coupled"
      }
     ],
     "ans": [
      "a",
      "c",
      "e",
      "f"
     ],
     "sol": "Coupling measures interdependence between modules; it is affected by the amount of data exchanged, and low coupling improves independence and maintainability. Excessive interaction indicates high coupling. High coupling is not desirable (b), and coupling does not measure internal relatedness—that is cohesion (d)."
    },
    {
     "id": "w5q8",
     "week": 5,
     "n": 8,
     "text": "A module whose activities are related because they must occur within the same period of time exhibits which of the following types of cohesion?",
     "options": [
      {
       "k": "a",
       "t": "Temporal cohesion"
      },
      {
       "k": "b",
       "t": "Functional cohesion"
      },
      {
       "k": "c",
       "t": "Sequential cohesion"
      },
      {
       "k": "d",
       "t": "Coincidental cohesion"
      },
      {
       "k": "e",
       "t": "Procedural cohesion"
      },
      {
       "k": "f",
       "t": "Logical cohesion"
      }
     ],
     "ans": [
      "a"
     ],
     "sol": "Temporal cohesion occurs when module elements are grouped together because they are executed at the same time (e.g., initialization, shutdown, month-end processing)—not because they are functionally related. Functional, sequential, procedural, and logical cohesion describe other grouping criteria, while coincidental cohesion is the weakest form with completely unrelated elements."
    },
    {
     "id": "w5q9",
     "week": 5,
     "n": 9,
     "text": "If coupling between two modules cannot be completely avoided, which two of the following types of coupling are considered the most desirable?",
     "options": [
      {
       "k": "a",
       "t": "Data coupling"
      },
      {
       "k": "b",
       "t": "Control coupling"
      },
      {
       "k": "c",
       "t": "Common coupling"
      },
      {
       "k": "d",
       "t": "Stamp coupling"
      },
      {
       "k": "e",
       "t": "Content coupling"
      }
     ],
     "ans": [
      "a",
      "d"
     ],
     "sol": "Data coupling (sharing only simple, necessary parameters) is the most desirable, followed by stamp coupling (passing a structure but using only part of it)—both keep interdependence low. Control, common, and content coupling are progressively tighter and less desirable, with content coupling being the worst."
    },
    {
     "id": "w5q10",
     "week": 5,
     "n": 10,
     "text": "Which three of the following types of cohesion are considered weak forms of cohesion in software design compared to other forms of cohesion?",
     "options": [
      {
       "k": "a",
       "t": "Coincidental cohesion"
      },
      {
       "k": "b",
       "t": "Functional cohesion"
      },
      {
       "k": "c",
       "t": "Temporal cohesion"
      },
      {
       "k": "d",
       "t": "Communicational cohesion"
      },
      {
       "k": "e",
       "t": "Logical cohesion"
      },
      {
       "k": "f",
       "t": "Sequential cohesion"
      }
     ],
     "ans": [
      "a",
      "c",
      "e"
     ],
     "sol": "Coincidental (random grouping), temporal (time-based grouping), and logical (similar but unrelated tasks) cohesion are the weakest forms—they make modules harder to understand and maintain. Functional, sequential, and communicational cohesion are stronger and more desirable."
    }
   ]
  },
  {
   "num": 6,
   "title": "Function-Oriented Design: DFDs & Structured Analysis",
   "questions": [
    {
     "id": "w6q1",
     "week": 6,
     "n": 1,
     "text": "Which of the following statements correctly differentiate function-oriented design from object- oriented design?",
     "options": [
      {
       "k": "a",
       "t": "Function-oriented design generally follows a bottom-up approach"
      },
      {
       "k": "b",
       "t": "Structured analysis and structured design are associated with function-oriented design"
      },
      {
       "k": "c",
       "t": "UML is commonly used in object-oriented design"
      },
      {
       "k": "d",
       "t": "Function-oriented design primarily focuses on objects and their interactions"
      },
      {
       "k": "e",
       "t": "High-level Object-oriented design primarily focuses on designing algorithms and data structures for classes."
      }
     ],
     "ans": [
      "b",
      "c"
     ],
     "sol": "Structured analysis/design are indeed associated with function-oriented design (b), and UML is the standard notation for object-oriented design (c). Option a is false because function-oriented design follows a top-down approach, and option d is false because it describes OOD, not function-oriented design. Option e (\"High-level Object-oriented design primarily focuses on designing algorithms and data structures for classes\") is incorrect because high-level OOD focuses on class identification, relationships, and architecture—not on detailed algorithms and data structures, which belong to detailed design."
    },
    {
     "id": "w6q2",
     "week": 6,
     "n": 2,
     "text": "Which of the following statements correctly describe structured analysis and structured design?",
     "options": [
      {
       "k": "a",
       "t": "Structured analysis follows a bottom-up decomposition approach"
      },
      {
       "k": "b",
       "t": "Structured analysis decomposes high-level functions into more detailed functions"
      },
      {
       "k": "c",
       "t": "Structured design maps detailed functions onto module structures"
      },
      {
       "k": "d",
       "t": "Structured analysis primarily focuses on identifying objects and classes"
      },
      {
       "k": "e",
       "t": "Structured design helps organize software into hierarchical modules"
      },
      {
       "k": "f",
       "t": "Structured design is closely associated with procedural software development"
      }
     ],
     "ans": [
      "b",
      "c",
      "e",
      "f"
     ],
     "sol": "Structured analysis uses top-down functional decomposition (b), and structured design maps those functions into module structures (c), organizing them hierarchically (e)—both are closely tied to procedural development (f). Structured analysis follows a top-down (not bottom-up) approach (a), and it focuses on functions and data flow, not objects and classes (d)—that is object-oriented analysis."
    },
    {
     "id": "w6q3",
     "week": 6,
     "n": 3,
     "text": "A Data Flow Diagram (DFD) primarily represents which of the following aspects of a software system?",
     "options": [
      {
       "k": "a",
       "t": "Decision logic used in conditional statements"
      },
      {
       "k": "b",
       "t": "Flow of data among processes, data stores, and external entities"
      },
      {
       "k": "c",
       "t": "Sequence in which program statements are executed"
      },
      {
       "k": "d",
       "t": "Transformation of input data into output data through processing steps"
      },
      {
       "k": "e",
       "t": "Movement of data between external entities, processes, and data stores"
      },
      {
       "k": "f",
       "t": "Invocation order of program functions during execution"
      }
     ],
     "ans": [
      "b",
      "d",
      "e"
     ],
     "sol": "A DFD primarily represents the flow of data among processes, data stores, and external entities (b), the transformation of input data into output data through processing steps (d), and the movement of data between those elements (e). It does not show decision logic (a), execution sequence (c), or function invocation order (f)—those are represented in flowcharts, structure charts, or sequence diagrams."
    },
    {
     "id": "w6q4",
     "week": 6,
     "n": 4,
     "text": "Which of the following statements are NOT true regarding a Data Flow Diagram (DFD)?",
     "options": [
      {
       "k": "a",
       "t": "A DFD represents the procedural logic of program code"
      },
      {
       "k": "b",
       "t": "A DFD is usually developed using hierarchical decomposition"
      },
      {
       "k": "c",
       "t": "A DFD explicitly represents decision-making conditions and control flow"
      },
      {
       "k": "d",
       "t": "A DFD represents how data is transformed through processes"
      },
      {
       "k": "e",
       "t": "A DFD is normally constructed using a top-down approach"
      },
      {
       "k": "f",
       "t": "A DFD directly represents the module call structure of a software system"
      }
     ],
     "ans": [
      "a",
      "c",
      "f"
     ],
     "sol": "DFDs do not represent procedural logic (a), decision-making conditions or control flow (c)—those are shown in flowcharts or structure charts—nor do they represent module call structure (f), which is shown in structure charts. DFDs are developed using hierarchical/top-down decomposition (b, e) and do represent data transformation through processes (d), so those statements are true."
    },
    {
     "id": "w6q5",
     "week": 6,
     "n": 5,
     "text": "Which of the following statements correctly describe functional decomposition in structured analysis and design?",
     "options": [
      {
       "k": "a",
       "t": "Functional decomposition involves recursive calls among functions"
      },
      {
       "k": "b",
       "t": "High-level data may also be decomposed into more detailed data representations"
      },
      {
       "k": "c",
       "t": "High-level functions are successively decomposed into more detailed functions"
      },
      {
       "k": "d",
       "t": "Functional decomposition focuses only on control flow between statements"
      },
      {
       "k": "e",
       "t": "Decomposition helps manage complexity by dividing a system into smaller parts"
      },
      {
       "k": "f",
       "t": "Functional decomposition is unrelated to modular software design"
      }
     ],
     "ans": [
      "b",
      "c",
      "e"
     ],
     "sol": "Functional decomposition breaks high-level functions into more detailed ones (c) and may also decompose data into finer representations (b), helping manage complexity by dividing the system into smaller parts (e). It does not involve recursive calls (a) (that's a programming technique), focus only on control flow (d) (it's about function hierarchy), nor is it unrelated to modular design (f)—it directly leads to modular structures."
    },
    {
     "id": "w6q6",
     "week": 6,
     "n": 6,
     "text": "Which of the following statements correctly describe balancing in Data Flow Diagrams (DFDs)?",
     "options": [
      {
       "k": "a",
       "t": "Balancing primarily ensures preservation of program control logic across DFD levels"
      },
      {
       "k": "b",
       "t": "The input data flows to a process must be preserved when that process is decomposed into a lower-level DFD"
      },
      {
       "k": "c",
       "t": "The output data flows from a process must be preserved in its decomposed lower-level DFD"
      },
      {
       "k": "d",
       "t": "Balancing ensures consistency of data flow between different levels of DFDs"
      },
      {
       "k": "e",
       "t": "A lower-level DFD may introduce completely new external input flows not present in the parent process"
      },
      {
       "k": "f",
       "t": "Data entering and leaving a parent process should correspond to the combined input and output flows of its child processes"
      }
     ],
     "ans": [
      "b",
      "c",
      "d",
      "f"
     ],
     "sol": "Balancing ensures that input/output data flows of a parent process are preserved when decomposed into lower-level DFDs (b, c), maintaining consistency across levels (d)—the net effect of child processes must match the parent's flows (f). It does not preserve control logic (a) (DFDs don't show control), and new external inputs cannot be introduced (e)—that would violate balancing."
    },
    {
     "id": "w6q7",
     "week": 6,
     "n": 7,
     "text": "Which of the following activities are typically performed while constructing a Level-1 Data Flow Diagram (DFD)?",
     "options": [
      {
       "k": "a",
       "t": "Representing each high-level function as a separate process (bubble)"
      },
      {
       "k": "b",
       "t": "Representing data inputs to each high-level function"
      },
      {
       "k": "c",
       "t": "Representing data outputs produced by each high-level function"
      },
      {
       "k": "d",
       "t": "Writing detailed program code for each process"
      },
      {
       "k": "e",
       "t": "Identifying data stores and data movement between processes"
      },
      {
       "k": "f",
       "t": "Specifying the exact sequence of statement execution within each module"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "Constructing a Level-1 DFD involves representing each high-level function as a separate process (bubble), showing data inputs and outputs for each, and identifying data stores and data movement between processes. It does not involve writing code (d) or specifying execution sequence (f)—those are implementation and control-flow details, not DFD modeling."
    },
    {
     "id": "w6q8",
     "week": 6,
     "n": 8,
     "text": "For a given software system, a Data Flow Diagram (DFD) is primarily used to represent which of the following?",
     "options": [
      {
       "k": "a",
       "t": "Flow and transformation of data within the system"
      },
      {
       "k": "b",
       "t": "Flow of control between program statements"
      },
      {
       "k": "c",
       "t": "Movement of data between processes, data stores, and external entities"
      },
      {
       "k": "d",
       "t": "Sequence of function calls in a program"
      },
      {
       "k": "e",
       "t": "Processing activities that transform input data into output data"
      },
      {
       "k": "f",
       "t": "Module hierarchy of the software system"
      }
     ],
     "ans": [
      "a",
      "c",
      "e"
     ],
     "sol": "A DFD primarily represents the flow and transformation of data (a), the movement of data between processes, data stores, and external entities (c), and the processing activities that transform inputs into outputs (e). It does not represent control flow (b), function call sequences (d), or module hierarchy (f)—those are shown in flowcharts, sequence diagrams, or structure charts."
    },
    {
     "id": "w6q9",
     "week": 6,
     "n": 9,
     "text": "Which of the following statements correctly describe structured analysis and structured design?",
     "options": [
      {
       "k": "a",
       "t": "Structured analysis primarily concentrates on analyzing syntax and structure of a program"
      },
      {
       "k": "b",
       "t": "Structured analysis focuses on capturing the system from the user’s perspective"
      },
      {
       "k": "c",
       "t": "Structured design transforms the analysis model into a form suitable for implementation"
      },
      {
       "k": "d",
       "t": "Structured design helps derive a modular implementation structure"
      },
      {
       "k": "e",
       "t": "Structured analysis is concerned with understanding system requirements and functionality"
      },
      {
       "k": "f",
       "t": "Structured design ignores implementation considerations completely"
      }
     ],
     "ans": [
      "b",
      "c",
      "d",
      "e"
     ],
     "sol": "Structured analysis captures system functions and data from the user's perspective (b) to understand requirements (e), while structured design transforms this analysis model into a modular implementation structure (c, d) suitable for coding. Structured analysis does not focus on program syntax (a) (that's code-level), and structured design does not ignore implementation (f)—it explicitly considers it."
    },
    {
     "id": "w6q10",
     "week": 6,
     "n": 10,
     "text": "Which of the following statements correctly describe a data dictionary in structured analysis?",
     "options": [
      {
       "k": "a",
       "t": "All data items appearing in a data dictionary map to variables in the program implementation"
      },
      {
       "k": "b",
       "t": "A data dictionary describes composite data items in terms of their component data elements"
      },
      {
       "k": "c",
       "t": "A data dictionary primarily represents control flow between modules"
      },
      {
       "k": "d",
       "t": "A DFD is commonly accompanied by a data dictionary"
      },
      {
       "k": "e",
       "t": "A data dictionary includes the names and purposes of data items"
      },
      {
       "k": "f",
       "t": "A data dictionary specifies the sequence of execution of program statements"
      }
     ],
     "ans": [
      "b",
      "d",
      "e"
     ],
     "sol": "A data dictionary describes composite data items by breaking them into component elements (b), is commonly used alongside DFDs (d), and includes names and purposes of data items (e). It does not require every data item to map directly to program variables (a), does not represent control flow (c), and does not specify execution sequence (f)—those are implementation and control-flow"
    }
   ]
  },
  {
   "num": 7,
   "title": "Object-Oriented Analysis & UML Modelling",
   "questions": [
    {
     "id": "w7q1",
     "week": 7,
     "n": 1,
     "text": "Which of the following statements correctly describe the purpose and characteristics of UML models?",
     "options": [
      {
       "k": "a",
       "t": "UML models help manage system complexity by representing every implementation detail of the system."
      },
      {
       "k": "b",
       "t": "Different UML models may emphasize different aspects of a system"
      },
      {
       "k": "c",
       "t": "UML primarily represents low-level program execution details only"
      },
      {
       "k": "d",
       "t": "UML is primarily a graphical modelling technique"
      },
      {
       "k": "e",
       "t": "UML modelling captures only the important aspects of a system while ignoring unnecessary details"
      },
      {
       "k": "f",
       "t": "UML models are generally more compact and easier to understand than textual system descriptions"
      }
     ],
     "ans": [
      "b",
      "d",
      "e",
      "f"
     ],
     "sol": "UML uses graphical models to represent important system aspects at different levels of abstraction. Different diagrams emphasize different views and are generally easier to understand than lengthy textual descriptions.",
     "fixes": [
      "The source PDF left this question's Detailed Solution empty and pasted its explanation inside Q2's solution block. The text was moved back here."
     ]
    },
    {
     "id": "w7q2",
     "week": 7,
     "n": 2,
     "text": "Consider the statement: “A savings account is a type of bank account.” Assuming BankAccount and SavingsAccount are two classes, which of the following relationships best describes this situation?",
     "options": [
      {
       "k": "a",
       "t": "Aggregation"
      },
      {
       "k": "b",
       "t": "Association"
      },
      {
       "k": "c",
       "t": "Generalization-specialization"
      },
      {
       "k": "d",
       "t": "Composition"
      },
      {
       "k": "e",
       "t": "Overloading"
      },
      {
       "k": "f",
       "t": "Dependency"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "A saving account is a type of bank account is an example of Generalization-specialization.",
     "fixes": [
      "The two UML sentences at the end of this solution belong to Week 7 Q1 in the source PDF and were moved there."
     ]
    },
    {
     "id": "w7q3",
     "week": 7,
     "n": 3,
     "text": "Which of the following statements correctly describe multiple inheritance in object-oriented programming?",
     "options": [
      {
       "k": "a",
       "t": "A base class has multiple derived classes"
      },
      {
       "k": "b",
       "t": "A class is derived from more than one parent class"
      },
      {
       "k": "c",
       "t": "Multiple inheritance represents a situation where two classes recursively inherit from each other"
      },
      {
       "k": "d",
       "t": "A derived class can combine functionalities inherited from multiple parent classes"
      },
      {
       "k": "e",
       "t": "A class derived through several levels of inheritance is an example of multiple inheritance"
      }
     ],
     "ans": [
      "b",
      "d"
     ],
     "sol": "Multiple inheritance means a class inherits from more than one parent class. It allows a derived class to combine features from multiple base classes."
    },
    {
     "id": "w7q4",
     "week": 7,
     "n": 4,
     "text": "Which of the following statements are correct regarding the following diagram?",
     "options": [
      {
       "k": "a",
       "t": "The Borrow Book use case always performs Verify Member"
      },
      {
       "k": "b",
       "t": "Verify Member represents common functionality reusable by other use cases"
      },
      {
       "k": "c",
       "t": "The relationship shown is an example of use-case generalization"
      },
      {
       "k": "d",
       "t": "The included use case helps reduce duplication in system behavior"
      },
      {
       "k": "e",
       "t": "Verify Member is executed only under exceptional conditions"
      },
      {
       "k": "f",
       "t": "The diagram represents an «include» relationship between use cases"
      }
     ],
     "ans": [
      "a",
      "b",
      "d",
      "f"
     ],
     "sol": "An «include» relationship means the included use case is always executed and represents reusable common functionality. It helps reduce duplication among use cases.",
     "fig": "w7q4",
     "fixes": [
      "The source PDF shows a diagram referenced by this question; it is recreated here as a labelled SVG based on the original."
     ]
    },
    {
     "id": "w7q5",
     "week": 7,
     "n": 5,
     "text": "Consider the following UML use-case diagram: Which of the following statements are correct regarding the above diagram?",
     "options": [
      {
       "k": "a",
       "t": "Withdraw Cash provides optional behavior to Print Receipt"
      },
      {
       "k": "b",
       "t": "The base use case Withdraw Cash can execute without Print Receipt"
      },
      {
       "k": "c",
       "t": "The «extend» relationship is used to model conditional or optional functionality"
      },
      {
       "k": "d",
       "t": "Withdraw Cash extends Print Receipt"
      },
      {
       "k": "e",
       "t": "Print Receipt is always executed whenever Withdraw Cash occurs"
      },
      {
       "k": "f",
       "t": "The extending use case is invoked only under specific conditions"
      }
     ],
     "ans": [
      "b",
      "c",
      "f"
     ],
     "sol": "An «extend» relationship models optional/conditional behavior. The base use case can execute independently, while the extending use case runs only under specific conditions.",
     "fig": "w7q5",
     "fixes": [
      "The source PDF shows a diagram referenced by this question; it is recreated here as a labelled SVG based on the original."
     ]
    },
    {
     "id": "w7q6",
     "week": 7,
     "n": 6,
     "text": "In an online shopping system, before a customer can place an order, the system must verify whether the payment details are valid. Which of the following UML use-case relationships is most appropriate to factor the Place Order use case into Validate Payment functionality?",
     "options": [
      {
       "k": "a",
       "t": "Aggregation"
      },
      {
       "k": "b",
       "t": "Include"
      },
      {
       "k": "c",
       "t": "Extend"
      },
      {
       "k": "d",
       "t": "Inheritance"
      },
      {
       "k": "e",
       "t": "Dependency"
      },
      {
       "k": "f",
       "t": "Composition"
      }
     ],
     "ans": [
      "b"
     ],
     "sol": "Validate Payment is mandatory before Place Order can complete. The «include» relationship is used for mandatory reusable functionality."
    },
    {
     "id": "w7q7",
     "week": 7,
     "n": 7,
     "text": "Which of the following are NOT characteristics of a good textual description accompanying a UML use-case diagram?",
     "options": [
      {
       "k": "a",
       "t": "The textual description should be understandable from the actor’s perspective"
      },
      {
       "k": "b",
       "t": "The description should be written entirely using programming language syntax"
      },
      {
       "k": "c",
       "t": "The description should focus on interactions between the actor and the system"
      },
      {
       "k": "d",
       "t": "The use-case description should primarily describe message exchanges among classes"
      },
      {
       "k": "e",
       "t": "The description should conclude after the system responds to the actor’s request"
      },
      {
       "k": "f",
       "t": "The textual description should rely mainly on internal implementation details familiar only to developers"
      }
     ],
     "ans": [
      "b",
      "d",
      "f"
     ],
     "sol": "Use-case descriptions should be written in simple user-oriented language focusing on actor- system interaction, not programming syntax, class-level details, or implementation internals."
    },
    {
     "id": "w7q8",
     "week": 7,
     "n": 8,
     "text": "Which of the following statements are FALSE regarding UML models of a software system?",
     "options": [
      {
       "k": "a",
       "t": "UML models help manage system complexity through abstraction"
      },
      {
       "k": "b",
       "t": "Every UML model represents the design view of a system only"
      },
      {
       "k": "c",
       "t": "UML design diagrams are models of the system"
      },
      {
       "k": "d",
       "t": "UML models are useful only after the software has been fully implemented."
      },
      {
       "k": "e",
       "t": "Dynamic UML models represent behavioral aspects of the system"
      },
      {
       "k": "f",
       "t": "Static UML models represent structural aspects of the system"
      }
     ],
     "ans": [
      "b",
      "d"
     ],
     "sol": "UML models are not limited to the design view only; they can represent analysis, design, and other perspectives. UML models are useful throughout development, not only after implementation."
    },
    {
     "id": "w7q9",
     "week": 7,
     "n": 9,
     "text": "For a class hierarchy to support runtime polymorphism in an object-oriented system, which of the following relationships or features are generally required?",
     "options": [
      {
       "k": "a",
       "t": "Inheritance"
      },
      {
       "k": "b",
       "t": "Aggregation"
      },
      {
       "k": "c",
       "t": "Method overriding"
      },
      {
       "k": "d",
       "t": "Generalization"
      },
      {
       "k": "e",
       "t": "Dependency"
      }
     ],
     "ans": [
      "a",
      "c",
      "d"
     ],
     "sol": "Runtime polymorphism requires inheritance/generalization and method overriding so that derived class methods can be invoked through base class references."
    },
    {
     "id": "w7q10",
     "week": 7,
     "n": 10,
     "text": "Which of the following are important advantages of using inheritance in object-oriented design?",
     "options": [
      {
       "k": "a",
       "t": "Code reusability"
      },
      {
       "k": "b",
       "t": "Increased duplication of code"
      },
      {
       "k": "c",
       "t": "Support for extensibility"
      },
      {
       "k": "d",
       "t": "Reduced maintainability"
      },
      {
       "k": "e",
       "t": "Hierarchical classification of classes"
      }
     ],
     "ans": [
      "a",
      "c",
      "e"
     ],
     "sol": "Inheritance promotes code reuse, supports easy extension of existing classes, and helps organize classes into hierarchical structures."
    }
   ]
  },
  {
   "num": 8,
   "title": "OO Design: Class Relationships & Analysis Objects",
   "questions": [
    {
     "id": "w8q1",
     "week": 8,
     "n": 1,
     "text": "Based on the following UML diagram, which of the following statements are correct?",
     "options": [
      {
       "k": "a",
       "t": "A Branch may not have any Account"
      },
      {
       "k": "b",
       "t": "An Account can exist without being issued by a Branch"
      },
      {
       "k": "c",
       "t": "An Account may use multiple ATMs"
      },
      {
       "k": "d",
       "t": "Current inherits from Saving"
      },
      {
       "k": "e",
       "t": "An Account may be issued by 2 Branches"
      },
      {
       "k": "f",
       "t": "A Customer must have at least one Account"
      },
      {
       "k": "g",
       "t": "A Saving is an Account"
      }
     ],
     "ans": [
      "c",
      "g"
     ],
     "sol": "An account may use multiple ATMs and A saving is an account are the correct option.",
     "fig": "w8q1",
     "fixes": [
      "The source PDF shows a diagram referenced by this question; it is recreated here as a labelled SVG based on the original."
     ]
    },
    {
     "id": "w8q2",
     "week": 8,
     "n": 2,
     "text": "Based on the UML relationship shown in the diagram, which of the following statements are correct?",
     "options": [
      {
       "k": "a",
       "t": "A Circle is composed of a Point"
      },
      {
       "k": "b",
       "t": "A Point in the composition relationship has a lifecycle independent of the Circle."
      },
      {
       "k": "c",
       "t": "The relationship shown is inheritance"
      },
      {
       "k": "d",
       "t": "Polygon and Circle are subclasses of Point"
      },
      {
       "k": "e",
       "t": "The diagram represents a “has-a” relationship between Polygon and Point classes"
      }
     ],
     "ans": [
      "a",
      "e"
     ],
     "sol": "A Circle is composed of Point(s), indicating a strong whole-part relationship. Polygon has a \"has-a\" relationship with Point. Composition does not imply inheritance, and Points in composition do not have an independent lifecycle.",
     "fig": "w8q2",
     "fixes": [
      "The source PDF shows a diagram referenced by this question; it is recreated here as a labelled SVG based on the original."
     ]
    },
    {
     "id": "w8q3",
     "week": 8,
     "n": 3,
     "text": "Based on the UML composition relationship shown, which of the following statements are correct?",
     "options": [
      {
       "k": "a",
       "t": "A Window may contain multiple Frames"
      },
      {
       "k": "b",
       "t": "A Frame can simultaneously belong to multiple Windows"
      },
      {
       "k": "c",
       "t": "Destruction of a Window implies destruction of its Frames"
      },
      {
       "k": "d",
       "t": "The relationship shown between the classes Window and Frame is composition"
      },
      {
       "k": "e",
       "t": "Frame inherits from Window"
      }
     ],
     "ans": [
      "a",
      "c",
      "d"
     ],
     "sol": "From the above diagram a., c. and d. are the correct option.",
     "fig": "w8q3",
     "fixes": [
      "The source PDF shows a diagram referenced by this question; it is recreated here as a labelled SVG based on the original."
     ]
    },
    {
     "id": "w8q4",
     "week": 8,
     "n": 4,
     "text": "Based on the following Java code, which of the following statements are correct? \n public class Car{\n private Wheel wheels[4];\n public Car (){\n wheels[0] = new Wheel();\n wheels[1] = new Wheel();\n wheels[2] = new Wheel();\n wheels[3] = new Wheel();\n }\n }",
     "options": [
      {
       "k": "a",
       "t": "A Car object contains exactly four Wheel objects"
      },
      {
       "k": "b",
       "t": "The relationship between Car and Wheel is composition"
      },
      {
       "k": "c",
       "t": "A Wheel object may independently exist outside a Car in this design"
      },
      {
       "k": "d",
       "t": "Car is responsible for creating its Wheel objects"
      },
      {
       "k": "e",
       "t": "Wheel inherits from Car"
      }
     ],
     "ans": [
      "a",
      "b",
      "d"
     ],
     "sol": "A Car creates and owns exactly four Wheel objects, indicating a composition relationship. The wheels are created inside the Car constructor."
    },
    {
     "id": "w8q5",
     "week": 8,
     "n": 5,
     "text": "Based on the UML sequence diagram shown, which of the following statements are correct?",
     "options": [
      {
       "k": "a",
       "t": "The diagram represents interaction among objects over time"
      },
      {
       "k": "b",
       "t": "Dashed vertical lines represent object lifelines"
      },
      {
       "k": "c",
       "t": "Rectangles on lifelines denote object activity/activation"
      },
      {
       "k": "d",
       "t": "Sequence diagrams primarily represent inheritance relationships"
      },
      {
       "k": "e",
       "t": "Objects are typically shown at the top of the diagram"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "e"
     ],
     "sol": "Sequence diagram does not represent inheritance relationship.",
     "fig": "w8q5",
     "fixes": [
      "The source PDF shows a diagram referenced by this question; it is recreated here as a labelled SVG based on the original."
     ]
    },
    {
     "id": "w8q6",
     "week": 8,
     "n": 6,
     "text": "Based on the comparison between Object-Oriented Analysis (OOA) and Object-Oriented Design (OOD), which of the following statements are correct?",
     "options": [
      {
       "k": "a",
       "t": "OOA focuses on system design"
      },
      {
       "k": "b",
       "t": "OOD is completely independent of implementation constraints"
      },
      {
       "k": "c",
       "t": "OOD refines the analysis model into a design solution"
      },
      {
       "k": "d",
       "t": "OOA is generally implementation-independent"
      },
      {
       "k": "e",
       "t": "OOD takes implementation considerations into account"
      }
     ],
     "ans": [
      "c",
      "d",
      "e"
     ],
     "sol": "OOA focuses on analyzing requirements and is mostly implementation-independent. OOD refines the analysis model into an implementable design considering implementation constraints."
    },
    {
     "id": "w8q7",
     "week": 8,
     "n": 7,
     "text": "In object-oriented analysis, which of the following are typical responsibilities of Boundary objects?",
     "options": [
      {
       "k": "a",
       "t": "Managing persistent business data"
      },
      {
       "k": "b",
       "t": "Interacting with external actors/users"
      },
      {
       "k": "c",
       "t": "Handling communication between the system and its environment"
      },
      {
       "k": "d",
       "t": "Coordinating complex control flow logic"
      },
      {
       "k": "e",
       "t": "Representing user interfaces or external interfaces"
      }
     ],
     "ans": [
      "b",
      "c",
      "e"
     ],
     "sol": "Boundary objects interact with users/external systems and represent interfaces such as screens, forms, or APIs. They do not store persistent data or control workflow logic."
    },
    {
     "id": "w8q8",
     "week": 8,
     "n": 8,
     "text": "Which of the following statements about Entity Objects are correct?",
     "options": [
      {
       "k": "a",
       "t": "Entity objects typically store information for transient use"
      },
      {
       "k": "b",
       "t": "Entity objects are mainly responsible for user interaction"
      },
      {
       "k": "c",
       "t": "Entity objects may perform elementary operations such as searching and sorting"
      },
      {
       "k": "d",
       "t": "Entity objects are often identified from nouns in the problem description"
      },
      {
       "k": "e",
       "t": "Entity objects usually coordinate overall system control flow"
      },
      {
       "k": "f",
       "t": "Examples of entity objects include Book and BookRegister"
      }
     ],
     "ans": [
      "c",
      "d",
      "f"
     ],
     "sol": "Entity objects represent persistent business data and may perform simple operations on that data. They are often identified from nouns in the problem domain."
    },
    {
     "id": "w8q9",
     "week": 8,
     "n": 9,
     "text": "Which one of the following statement about Controller Objects is FALSE?",
     "options": [
      {
       "k": "a",
       "t": "Controller objects help realize use case behavior"
      },
      {
       "k": "b",
       "t": "Controller objects interact with boundary objects"
      },
      {
       "k": "c",
       "t": "Controller objects coordinate the activities of entity objects"
      },
      {
       "k": "d",
       "t": "Controller objects primarily store long-term persistent data"
      },
      {
       "k": "e",
       "t": "A single use case may involve multiple controller objects"
      },
      {
       "k": "f",
       "t": "Controller objects often contain significant business logic"
      }
     ],
     "ans": [
      "d"
     ],
     "sol": "Controller objects coordinate use-case flow and business logic, but persistent long-term data is mainly handled by Entity objects."
    },
    {
     "id": "w8q10",
     "week": 8,
     "n": 10,
     "text": "Which of the following statements about composite states in UML state machines are correct?",
     "options": [
      {
       "k": "a",
       "t": "A composite state needs to  contain three or more nested substates"
      },
      {
       "k": "b",
       "t": "Composite states help reduce complexity in state diagrams"
      },
      {
       "k": "c",
       "t": "A system can be in only the composite state and never in its substates"
      },
      {
       "k": "d",
       "t": "Composite states support hierarchical state modeling"
      },
      {
       "k": "e",
       "t": "Entry into a composite state may automatically activate one of its substates"
      }
     ],
     "ans": [
      "b",
      "d",
      "e"
     ],
     "sol": "Composite states simplify complex state diagrams and support hierarchical state modeling. Entering a composite state can automatically activate a default substate."
    }
   ]
  },
  {
   "num": 9,
   "title": "Software Testing Fundamentals",
   "questions": [
    {
     "id": "w9q1",
     "week": 9,
     "n": 1,
     "text": "Which of the following are purposes of using CRC cards in object-oriented design?",
     "options": [
      {
       "k": "a",
       "t": "Identifying class responsibilities"
      },
      {
       "k": "b",
       "t": "Discovering collaborations among classes"
      },
      {
       "k": "c",
       "t": "Replacing sequence diagrams with collaboration diagrams"
      },
      {
       "k": "d",
       "t": "Analysis of complex sequence diagrams"
      },
      {
       "k": "e",
       "t": "Determining low-level machine instructions"
      }
     ],
     "ans": [
      "a",
      "b"
     ],
     "sol": "CRC cards are used to identify class responsibilities and collaborations among classes during object-oriented design. They are not used for low-level implementation details."
    },
    {
     "id": "w9q2",
     "week": 9,
     "n": 2,
     "text": "Which of the following do NOT serve as useful guidelines for identifying boundary classes from a problem description?",
     "options": [
      {
       "k": "a",
       "t": "Boundary classes often represent interfaces between the system and external actors"
      },
      {
       "k": "b",
       "t": "Every noun appearing in the problem description must be modeled as a boundary class"
      },
      {
       "k": "c",
       "t": "Screens, forms, and dialogs may correspond to boundary classes"
      },
      {
       "k": "d",
       "t": "Boundary classes are responsible for long-term data storage"
      },
      {
       "k": "e",
       "t": "External system interfaces may lead to identification of boundary classes"
      }
     ],
     "ans": [
      "b",
      "d"
     ],
     "sol": "Not every noun becomes a boundary class, and boundary classes do not handle long-term data storage. They mainly represent interfaces between the system and external actors."
    },
    {
     "id": "w9q3",
     "week": 9,
     "n": 3,
     "text": "Which of the following statements represent software failures observed during testing?",
     "options": [
      {
       "k": "a",
       "t": "The analyst omitted an important requirement from the specification"
      },
      {
       "k": "b",
       "t": "The programmer used ‘*’ instead of  ‘/’ in an arithmetic expression"
      },
      {
       "k": "c",
       "t": "The application terminates unexpectedly for a valid user input"
      },
      {
       "k": "d",
       "t": "A tester observes an incorrect output for a valid transaction"
      },
      {
       "k": "e",
       "t": "A reviewer submits a report of a logical defect that was identified during code inspection"
      },
      {
       "k": "f",
       "t": "The software hangs when multiple users access it simultaneously"
      }
     ],
     "ans": [
      "c",
      "d",
      "f"
     ],
     "sol": "A software failure is an observable incorrect behavior during execution, such as crashes, incorrect outputs, or system hangs."
    },
    {
     "id": "w9q4",
     "week": 9,
     "n": 4,
     "text": "Which of the following activities are primarily considered validation activities in software engineering?",
     "options": [
      {
       "k": "a",
       "t": "Code inspection"
      },
      {
       "k": "b",
       "t": "Acceptance testing"
      },
      {
       "k": "c",
       "t": "System testing"
      },
      {
       "k": "d",
       "t": "User evaluation of prototypes"
      },
      {
       "k": "e",
       "t": "Design walkthrough"
      }
     ],
     "ans": [
      "b",
      "c",
      "d"
     ],
     "sol": "Validation checks whether the software satisfies user needs. Acceptance testing, system testing, and user evaluation of prototypes are validation activities."
    },
    {
     "id": "w9q5",
     "week": 9,
     "n": 5,
     "text": "Which of the following are examples of failures rather than faults or errors in software engineering?",
     "options": [
      {
       "k": "a",
       "t": "Incorrect operator used in source code"
      },
      {
       "k": "b",
       "t": "The software freezes during execution"
      },
      {
       "k": "c",
       "t": "A tester observes an unexpected output from the program"
      },
      {
       "k": "d",
       "t": "A programmer misunderstands the design specification"
      },
      {
       "k": "e",
       "t": "The system rejects a valid input value"
      },
      {
       "k": "f",
       "t": "A code inspection reveals a missing condition check"
      }
     ],
     "ans": [
      "b",
      "c",
      "e"
     ],
     "sol": "Failures are observable incorrect behaviors during execution, such as freezing, wrong outputs, or rejecting valid inputs."
    },
    {
     "id": "w9q6",
     "week": 9,
     "n": 6,
     "text": "What is the number of boundary classes that must be included in the domain model for a software development project whose use case diagram is shown below?",
     "options": [
      {
       "k": "a",
       "t": "4"
      },
      {
       "k": "b",
       "t": "5"
      },
      {
       "k": "c",
       "t": "6"
      },
      {
       "k": "d",
       "t": "7"
      },
      {
       "k": "e",
       "t": "8"
      }
     ],
     "ans": [
      "b"
     ],
     "sol": "The number of boundary classes depends on the actor–use case interactions shown in the diagram. So, number of boundary classes = 5",
     "fixes": [
      "Whitespace/exponent restored from PDF text extraction: 'boundary classes =5 .' -> 'boundary classes = 5'.",
      "The source PDF shows a diagram referenced by this question; it is recreated here as a labelled SVG based on the original."
     ],
     "fig": "w9q6"
    },
    {
     "id": "w9q7",
     "week": 9,
     "n": 7,
     "text": "A software company observes that software testing consumes a large portion of total project effort, but testing activities are often completed within a relatively short calendar duration. Which of the following factors can explain this situation?",
     "options": [
      {
       "k": "a",
       "t": "Multiple testing activities can be executed in parallel"
      },
      {
       "k": "b",
       "t": "Automated testing tools can significantly reduce testing time"
      },
      {
       "k": "c",
       "t": "Testing teams are usually larger than coding teams"
      },
      {
       "k": "d",
       "t": "Several testers can independently execute different test cases simultaneously"
      },
      {
       "k": "e",
       "t": "Testing is typically less complex than software design"
      }
     ],
     "ans": [
      "a",
      "b",
      "d"
     ],
     "sol": "Testing can finish in shorter calendar time because many testing tasks and test cases can run in parallel, often supported by automation tools."
    },
    {
     "id": "w9q8",
     "week": 9,
     "n": 8,
     "text": "Which of the following statements are true regarding negative test cases?",
     "options": [
      {
       "k": "a",
       "t": "Negative testing is mainly intended to confirm that the software crashes for incorrect inputs"
      },
      {
       "k": "b",
       "t": "Negative test cases verify whether the software can gracefully handle invalid inputs"
      },
      {
       "k": "c",
       "t": "Entering alphabetic characters into a numeric field is an example of negative testing"
      },
      {
       "k": "d",
       "t": "Negative test cases help improve software robustness and reliability"
      },
      {
       "k": "e",
       "t": "Negative testing is unnecessary if positive test cases have already passed"
      }
     ],
     "ans": [
      "b",
      "c",
      "d"
     ],
     "sol": "Negative testing checks whether software handles invalid inputs properly. Invalid inputs like alphabets in numeric fields help improve robustness and reliability."
    },
    {
     "id": "w9q9",
     "week": 9,
     "n": 9,
     "text": "Which of the following statements are correct consequences of the pesticide effect in software testing?",
     "options": [
      {
       "k": "a",
       "t": "The pesticide effect suggests that testing activities can stop once a test suite has been executed several times."
      },
      {
       "k": "b",
       "t": "Repeating the same set of test cases indefinitely may result in fewer new defects being detected over time."
      },
      {
       "k": "c",
       "t": "Test cases should be periodically reviewed, modified, and supplemented with new tests."
      },
      {
       "k": "d",
       "t": "Executing the same test suite repeatedly guarantees that all remaining defects will eventually be found."
      },
      {
       "k": "e",
       "t": "A test suite that was effective in the past may become less effective at finding new defects in the future."
      }
     ],
     "ans": [
      "b",
      "c",
      "e"
     ],
     "sol": "The pesticide effect states that repeatedly running the same tests finds fewer new defects over time. Therefore, test cases should be updated regularly, as previously effective test suites may lose effectiveness."
    },
    {
     "id": "w9q10",
     "week": 9,
     "n": 10,
     "text": "Which of the following statements are true regarding who tests software?",
     "options": [
      {
       "k": "a",
       "t": "Programmers commonly perform system testing"
      },
      {
       "k": "b",
       "t": "Users are mainly responsible for integration testing"
      },
      {
       "k": "c",
       "t": "Beta versions of software are often tested by a set of friendly customers"
      },
      {
       "k": "d",
       "t": "A dedicated test team may develop system test plans and testing strategies"
      },
      {
       "k": "e",
       "t": "Test teams usually perform all forms of testing except unit and acceptance testing"
      }
     ],
     "ans": [
      "c",
      "d",
      "e"
     ],
     "sol": "Beta testing is often done by selected customers, while dedicated test teams handle most testing activities except unit testing and acceptance testing."
    }
   ]
  },
  {
   "num": 10,
   "title": "Black-Box Testing Techniques",
   "questions": [
    {
     "id": "w10q1",
     "week": 10,
     "n": 1,
     "text": "A software organization observes from past projects that approximately 40% of defects are detected during unit testing, 35% during integration testing, and 25% during system testing. If the total planned testing effort for a project is 200 person-months, how much effort should ideally be allocated to integration testing?",
     "options": [
      {
       "k": "a",
       "t": "50 person-months"
      },
      {
       "k": "b",
       "t": "60 person-months"
      },
      {
       "k": "c",
       "t": "70 person-months"
      },
      {
       "k": "d",
       "t": "80 person-months"
      },
      {
       "k": "e",
       "t": "90 person-months"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "Integration testing effort = 35% × 200 = 70 person-months.",
     "fixes": [
      "Whitespace/exponent restored from PDF text extraction: '70person-months' -> '70 person-months'."
     ]
    },
    {
     "id": "w10q2",
     "week": 10,
     "n": 2,
     "text": "Consider a function named triangleType(a,b,c) that determines whether three integer side lengths form an Equilateral, Isosceles, or Scalene triangle. Assuming only valid equivalence classes are considered, what is the minimum number of test cases required for equivalence class testing?",
     "options": [
      {
       "k": "a",
       "t": "1"
      },
      {
       "k": "b",
       "t": "2"
      },
      {
       "k": "c",
       "t": "3"
      },
      {
       "k": "d",
       "t": "4"
      },
      {
       "k": "e",
       "t": "5"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "The valid equivalence classes are Equilateral, Isosceles, and Scalene triangles. One test case is needed for each class."
    },
    {
     "id": "w10q3",
     "week": 10,
     "n": 3,
     "text": "Which of the following are not black-box testing techniques?",
     "options": [
      {
       "k": "a",
       "t": "Equivalence class testing"
      },
      {
       "k": "b",
       "t": "Boundary value analysis"
      },
      {
       "k": "c",
       "t": "Statement coverage testing"
      },
      {
       "k": "d",
       "t": "Path testing"
      },
      {
       "k": "e",
       "t": "Decision table testing"
      }
     ],
     "ans": [
      "c",
      "d"
     ],
     "sol": "Statement coverage and path testing are white-box testing techniques because they depend on the internal structure and control flow of the program."
    },
    {
     "id": "w10q4",
     "week": 10,
     "n": 4,
     "text": "Assume that a web-based examination system has three input fields: Subject, Difficulty Level, and Question Type. \nSubject can take 5 valid values: {Math, Physics, Chemistry, Biology, English} \nDifficulty Level can take 3 valid values: {Easy, Medium, Hard} \nQuestion Type can take 4 valid values: {MCQ, MSQ, NAT, Essay} Assuming that the interface allows only valid inputs, how many test cases are required for exhaustive functional testing?",
     "options": [
      {
       "k": "a",
       "t": "12"
      },
      {
       "k": "b",
       "t": "48"
      },
      {
       "k": "c",
       "t": "60"
      },
      {
       "k": "d",
       "t": "75"
      },
      {
       "k": "e",
       "t": "120"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "Exhaustive testing requires testing all possible valid combinations: 5 × 3 × 4 = 60 test cases.",
     "fixes": [
      "Whitespace/exponent restored from PDF text extraction: '60test cases' -> '60 test cases'."
     ]
    },
    {
     "id": "w10q5",
     "week": 10,
     "n": 5,
     "text": "Which of the following statements are false regarding white-box testing?",
     "options": [
      {
       "k": "a",
       "t": "White-box testing requires knowledge of the program’s internal logic and structure"
      },
      {
       "k": "b",
       "t": "Path testing is a white-box testing technique"
      },
      {
       "k": "c",
       "t": "White-box testing is also known as behavioral testing"
      },
      {
       "k": "d",
       "t": "Statement coverage is one possible white-box testing strategy"
      },
      {
       "k": "e",
       "t": "Test cases in white-box testing are designed independently of the program code"
      }
     ],
     "ans": [
      "c",
      "e"
     ],
     "sol": "White-box testing is structure-based testing, not behavioral testing. Its test cases are designed using knowledge of the program code and logic."
    },
    {
     "id": "w10q6",
     "week": 10,
     "n": 6,
     "text": "Consider the function checkTriangle(float a, float b, float c) that determines whether three side lengths can form a valid triangle. For equivalence class testing, at the first level of the equivalence class hierarchy, valid and invalid equivalence classes can be identified. The valid set of input values can be further divided into how many equivalence classes?",
     "options": [
      {
       "k": "a",
       "t": "1"
      },
      {
       "k": "b",
       "t": "2"
      },
      {
       "k": "c",
       "t": "3"
      },
      {
       "k": "d",
       "t": "4"
      },
      {
       "k": "e",
       "t": "5"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "The valid triangle inputs can be divided into three equivalence classes: Equilateral, Isosceles, and Scalene triangles."
    },
    {
     "id": "w10q7",
     "week": 10,
     "n": 7,
     "text": "Which one of the following assumptions underlies boundary value analysis testing?",
     "options": [
      {
       "k": "a",
       "t": "Errors are more likely to occur near the extreme ends of input ranges"
      },
      {
       "k": "b",
       "t": "All invalid inputs produce identical program behavior"
      },
      {
       "k": "c",
       "t": "Programs behave identically for all valid inputs"
      },
      {
       "k": "d",
       "t": "Boundary values are always invalid inputs"
      },
      {
       "k": "e",
       "t": "Every software fault can be detected using boundary values alone"
      }
     ],
     "ans": [
      "a"
     ],
     "sol": "Boundary Value Analysis assumes that errors are more likely to occur near the boundaries or extreme ends of input ranges."
    },
    {
     "id": "w10q8",
     "week": 10,
     "n": 8,
     "text": "Suppose a function named check(a, b, c) takes three Boolean variables as input parameters. How many valid equivalence classes can be designed for black-box testing of the function?",
     "options": [
      {
       "k": "a",
       "t": "4"
      },
      {
       "k": "b",
       "t": "6"
      },
      {
       "k": "c",
       "t": "8"
      },
      {
       "k": "d",
       "t": "9"
      },
      {
       "k": "e",
       "t": "12"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "Each Boolean variable has 2 possible values (True/False). For 3 variables, total valid combinations are 2³ = 8.",
     "fixes": [
      "Whitespace/exponent restored from PDF text extraction: 'combinations are 23 = 8' -> 'combinations are 2³ = 8'."
     ]
    },
    {
     "id": "w10q9",
     "week": 10,
     "n": 9,
     "text": "Which of the following statements regarding unit testing, drivers, and stubs are correct?",
     "options": [
      {
       "k": "a",
       "t": "Unit testing is performed after integrating all modules of the software"
      },
      {
       "k": "b",
       "t": "A driver simulates the behavior of a calling function and provides input data to the unit under test"
      },
      {
       "k": "c",
       "t": "A stub simulates the behavior of a module that has not yet been implemented"
      },
      {
       "k": "d",
       "t": "Unit testing focuses on testing individual methods, modules, classes, or components in isolation"
      },
      {
       "k": "e",
       "t": "Drivers are mainly used to replace lower-level modules called by the tested component"
      },
      {
       "k": "f",
       "t": "Stubs are commonly used when the called modules are unavailable during testing"
      }
     ],
     "ans": [
      "b",
      "c",
      "d",
      "f"
     ],
     "sol": "Drivers provide input to the unit under test, while stubs simulate unavailable called modules. Unit testing tests individual components in isolation."
    },
    {
     "id": "w10q10",
     "week": 10,
     "n": 10,
     "text": "Consider a function substr(s1, s2) that takes two strings where s1 can have a maximum length of 20 characters and s2 can have a maximum length of 5 characters. The function checks whether s2 is a substring of s1. Which of the following represent valid equivalence classes for testing?",
     "options": [
      {
       "k": "a",
       "t": "s1 length between 1 and 20 characters"
      },
      {
       "k": "b",
       "t": "s1 length greater than 20 characters"
      },
      {
       "k": "c",
       "t": "s2 is a substring of s1"
      },
      {
       "k": "d",
       "t": "s2 is not a substring of s1"
      },
      {
       "k": "e",
       "t": "s2 length exactly equal to 3 only"
      },
      {
       "k": "f",
       "t": "s1 length always equal to 20 only"
      }
     ],
     "ans": [
      "a",
      "b",
      "c",
      "d"
     ],
     "sol": "Equivalence classes include valid/invalid string lengths and cases where s2 is or is not a substring of s1. Single exact lengths are not equivalence classes."
    }
   ]
  },
  {
   "num": 11,
   "title": "White-Box Coverage & Combinatorial Testing",
   "questions": [
    {
     "id": "w11q1",
     "week": 11,
     "n": 1,
     "text": "At least how many test cases are required to achieve multiple condition coverage for the following decision? \n if ((x > 0) || (y < 10)) z = z + 1;",
     "options": [
      {
       "k": "a",
       "t": "1"
      },
      {
       "k": "b",
       "t": "2"
      },
      {
       "k": "c",
       "t": "3"
      },
      {
       "k": "d",
       "t": "4"
      },
      {
       "k": "e",
       "t": "Multiple condition coverage is not achievable for the given decision"
      }
     ],
     "ans": [
      "d"
     ],
     "sol": "Multiple condition coverage requires testing all possible combinations of the two conditions. For 2 Boolean conditions, 2² = 4 test cases are needed.",
     "fixes": [
      "Whitespace/exponent restored from PDF text extraction: 'conditions, 22 = 4' -> 'conditions, 2² = 4'."
     ]
    },
    {
     "id": "w11q2",
     "week": 11,
     "n": 2,
     "text": "Which of the following statements about combinatorial testing are correct?",
     "options": [
      {
       "k": "a",
       "t": "It focuses on designing test cases based on combinations of input parameter values"
      },
      {
       "k": "b",
       "t": "Pairwise testing is a form of combinatorial testing"
      },
      {
       "k": "c",
       "t": "It guarantees exhaustive testing of all program paths"
      },
      {
       "k": "d",
       "t": "It helps reduce the number of test cases while still detecting many faults"
      },
      {
       "k": "e",
       "t": "It is mainly used only for white-box testing"
      }
     ],
     "ans": [
      "a",
      "b",
      "d"
     ],
     "sol": "Combinatorial testing designs test cases using combinations of input values. Pairwise testing is a common form that reduces test cases while still detecting many faults."
    },
    {
     "id": "w11q3",
     "week": 11,
     "n": 3,
     "text": "In combinatorial testing, a “t-way interaction” refers to:",
     "options": [
      {
       "k": "a",
       "t": "Testing interactions among t input parameters"
      },
      {
       "k": "b",
       "t": "Executing t program statements simultaneously"
      },
      {
       "k": "c",
       "t": "Testing only t test cases"
      },
      {
       "k": "d",
       "t": "Ensuring every combination of any t parameter values appears at least once"
      },
      {
       "k": "e",
       "t": "Measuring test execution time for t seconds"
      }
     ],
     "ans": [
      "a",
      "d"
     ],
     "sol": "A t-way interaction means interactions among any t input parameters are tested, ensuring every combination of those t parameter values appears at least once.",
     "fixes": [
      "Whitespace/exponent restored from PDF text extraction: 'tinput parameters' -> 't input parameters'.",
      "Whitespace/exponent restored from PDF text extraction: 'tparameter values' -> 't parameter values'."
     ]
    },
    {
     "id": "w11q4",
     "week": 11,
     "n": 4,
     "text": "Consider a system with three Boolean input parameters A, B, and C. Which of the following statements are true regarding exhaustive combinational testing?",
     "options": [
      {
       "k": "a",
       "t": "Exhaustive combinatorial testing would require 16 test cases"
      },
      {
       "k": "b",
       "t": "Pairwise testing would always require 8 test cases"
      },
      {
       "k": "c",
       "t": "Exhaustive testing checks every possible input combination"
      },
      {
       "k": "d",
       "t": "Combinatorial testing can sometimes reduce the number of test cases"
      },
      {
       "k": "e",
       "t": "Decision tables are typically used to design exhaustive combinatorial testing"
      }
     ],
     "ans": [
      "c",
      "d"
     ],
     "sol": "Exhaustive combinatorial testing checks all possible input combinations. Combinatorial techniques like pairwise testing can reduce the number of required test cases."
    },
    {
     "id": "w11q5",
     "week": 11,
     "n": 5,
     "text": "A railway ticket booking system is to be tested using a decision table with the following conditions: Seats available, Payment successful, Passenger verified. The actions include: Confirm booking, Generate waiting ticket, Ask to retry payment, Reject booking. Which of the following statements are true?",
     "options": [
      {
       "k": "a",
       "t": "A rule would be if payment fails, ask to retry payment action is triggered"
      },
      {
       "k": "b",
       "t": "“Confirm booking” action would require all conditions to be satisfied"
      },
      {
       "k": "c",
       "t": "Decision tables help systematically derive minimal test cases for exhaustive testing"
      },
      {
       "k": "d",
       "t": "Exhaustive program path testing is ensured when using decision table-based testing"
      },
      {
       "k": "e",
       "t": "Multiple rules in a decision table can map to the same action"
      }
     ],
     "ans": [
      "a",
      "b",
      "e"
     ],
     "sol": "Decision tables map condition combinations to actions. Multiple rules may lead to the same action, and confirming booking requires all necessary conditions to be satisfied"
    },
    {
     "id": "w11q6",
     "week": 11,
     "n": 6,
     "text": "In cause-effect graphing, which of the following are correctly matched?",
     "options": [
      {
       "k": "a",
       "t": "Causes → Input conditions"
      },
      {
       "k": "b",
       "t": "Effects → Output conditions"
      },
      {
       "k": "c",
       "t": "Nodes → Representation of causes and effects"
      },
      {
       "k": "d",
       "t": "Constraints → Restrictions on outputs only"
      },
      {
       "k": "e",
       "t": "Intermediate nodes → Randomly generated test cases"
      }
     ],
     "ans": [
      "a",
      "b",
      "c"
     ],
     "sol": "Causes represent input conditions, effects represent output conditions, and nodes represent causes/effects in the graph. Constraints are not restrictions on outputs only, and intermediate nodes represent logical expressions, not test cases."
    },
    {
     "id": "w11q7",
     "week": 11,
     "n": 7,
     "text": "Which of the following statements about black-box testing are true?",
     "options": [
      {
       "k": "a",
       "t": "It guarantees complete statement coverage"
      },
      {
       "k": "b",
       "t": "It is impossible to test every possible input-output combination for non-trivial systems"
      },
      {
       "k": "c",
       "t": "Some parts of the code may remain unreachable during testing"
      },
      {
       "k": "d",
       "t": "It can determine whether extra functionality has been implemented"
      },
      {
       "k": "e",
       "t": "It focuses on functional behavior without examining internal code"
      }
     ],
     "ans": [
      "b",
      "c",
      "e"
     ],
     "sol": "Black-box testing focuses only on external behavior and cannot ensure complete code coverage. Some code may remain unexecuted during testing."
    },
    {
     "id": "w11q8",
     "week": 11,
     "n": 8,
     "text": "Which of the following are true regarding the shortcomings of relying on only one testing approach?",
     "options": [
      {
       "k": "a",
       "t": "Using only black-box testing may leave some code untested"
      },
      {
       "k": "b",
       "t": "Using only white-box testing may fail to detect missing requirements"
      },
      {
       "k": "c",
       "t": "White-box testing is preferred as it guarantees functional correctness"
      },
      {
       "k": "d",
       "t": "Black-box testing is preferred as it guarantees detection of extra functionality"
      },
      {
       "k": "e",
       "t": "Both approaches together provide complete fault detection"
      }
     ],
     "ans": [
      "a",
      "b"
     ],
     "sol": "Only black-box testing may leave some internal code untested, while only white-box testing may miss missing or incorrect requirements."
    },
    {
     "id": "w11q9",
     "week": 11,
     "n": 9,
     "text": "For the following program statement, which of the following test suites would achieve basic condition coverage? \n if (x>=5 || y<20) z++;",
     "options": [
      {
       "k": "a",
       "t": "(x=10,y=30), (x=2,y=10)"
      },
      {
       "k": "b",
       "t": "(x=10,y=30), (x=1,y=25)"
      },
      {
       "k": "c",
       "t": "(x=7,y=15), (x=1,y=10)"
      },
      {
       "k": "d",
       "t": "(x=8,y=40), (x=2,y=5), (x=1,y=30)"
      },
      {
       "k": "e",
       "t": "(x=6,y=18), (x=2,y=25)"
      }
     ],
     "ans": [
      "a",
      "d",
      "e"
     ],
     "sol": "Basic condition coverage requires each atomic condition (x>=5 and y<20) to evaluate to both True and False at least once across the test suite. Options (a), (d), and (e) satisfy this requirement."
    },
    {
     "id": "w11q10",
     "week": 11,
     "n": 10,
     "text": "At least how many test cases are needed for achieving decision coverage on the given C code? \n int main() {\n int x, y = 0;\n scanf(\"%d\", &x);\n if (x > 50)\n y = y + 5;\n else\n y = y + 10;\n if (x % 2 == 0)\n y = y + 20;\n else\n y = y + 30;\n }",
     "options": [
      {
       "k": "a",
       "t": "1"
      },
      {
       "k": "b",
       "t": "2"
      },
      {
       "k": "c",
       "t": "3"
      },
      {
       "k": "d",
       "t": "4"
      },
      {
       "k": "e",
       "t": "5"
      }
     ],
     "ans": [
      "b"
     ],
     "sol": "Decision coverage requires each decision to evaluate to both True and False at least once. Two test cases are sufficient to cover all outcomes of both if statements"
    }
   ]
  },
  {
   "num": 12,
   "title": "Advanced Testing: Cyclomatic Complexity & Mutation",
   "questions": [
    {
     "id": "w12q1",
     "week": 12,
     "n": 1,
     "text": "Which of the following statements regarding cyclomatic complexity are true?",
     "options": [
      {
       "k": "a",
       "t": "Higher cyclomatic complexity for a code indicates higher code quality"
      },
      {
       "k": "b",
       "t": "Higher cyclomatic complexity may indicate more potential errors in code"
      },
      {
       "k": "c",
       "t": "Cyclomatic complexity correlates well with execution speed directly"
      },
      {
       "k": "d",
       "t": "Programs with higher complexity may require more effort to understand"
      },
      {
       "k": "e",
       "t": "Cyclomatic complexity can be related to the effort required for debugging"
      }
     ],
     "ans": [
      "b",
      "d",
      "e"
     ],
     "sol": "Higher cyclomatic complexity usually indicates more complex code, which may increase error probability, understanding difficulty, and debugging effort"
    },
    {
     "id": "w12q2",
     "week": 12,
     "n": 2,
     "text": "Which of the following are true regarding the coverage strength of various white-box testing techniques?",
     "options": [
      {
       "k": "a",
       "t": "Statement coverage is among the weakest criteria shown"
      },
      {
       "k": "b",
       "t": "All path coverage is among the strongest criteria shown"
      },
      {
       "k": "c",
       "t": "Branch coverage guarantees multiple-condition coverage"
      },
      {
       "k": "d",
       "t": "MC/DC is stronger than branch and condition coverage"
      },
      {
       "k": "e",
       "t": "Condition coverage alone guarantees branch coverage"
      }
     ],
     "ans": [
      "a",
      "b",
      "d"
     ],
     "sol": "Statement coverage is relatively weak, while all path coverage is very strong. MC/DC is stronger than branch and condition coverage because it checks independent effect of each condition."
    },
    {
     "id": "w12q3",
     "week": 12,
     "n": 3,
     "text": "Which of the following statements about basis path coverage are true?",
     "options": [
      {
       "k": "a",
       "t": "It is also known as all path coverage"
      },
      {
       "k": "b",
       "t": "It is stronger than statement coverage"
      },
      {
       "k": "c",
       "t": "It guarantees exhaustive testing of all possible paths"
      },
      {
       "k": "d",
       "t": "It is related to cyclomatic complexity"
      },
      {
       "k": "e",
       "t": "It is weaker than branch coverage"
      }
     ],
     "ans": [
      "b",
      "d"
     ],
     "sol": "Basis path coverage tests independent execution paths and is stronger than statement coverage. It is directly related to cyclomatic complexity."
    },
    {
     "id": "w12q4",
     "week": 12,
     "n": 4,
     "text": "Which of the following statements regarding data flow testing are true?",
     "options": [
      {
       "k": "a",
       "t": "It focuses on the definition and use of variables in a program"
      },
      {
       "k": "b",
       "t": "It is a fault-based testing technique"
      },
      {
       "k": "c",
       "t": "It ignores control flow in the program completely"
      },
      {
       "k": "d",
       "t": "It helps detect anomalies such as variables being used before initialization"
      },
      {
       "k": "e",
       "t": "It is based on tracking the life cycle of data objects"
      }
     ],
     "ans": [
      "a",
      "d",
      "e"
     ],
     "sol": "Data flow testing analyzes variable definitions and uses to detect anomalies like using variables before initialization by tracking the data life cycle."
    },
    {
     "id": "w12q5",
     "week": 12,
     "n": 5,
     "text": "Which of the following statements regarding mutation testing are true?",
     "options": [
      {
       "k": "a",
       "t": "Equivalent mutants indicate that additional or improved test cases may be needed"
      },
      {
       "k": "b",
       "t": "Mutants are created by introducing small changes into the program"
      },
      {
       "k": "c",
       "t": "A mutant is said to be “killed” if a test case fails due to the change"
      },
      {
       "k": "d",
       "t": "Mutation testing is primarily a black-box testing technique"
      },
      {
       "k": "e",
       "t": "Mutation testing helps evaluate the effectiveness of a test suite"
      }
     ],
     "ans": [
      "b",
      "c",
      "e"
     ],
     "sol": "Mutation testing creates small code changes called mutants. A mutant is “killed” when test cases detect the change, helping evaluate test suite effectiveness."
    },
    {
     "id": "w12q6",
     "week": 12,
     "n": 6,
     "text": "Which of the following are objectives of mutation testing?",
     "options": [
      {
       "k": "a",
       "t": "Assess the fault-detection capability of test cases"
      },
      {
       "k": "b",
       "t": "Improve the quality of the test suite"
      },
      {
       "k": "c",
       "t": "Guarantee absence of all software defects"
      },
      {
       "k": "d",
       "t": "Identify weak test cases and eliminate them from the test suite"
      },
      {
       "k": "e",
       "t": "Identify duplicate and equivalent test cases and optimize the test suite"
      }
     ],
     "ans": [
      "a",
      "b"
     ],
     "sol": "Mutation testing evaluates how effectively test cases detect faults and helps improve the quality of the test suite."
    },
    {
     "id": "w12q7",
     "week": 12,
     "n": 7,
     "text": "In the context of mutation testing, suppose in a C program, the statement if(a > b) c=0; is replaced by if(a>=b-1) c=0; What kind of mutant has most likely been created?",
     "options": [
      {
       "k": "a",
       "t": "Trivial mutant"
      },
      {
       "k": "b",
       "t": "Stillborn mutant"
      },
      {
       "k": "c",
       "t": "Higher-order mutant"
      },
      {
       "k": "d",
       "t": "Equivalent mutant"
      },
      {
       "k": "e",
       "t": "Syntax mutant"
      }
     ],
     "ans": [
      "d"
     ],
     "sol": "The modified condition behaves similarly to the original for many integer values, so the mutant may produce the same output as the original program."
    },
    {
     "id": "w12q8",
     "week": 12,
     "n": 8,
     "text": "What would be the Cyclomatic complexity measure of the following program? \n int check(int a, int b, int c) {\n int result;\n if (a < b)\n if (a < c)\n result = a;\n else\n result = c;\n else\n if (b < c)\n result = b;\n else\n result = c;\n return result;\n }",
     "options": [
      {
       "k": "a",
       "t": "2"
      },
      {
       "k": "b",
       "t": "3"
      },
      {
       "k": "c",
       "t": "4"
      },
      {
       "k": "d",
       "t": "5"
      },
      {
       "k": "e",
       "t": "6"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "There are 3 if conditions, so complexity = 3 + 1 = 4.",
     "fixes": [
      "Whitespace/exponent restored from PDF text extraction: 'complexity = 3+ 1= 4' -> 'complexity = 3 + 1 = 4'."
     ]
    },
    {
     "id": "w12q9",
     "week": 12,
     "n": 9,
     "text": "Which of the following are major challenges associated with mutation testing?",
     "options": [
      {
       "k": "a",
       "t": "Mutation testing improves the fault-detection capability of test cases"
      },
      {
       "k": "b",
       "t": "Generating and managing mutants needs to be done manually, thereby resulting in a dramatic increase in testing costs"
      },
      {
       "k": "c",
       "t": "Large numbers of mutants may need to be executed"
      },
      {
       "k": "d",
       "t": "Equivalent mutants are difficult to identify automatically"
      },
      {
       "k": "e",
       "t": "Mutation testing is not as effective as other testing techniques"
      }
     ],
     "ans": [
      "c",
      "d"
     ],
     "sol": "Mutation testing may require executing many mutants, and equivalent mutants are difficult to detect automatically, making the process expensive and complex."
    },
    {
     "id": "w12q10",
     "week": 12,
     "n": 10,
     "text": "At least how many test cases are required to achieve MC/DC coverage of the following code segment: \n if ((p > 10) && (q < 50)) y = y + 1;",
     "options": [
      {
       "k": "a",
       "t": "1"
      },
      {
       "k": "b",
       "t": "2"
      },
      {
       "k": "c",
       "t": "3"
      },
      {
       "k": "d",
       "t": "4"
      },
      {
       "k": "e",
       "t": "6"
      }
     ],
     "ans": [
      "c"
     ],
     "sol": "MC/DC requires each condition to independently affect the decision outcome. For two conditions, the minimum required test cases are 3."
    }
   ]
  }
 ]
};
