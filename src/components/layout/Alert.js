import AlertContext from "../../context/alert/alertContext";
import { useContext } from "react";

function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert && (
      <div className={`${alert.theme} w-full px-2 py-3`}>
        <i className="mr-2 fas fa-info-circle"></i>
        {alert.msg}
      </div>
    )
  );
}

export default Alert;
