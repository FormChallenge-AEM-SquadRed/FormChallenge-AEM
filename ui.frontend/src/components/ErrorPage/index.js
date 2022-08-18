import React, { useState } from "react";
import { Section404, Displayed404 } from "./style";
import { useHistory } from "react-router-dom";
import gifError from "../../assets/gifError404.gif";

export default function ErrorPage404() {
  const navigate = useHistory();

  const [countdown, setCountdown] = useState(5);
  const [startCountdown, setStartCountdown] = useState(false);

  if (!startCountdown) {
    setStartCountdown(true);
    setInterval(() => {
      setCountdown((state) => state - 1);
    }, 1000);
  }
  setTimeout(() => {
    navigate.push("/");
  }, 5500);

  return (
    <Section404>
      <Displayed404 src={gifError} />
      <p>Redirecting in {countdown} seconds</p>
    </Section404>
  );
}
