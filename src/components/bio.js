/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      samantha: file(absolutePath: { regex: "/logo.png/" }) {
        childImageSharp {
          fixed(width: 267) {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  `)

  return (
    <div>
      <Link to="/">
        {" "}
        <Image fixed={data.samantha.childImageSharp.fixed} alt="logo" />
      </Link>
    </div>
  )
}

export default Bio
