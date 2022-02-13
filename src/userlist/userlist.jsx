import IdCard from "../idcard";

const UserList = ({ userList, newUser }) => {
  return userList.length !== 0 ? (
    userList.map((user) => (
      <IdCard user={user} onClickContratado={(email) => newUser(email)} />
    ))
  ) : (
    <img src="spinner.gif" alt="loading info" />
  );
};

export default UserList;
