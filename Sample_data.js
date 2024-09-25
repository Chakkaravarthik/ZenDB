const students = [
    {
      _id: "651234abcd1234abcd123401",
      name: "John Doe",
      email: "john@example.com",
      mentor_id: "651234abcd1234abcd123450",
      batch: "Zen-2023",
      codekata_score: 100,
      attendance: [
        { date: "2020-10-16T00:00:00Z", status: "present" },
        { date: "2020-10-17T00:00:00Z", status: "absent" }
      ],
      tasks: [
        {
          task_id: "651234abcd1234abcd123401",
          submitted: true,
          submission_date: "2020-10-17T00:00:00Z"
        }
      ]
    },
    {
      _id: "651234abcd1234abcd123402",
      name: "Jane Smith",
      email: "jane@example.com",
      mentor_id: "651234abcd1234abcd123451",
      batch: "Zen-2023",
      codekata_score: 150,
      attendance: [
        { date: "2020-10-16T00:00:00Z", status: "absent" },
        { date: "2020-10-17T00:00:00Z", status: "present" }
      ],
      tasks: [
        {
          task_id: "651234abcd1234abcd123402",
          submitted: true,
          submission_date: "2020-10-18T00:00:00Z"
        }
      ]
    },
    {
      _id: "651234abcd1234abcd123403",
      name: "Alice Johnson",
      email: "alice@example.com",
      mentor_id: "651234abcd1234abcd123452",
      batch: "Zen-2023",
      codekata_score: 120,
      attendance: [
        { date: "2020-10-16T00:00:00Z", status: "present" },
        { date: "2020-10-17T00:00:00Z", status: "present" }
      ],
      tasks: [
        {
          task_id: "651234abcd1234abcd123403",
          submitted: true,
          submission_date: "2020-10-17T00:00:00Z"
        }
      ]
    },
    {
      _id: "651234abcd1234abcd123404",
      name: "Bob Lee",
      email: "bob@example.com",
      mentor_id: "651234abcd1234abcd123453",
      batch: "Zen-2023",
      codekata_score: 80,
      attendance: [
        { date: "2020-10-16T00:00:00Z", status: "present" },
        { date: "2020-10-17T00:00:00Z", status: "absent" }
      ],
      tasks: [
        {
          task_id: "651234abcd1234abcd123404",
          submitted: true,
          submission_date: "2020-10-18T00:00:00Z"
        }
      ]
    },
    {
      _id: "651234abcd1234abcd123405",
      name: "Charlie Kim",
      email: "charlie@example.com",
      mentor_id: "651234abcd1234abcd123454",
      batch: "Zen-2023",
      codekata_score: 200,
      attendance: [
        { date: "2020-10-16T00:00:00Z", status: "present" },
        { date: "2020-10-17T00:00:00Z", status: "present" }
      ],
      tasks: [
        {
          task_id: "651234abcd1234abcd123405",
          submitted: true,
          submission_date: "2020-10-17T00:00:00Z"
        }
      ]
    }
  ];
  
  module.exports = students;
   
const codekata = [
    {
      _id: "651234abcd1234abcd123501",
      user_id: "651234abcd1234abcd123401",
      problems_solved: 120
    },
    {
      _id: "651234abcd1234abcd123502",
      user_id: "651234abcd1234abcd123402",
      problems_solved: 150
    },
    {
      _id: "651234abcd1234abcd123503",
      user_id: "651234abcd1234abcd123403",
      problems_solved: 100
    },
    {
      _id: "651234abcd1234abcd123504",
      user_id: "651234abcd1234abcd123404",
      problems_solved: 180
    },
    {
      _id: "651234abcd1234abcd123505",
      user_id: "651234abcd1234abcd123405",
      problems_solved: 220
    }
  ];
  
  module.exports = codekata;
  
const attendance = [
    {
      _id: "651234abcd1234abcd123601",
      user_id: "651234abcd1234abcd123401",
      date: "2020-10-16T00:00:00Z",
      status: "present"
    },
    {
      _id: "651234abcd1234abcd123602",
      user_id: "651234abcd1234abcd123402",
      date: "2020-10-17T00:00:00Z",
      status: "absent"
    },
    {
      _id: "651234abcd1234abcd123603",
      user_id: "651234abcd1234abcd123403",
      date: "2020-10-18T00:00:00Z",
      status: "present"
    },
    {
      _id: "651234abcd1234abcd123604",
      user_id: "651234abcd1234abcd123404",
      date: "2020-10-19T00:00:00Z",
      status: "absent"
    },
    {
      _id: "651234abcd1234abcd123605",
      user_id: "651234abcd1234abcd123405",
      date: "2020-10-20T00:00:00Z",
      status: "present"
    }
  ];
  
  module.exports = attendance;
  
