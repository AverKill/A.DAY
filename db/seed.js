db = connect('mongodb://localhost:27017/habitsapp'); //connect do mongo at this port

db.userTracker.drop(); //drop table if exist

db.userTracker.insertMany([
  {
    username: 'test_user1',
    first_name: 'Test1',
    last_name: 'User1',
    email: 'test@user',
    password: 'user1',
    habit: [
      {
        habit1: 'Running',
        tracker: [
          {
            date: '02/10/2022',
            day: 'Wednesday',
            start_time: '07:30',
            end_time: '8:48',
          },
        ],
        habit2: 'Drinking water',
        tracker: [
          {
            date: '02/10/2022',
            day: 'Wednesday',
            start_time: '06:30',
            end_time: '7:48',
          },
        ],
      },
    ],
  },
  {
    username: 'test_user2',
    first_name: 'Test2',
    last_name: 'User2',
    email: 'test@user2',
    password: 'user2',
    habit: 'Swimming',
    date: '03/10/2022',
    day: 'Thrusday',
    start_time: '07:45',
    end_time: '9:37',
  },
  {
    username: 'test_user3',
    first_name: 'Test3',
    last_name: 'User3',
    email: 'test@user3',
    password: 'user3',
    habit: 'Walking',
    date: '04/10/2022',
    day: 'Friday',
    start_time: '07:50',
    end_time: '9:12',
  },
  {
    username: 'test_user4',
    first_name: 'Test4',
    last_name: 'User4',
    email: 'test@user4',
    password: 'user4',
    habit: 'Jogging',
    date: '05/10/2022',
    day: 'Saturday',
    start_time: '07:34',
    end_time: '9:17',
  },
  {
    username: 'test_user5',
    first_name: 'Test5',
    last_name: 'User5',
    email: 'test@user5',
    password: 'user5',
    habit: 'Drinking water',
    date: '09/10/2022',
    day: 'Monday',
    start_time: '09:34',
    end_time: '10:40',
  },
  {
    username: 'test_user6',
    first_name: 'Test6',
    last_name: 'User6',
    email: 'test@user6',
    password: 'user6',
    habit: 'Eating junk food',
    date: '09/10/2022',
    day: 'Monday',
    start_time: '09:34',
    end_time: '10:40',
  },
  {
    username: 'PrettyBoy69',
    first_name: 'Aaftab',
    last_name: 'TheGOAT',
    age: 25,
    gender: 'gigachad',
    email: 'AaftabSexyBoy@gmail.com',
    password: '12345ItsCool',
    calendar: '',
    habits: [
      {
        name: 'Coffee Intake',
        frequency: 'daily',
        count: 4,
        date: '27/04/2022',
        improvement: 'no'
      },
      {
        name: 'Exersise',
        frequency: 'weekly',
        days: ['mon','thur'],
        date: '27/04/2022',
        completed: 'yes'
      }
    ]
  }
]);
