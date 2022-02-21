import IdCard from "../idcard";

const UserList = ({ list, onChangeContratado }) => {
  return list.length !== 0 ? (
    list.map((user) => (
      <IdCard user={user} onChangeContratado={onChangeContratado} />
    ))
  ) : (
    <img src="spinner.gif" alt="loading info" />
  );
};

export default UserList;
