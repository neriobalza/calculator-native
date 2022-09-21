import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import React from "react";

const InfoModal = (props) => {
  const { modalVisible, closeModal } = props;
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={styles.title}>About</Text>

          <Text style={styles.content}>
            This app was handcrafted by Nerio Balza @neriobalza
          </Text>

          <Text style={styles.version}>Version: 1.0.0</Text>

          <Pressable style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,

    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
  version: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 4,
    padding: 10,
    elevation: 0,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
