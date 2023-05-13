import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <ul>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/add-department">Add Department</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
