import React from "react"
import PropTypes from "prop-types"
import { Flex, Box } from "rebass"

export const BaseContainer = ({ children, flex = false, ...rest }) => {
  let Componnet = flex ? Flex : Box
  return <Componnet {...rest}>{children}</Componnet>
}

BaseContainer.propTypes = {
  flex: PropTypes.bool,
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
}
