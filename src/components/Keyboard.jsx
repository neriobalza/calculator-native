import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StyleSheet, View } from "react-native";
import Row from "../components/Row";
import Button from "../components/Button";

const Keyboard = (props) => {
  const { addNumber, addOperator, clear, backspace, calculate, openModal } =
    props;

  return (
    <View style={styles.container}>
      <Row>
        <Button onPress={openModal}>
          <FontAwesome5 name="info-circle" size={18} color="orange" />
        </Button>

        <Button onPress={clear}>
          <FontAwesome5 name="trash-alt" size={18} color="orange" />
        </Button>

        <Button onPress={backspace}>
          <FontAwesome5 name="backspace" size={18} color="orange" />
        </Button>

        <Button onPress={() => addOperator("÷")}>
          <FontAwesome5 name="divide" size={18} color="orange" />
        </Button>
      </Row>

      <Row>
        <Button title="7" onPress={() => addNumber("7")} />

        <Button title="8" onPress={() => addNumber("8")} />

        <Button title="9" onPress={() => addNumber("9")} />

        <Button onPress={() => addOperator("*")}>
          <FontAwesome5 name="times" size={18} color="orange" />
        </Button>
      </Row>

      <Row>
        <Button title="4" onPress={() => addNumber("4")} />

        <Button title="5" onPress={() => addNumber("5")} />

        <Button title="6" onPress={() => addNumber("6")} />

        <Button onPress={() => addOperator("-")}>
          <FontAwesome5 name="minus" size={18} color="orange" />
        </Button>
      </Row>

      <Row>
        <Button title="1" onPress={() => addNumber("1")} />

        <Button title="2" onPress={() => addNumber("2")} />

        <Button title="3" onPress={() => addNumber("3")} />

        <Button onPress={() => addOperator("+")}>
          <FontAwesome5 name="plus" size={18} color="orange" />
        </Button>
      </Row>

      <Row>
        <Button />

        <Button title="0" onPress={() => addNumber("0")} />

        <Button title="." onPress={() => addNumber(".")} />

        <Button className="orange" onPress={calculate}>
          <FontAwesome5 name="equals" size={18} color="white" />
        </Button>
      </Row>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
});

export default Keyboard;
