import { useContext, useEffect } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

function Users() {
  const githubContext = useContext(GithubContext);
  const { users, loading, getAllUsers } = githubContext;

  useEffect(() => {
    getAllUsers();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {!loading ? (
        users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Users;
