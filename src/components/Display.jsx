import React, { useRef } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  View,
  Button,
} from "react-native";

const Display = (props) => {
  const { currentOperation, operationsList } = props;
  const scrollRef = useRef();

  return (
    <SafeAreaView style={styles.display}>
      <ScrollView
        style={styles.scroll}
        ref={scrollRef}
        onContentSizeChange={() => {
          scrollRef.current.scrollToEnd({ animated: true });
        }}
      >
        {operationsList.map((obj, i) => (
          <View key={i}>
            <Text style={styles.operation}>{obj.operation.join(" ")}</Text>
            <Text style={styles.result}> = {obj.result}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.current}>
        {currentOperation.length > 0 ? currentOperation.join(" ") : "0"}
      </Text>
    </SafeAreaView>
  );
};

Display.defaultProps = {
  currentOperation: [],
  operationsList: [],
};

const styles = StyleSheet.create({
  display: {
    flex: 0.5,
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  operation: {
    fontSize: 22,
  },
  result: {
    fontSize: 22,
    textAlign: "right",
  },
  current: {
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 30,
    fontSize: 32,
    marginBottom: 10,
    textAlign: "right",
  },
});

export default Display;
