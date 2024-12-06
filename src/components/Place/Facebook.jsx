import React, { useState } from "react";

const FacebookIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    window.location.href =
      "https://www.facebook.com/p/Praktyka-Stomatologiczna-Arkadiusz-%C5%BBurek-100063535452341/?locale=nl_NL&_rdr";
  };
};
