import React from "react";
import { Link } from "react-router-dom";

export default function CategoryMenu(props) {
  const categories=props.categories
  var handleFilterByCategory=props.handleFilterByCategory
  var myView=categories.map((category)=>(
    <li key={category.id}><Link to="/product" onClick={handleFilterByCategory}>{category.attributes.categoryName}</Link></li>
  ))
  console.log(props)
  return (
    
    <div className="well well-small">
      <nav className="megamenu">
        <ul className="nav nav-list">
        <li key={0}><Link to="/product" onClick={handleFilterByCategory}>All Category</Link></li>
         {myView}
         
        </ul>
      </nav>
    </div>
  );
}
