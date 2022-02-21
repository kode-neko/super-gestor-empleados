import IdCard from "../idcard";
import { connect } from "react-redux";

const UserList = ({ list }) => {
  return list.length !== 0 ? (
    list.map((user) => <IdCard user={user} />)
  ) : (
    <img src="spinner.gif" alt="loading info" />
  );
};

const mapStateToProps = (state) => ({
  list: state.user.list,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
