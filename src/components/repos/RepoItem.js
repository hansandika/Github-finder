import React from "react";
import PropTypes from "prop-types";

function RepoItem({ repo }) {
  return (
    <div className="px-2 py-3 border shadow-sm">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
