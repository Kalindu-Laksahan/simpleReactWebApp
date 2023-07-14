
const users = [
    {
        id: 1,
        username:'kalindu',
        password:'123'
      },
      {
        id: 2,
        username:'malith',
        password:'123'
      },
      {
        id: 3,
        username:'udara',
        password:'1234'
      },
      {
        id: 4,
        username:'wathsala',
        password:'123'
      },
  ];

  export function getUser() {
    return users;
  }
  export function createUser(un,pw) {
    users.push({
      id: users.length + 1,
      username: un,
      password: pw
    });
  }