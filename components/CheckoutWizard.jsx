import { Step, StepLabel, Stepper } from "@mui/material";
import React from "react";

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternateLabel>
      {["Login", "Shipping Address", "Payment", "Place Order"].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
