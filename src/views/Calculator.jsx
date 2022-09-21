import React, { useState } from "react";
import Container from "../containers/Container";
import Display from "../components/Display";
import Keyboard from "../components/Keyboard";
import InfoModal from "../components/InfoModal";
import useDisplay from "../hooks/useDisplay";
import useModal from "../hooks/useModal";

const Calculator = () => {
  const display = useDisplay();
  const modal = useModal();

  return (
    <Container>
      <Display
        currentOperation={display.current}
        operationsList={display.list}
      />

      <Keyboard
        addNumber={display.addNumber}
        addOperator={display.addOperator}
        clear={display.clearDisplay}
        backspace={display.backspace}
        calculate={display.calculate}
        openModal={modal.openModal}
      />

      <InfoModal modalVisible={modal.open} closeModal={modal.closeModal} />
    </Container>
  );
};

export default Calculator;
