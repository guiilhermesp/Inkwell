import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 300);
    return () => {
      clearInterval(interval);
    };
  });

  function displayStep(i) {
    return {
      display: step === i ? "block" : "none",
    };
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <svg
          id="eJ4y5e18gYL1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <path
            d="M15.023114,17.971296v1.705295q0-1.705295,0-1.705295Z"
            transform="translate(0 0.000002)"
            fill="none"
            stroke="#3c3c3c"
            stroke-width="0.5"
          />
          <path
            d="M24.996831,19.598733c.00533-.489338.130604-2.088621.022164-2.196411-1.553441-.796907-9.995882.568974-9.995882.568974s-8.249233-1.60535-10.235784-.568974c-.041587.13638-.171299.214706,0,2.196411c3.394262.178904,10.235784,0,10.235784,0s6.631479.176162,9.973718,0Z"
            transform="translate(.000001 0.000001)"
            fill="none"
            stroke="#3c3c3c"
            stroke-width="0.5"
          />
          <g style={displayStep(0)}>
            <path
              d="M24.279191,15.133076c-5.912969-.484617-6.680815.767271-9.256077,2.838221"
              fill="none"
              stroke="#3c3c3c"
              stroke-width="0.5"
            />
          </g>
          <g style={displayStep(1)}>
            <path
              d="M17.720382,11.081153c-.682092.892384-2.443068,4.454966-2.697268,7.284271"
              fill="none"
              stroke="#3c3c3c"
              stroke-width="0.5"
            />
          </g>
          <g style={displayStep(2)}>
            <path
              d="M5.816805,13.252673c5.666347,1.183375,8.944335,3.472012,9.206309,4.718624"
              transform="translate(.000001 0)"
              fill="none"
              stroke="#3c3c3c"
              stroke-width="0.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
