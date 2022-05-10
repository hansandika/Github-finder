import { useEffect } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import { useContext } from "react";
import GithubContext from "../../context/github/githubContext";

function User({ match }) {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link
            to="/"
            className="block w-auto px-2 py-3 rounded-lg bg-neutral-200 focus:outline-none focus:ring focus:ring-slate-200"
          >
            Back To Search
          </Link>
          Hireable:{" "}
          {hireable ? (
            <i className="text-green-400 fas fa-check"></i>
          ) : (
            <i className="text-red-600 fas fa-times-circle"></i>
          )}
          <div className="grid grid-cols-2 px-2 py-3 border-2">
            <div className="flex flex-col items-center justify-center">
              <img src={avatar_url} className="rounded-full w-44" alt="" />
              <h1>{name}</h1>
              <p>Location: {location}</p>
            </div>
            <div>
              {bio && (
                <>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </>
              )}
              <a
                href={html_url}
                className="block px-2 py-2 rounded-md w-fit bg-slate-600 text-neutral-100 focus:outline-none focus:ring focus:ring-slate-800"
              >
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <>
                      <strong>Username : </strong> {login}
                    </>
                  )}
                </li>
                <li>
                  {company && (
                    <>
                      <strong>Company : </strong> {company}
                    </>
                  )}
                </li>
                <li>
                  {blog && (
                    <>
                      <strong>Website: </strong> {blog}
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="px-2 py-3 text-center border shadow-sm">
            <div className="inline-block mx-1 px-2 py-1.5 bg-red-500 rounded-md text-neutral-50">
              Followers: {followers}
            </div>
            <div className="inline-block mx-1 px-2 py-1.5 bg-green-500 rounded-md text-neutral-50">
              Following: {following}
            </div>
            <div className="inline-block mx-1 px-2 py-1.5 bg-blue-500 rounded-md text-neutral-50">
              Public Repos: {public_repos}
            </div>
            <div className="inline-block mx-1 px-2 py-1.5 bg-purple-400 rounded-md text-neutral-50">
              Public Gists: {public_gists}
            </div>
          </div>
          <Repos repos={repos} />
        </>
      )}
    </>
  );
}

export default User;
