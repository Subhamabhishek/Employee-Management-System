
const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "pass123",
      "name": "Ravi Kumar",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Complete project report",
          "description": "Finish and submit the final project report to the manager.",
          "date": "2024-11-03",
          "category": "Documentation"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Client meeting preparation",
          "description": "Prepare the presentation and agenda for the upcoming client meeting.",
          "date": "2024-10-25",
          "category": "Meeting"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Code review",
          "description": "Review the code submitted by the junior developers.",
          "date": "2024-11-02",
          "category": "Development"
        }
      ],
      "taskCounts": {
        "active": 2,
        "new_task": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "pass456",
      "name": "Priya Sharma",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Update system documentation",
          "description": "Add recent changes and updates to the system documentation.",
          "date": "2024-11-05",
          "category": "Documentation"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Bug fixing",
          "description": "Fix the reported bugs in the latest release.",
          "date": "2024-11-01",
          "category": "Development"
        },
        {
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": true,
          "title": "Resolve Network Issues",
          "description": "Identify and resolve network lag issues in the office.",
          "date": "2024-10-27",
          "category": "IT Support"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "Weekly System Maintenance",
          "description": "Perform routine maintenance on all office systems.",
          "date": "2024-11-05",
          "category": "Maintenance"
        }
      ],
      "taskCounts": {
        "active": 3,
        "new_task": 2,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "pass789",
      "name": "Amit Singh",
      "tasks": [
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Conduct training session",
          "description": "Conduct a training session on the latest software update.",
          "date": "2024-10-20",
          "category": "Training"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Sprint Planning",
          "description": "Plan tasks and allocate resources for the upcoming sprint.",
          "date": "2024-11-06",
          "category": "Planning"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Create test cases",
          "description": "Develop test cases for the new feature.",
          "date": "2024-11-04",
          "category": "Testing"
        }
      ],
      "taskCounts": {
        "active": 2,
        "new_task": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "pass101",
      "name": "Sunita Reddy",
      "tasks": [
        {
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "title": "Feature enhancement",
          "description": "Enhance the existing feature as per the client's requirements.",
          "date": "2024-10-15",
          "category": "Development"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Database optimization",
          "description": "Optimize the database for better performance.",
          "date": "2024-11-06",
          "category": "Database"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "title": "Database Backup",
          "description": "Perform scheduled backup of the database.",
          "date": "2024-11-05",
          "category": "Database"
        }
      ],
      "taskCounts": {
        "active": 2,
        "new_task": 2,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "pass202",
      "name": "Rajesh Gupta",
      "tasks": [
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false,
          "title": "User testing",
          "description": "Conduct user testing for the new UI design.",
          "date": "2024-11-07",
          "category": "Testing"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "Team meeting",
          "description": "Attend the weekly team meeting.",
          "date": "2024-10-30",
          "category": "Meeting"
        },
        {
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false,
          "title": "UI Design Update",
          "description": "Implement design changes from the last review.",
          "date": "2024-10-29",
          "category": "Design"
        }
      ],
      "taskCounts": {
        "active": 2,
        "new_task": 0,
        "completed": 2,
        "failed": 0
      }
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "admin123",
      "name": "Anjali Nair"
    }
  ];
  
  
  export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
  }