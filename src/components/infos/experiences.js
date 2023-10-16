import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const experiences = [
  {
    text: "Trendyol",
    url: "https://www.trendyol.com/",
    description: "Data Warehouse Analyst",
    color: "#E95800",
  },
];

const PrintExperience = (experiences) => {
  return (
    <ul>
      {experiences.map((experience) => {
        <li>{experience}</li>;
      })}
    </ul>
  );
};

export default PrintExperience;
