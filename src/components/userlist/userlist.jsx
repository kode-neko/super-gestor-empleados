import IdCard from "../idcard";

const UserList = ({ list, onChangeContratado, onClickUser }) => {
  return list.length !== 0 ? (
    list.map((user) => (
      <IdCard
        user={user}
        onChangeContratado={onChangeContratado}
        onClickUser={(user) => onClickUser(user)}
      />
    ))
  ) : (
    <img src="spinner.gif" alt="loading info" />
  );
};

export default UserList;
