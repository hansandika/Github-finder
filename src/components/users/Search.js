import { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

function Search() {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { setAlert, removeAlert } = alertContext;

  const [text, setText] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter someting", "bg-blue-200");
    } else {
      removeAlert();
      githubContext.searchUsers(text);
      setText("");
    }
  }

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          name="search"
          className="w-full px-2 py-2 my-5 border"
          placeholder="Search Users..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="submit"
          value="Search"
          className="block w-full px-3 py-2 my-2 text-slate-100 bg-slate-600 focus:outline-none focus:ring focus:ring-slate-900"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearUsers}
          className="w-full px-3 py-2 my-2 bg-slate-100 focus:outline-none focus:ring focus:ring-slate-200"
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;
