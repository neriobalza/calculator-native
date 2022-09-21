import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = (props) => {
  const { title, className, children, onPress } = props;
  //     event._dispatchInstances.memoizedProps.children[0].props.children

  return (
    <TouchableOpacity style={styles[className]} onPress={onPress}>
      {children ? children : <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  title: "",
  className: "button",
  children: undefined,
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  orange: {
    backgroundColor: "orange",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  title: {
    fontSize: 22,
  },
});

export default Button;
