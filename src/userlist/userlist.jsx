import IdCard from "../idcard";
import { useSelector } from "react-redux";

const UserList = () => {
  const userList = useSelector((state) => state.user.userList);

  return userList.length !== 0 ? (
    userList.map((user) => <IdCard user={user} />)
  ) : (
    <img src="spinner.gif" alt="loading info" />
  );
};

export default UserList;
