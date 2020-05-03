/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import logoPhoto from "../logo/logo.png"


const Bio = () => {


  return (
    <div>
      <Link to="/">
        {" "}
        <img src={logoPhoto} alt="Samantha Lowe" />
      </Link>
    </div>
  )
}

export default Bio
