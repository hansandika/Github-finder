import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url, html_url } }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-3 border border-slate-500">
      <img src={avatar_url} alt="" className="w-24 rounded-full" />
      <h3 className="mb-4">{login}</h3>
      <div>
        <Link
          to={`/user/${login}`}
          className="px-4 py-2 transition duration-300 ease-in-out rounded-sm text-neutral-100 hover:opacity-80 bg-slate-500 focus:outline-none focus:ring focus:ring-slate-900"
        >
          More
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
