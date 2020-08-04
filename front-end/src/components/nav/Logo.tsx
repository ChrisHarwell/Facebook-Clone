import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@material-ui/core";
function Logo() {
  return (
    <Button data-testid="logo">
      <FontAwesomeIcon title="facebook logo" icon={faFacebook} size="3x" color="#3b5998" />
    </Button>
  );
}

export default Logo;
