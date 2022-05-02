import React from "react"
import PropTypes from "prop-types"
import { Heading } from "rebass"
//import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server"

const BaseHeading = ({ children, ...rest }) => (
  <Heading {...rest}>{children}</Heading>
)

BaseHeading.propTypes = {
  children: PropTypes.node.isRequired,
}
export { BaseHeading }
