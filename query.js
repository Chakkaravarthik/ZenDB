import topics from 'Sample_data'

//1.Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
    {
      $match: {
        date: {
          $gte: ISODate("2020-10-01"),
          $lt: ISODate("2020-11-01")
        }
      }
    },
    {
      $lookup: {
        from: "tasks",
        localField: "_id",
        foreignField: "topic_id",
        as: "tasks"
      }
    }
  ]);
  

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.find({
    date: {
      $gte: ISODate("2020-10-15"),
      $lte: ISODate("2020-10-31")
    }
  });
  
// 3.Find all the company drives and students who are appeared for the placement.

db.company_drives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "students",
        foreignField: "_id",
        as: "student_details"
      }
    }
  ]);
  
// 4.Find the number of problems solved by the user in codekata

db.codekata.find(
    { user_id: ObjectId("user_id_here") },
    { problems_solved: 1 }
  );
  
// 5.Find all the mentors with who has the mentee's count more than 15

db.mentors.find({
    $where: "this.mentees.length > 15"
  });
  
// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.users.aggregate([
    {
      $match: {
        "attendance.date": {
          $gte: ISODate("2020-10-15"),
          $lte: ISODate("2020-10-31")
        },
        "attendance.status": "absent",
        "tasks": {
          $elemMatch: {
            submitted: false,
            "task.due_date": {
              $gte: ISODate("2020-10-15"),
              $lte: ISODate("2020-10-31")
            }
          }
        }
      }
    },
    {
      $count: "absent_and_not_submitted"
    }
  ]);
  
