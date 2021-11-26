import React from 'react'
import {
  BrowserRouter as Router,
 
  useLocation
} from "react-router-dom";

function NotFound() {
  let location = useLocation();

  return (
    <div>
      <h3>
        Is not found <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default NotFound