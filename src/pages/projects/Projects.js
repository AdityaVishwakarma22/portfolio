import React from "react";
import "./Projects.css";
import p1 from "../../assest/list.jpg";
import paginate from "../../assest/paginate.jpg";
import ecommerce from "../../assest/ecommerce.jpg";
import Card from "./Card";

const Projects = () => {
  const projectItem = [
    {
      heading: "Food App",
      link: "https://adityavishwakarma22.github.io/Food-app/",
      description: `Built an Food app having where the user can order list of food
    items. Add them to cart, fill their address details and click on
    the order button to save to the database.`,
    image : ecommerce
    },
    {
      heading: "Paginate and Infinite Scrolling",
      link: "https://adityavishwakarma22.github.io/PaginationLazyloading/",
      description: `Implmented Pagination along with live search and Infinite scroll
      too.`,
    image : paginate
    },
    {
      heading: "User Details",
      link: "https://adityavishwakarma22.github.io/userDetail/",
      description: `The task was to make an app, wherein the user can create, edit and
      delete the user information.`,
    image : p1
    },
  ];

  return (
    <section className="projects section" id="project">
      <h2 className="heading">Projects</h2>
      <ul>
        {
          projectItem.map((item)=><Card project = {item}/> )
        }
      </ul>
    </section>
  );
};

export default Projects;