const topics = [
    {
      _id: "651234abcd1234abcd123701",
      topic: "MongoDB Basics",
      date: "2020-10-12T00:00:00Z"
    },
    {
      _id: "651234abcd1234abcd123702",
      topic: "Introduction to NoSQL",
      date: "2020-10-13T00:00:00Z"
    },
    {
      _id: "651234abcd1234abcd123703",
      topic: "Data Modeling in MongoDB",
      date: "2020-10-14T00:00:00Z"
    },
    {
      _id: "651234abcd1234abcd123704",
      topic: "CRUD Operations in MongoDB",
      date: "2020-10-15T00:00:00Z"
    },
    {
      _id: "651234abcd1234abcd123705",
      topic: "Indexes in MongoDB",
      date: "2020-10-16T00:00:00Z"
    }
  ];
  
  module.exports = topics;
  
const tasks = [
    {
      _id: "651234abcd1234abcd123801",
      topic_id: "651234abcd1234abcd123701",
      task: "Design a database schema",
      due_date: "2020-10-18T00:00:00Z"
    },
    {
      _id: "651234abcd1234abcd123802",
      topic_id: "651234abcd1234abcd123702",
      task: "Perform CRUD operations in MongoDB",
      due_date: "2020-10-19T00:00:00Z"
    },
    {
      _id: "651234abcd1234abcd123803",
      topic_id: "651234abcd1234abcd123703",
      task: "Design a NoSQL data model",
      due_date: "2020-10-20T00:00:00Z"
    },
    {
      _id: "651234abcd1234abcd123804",
      topic_id: "651234abcd1234abcd123704",
      task: "Create and query indexes in MongoDB",
      due_date: "2020-10-21T00:00:00Z"
    },
    {
      _id: "651234abcd1234abcd123805",
      topic_id: "651234abcd1234abcd123705",
      task: "Optimize MongoDB queries using indexes",
      due_date: "2020-10-22T00:00:00Z"
    }
  ];
  
  module.exports = tasks;
  
const company_drives = [
    {
      company_name: "ABC Corp",
      date: "2020-10-20T00:00:00Z" ,
      students: [
        "605c72f0f1d7c09b9e1d4e02" ,
        "605c72f0f1d7c09b9e1d4e03" 
      ]
    },
    {
      company_name: "XYZ Ltd",
      date: "2020-10-22T00:00:00Z",
      students: [
        "605c72f0f1d7c09b9e1d4e05" ,
        "605c72f0f1d7c09b9e1d4e06" 
      ]
    },
    {
      company_name: "Tech Solutions",
      date:  "2020-10-25T00:00:00Z" ,
      students: [
        "605c72f0f1d7c09b9e1d4e08",
        "605c72f0f1d7c09b9e1d4e09" 
      ]
    },
    {
      company_name: "Innovate Inc",
      date: "2020-10-15T00:00:00Z" ,
      students: [
         "605c72f0f1d7c09b9e1d4e0b" ,
        "605c72f0f1d7c09b9e1d4e0c" 
      ]
    },
    {
      company_name: "Future Tech",
      date: "2020-10-30T00:00:00Z" ,
      students: [
        "605c72f0f1d7c09b9e1d4e0e" ,
        "605c72f0f1d7c09b9e1d4e0f" 
      ]
    }
  ]
  module.exports = company_drives;
  
const mentors  = [
    {
      _id: "651234abcd1234abcd123901",
      name: "Jane Smith",
      mentees: [
        "651234abcd1234abcd123401",
        "651234abcd1234abcd123402"
      ]
    },
    {
      _id: "651234abcd1234abcd123902",
      name: "John Doe",
      mentees: [
        "651234abcd1234abcd123403",
        "651234abcd1234abcd123404"
      ]
    },
    {
      _id: "651234abcd1234abcd123903",
      name: "Alice Johnson",
      mentees: [
        "651234abcd1234abcd123405",
        "651234abcd1234abcd123401"
      ]
    },
    {
      _id: "651234abcd1234abcd123904",
      name: "Bob Lee",
      mentees: [
        "651234abcd1234abcd123402",
        "651234abcd1234abcd123403"
      ]
    },
    {
      _id: "651234abcd1234abcd123905",
      name: "Charlie Kim",
      mentees: [
        "651234abcd1234abcd123404",
        "651234abcd1234abcd123405"
      ]
    }
  ];
  
  module.exports = mentors;
  
  
