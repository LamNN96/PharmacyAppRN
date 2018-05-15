import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';




export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.logoContaniner}>
          <Image
            source={require("../../img/logo/logo.png")}
            style={{
              width: 300,
              height: 300
            }}
          />
        </View>
        {/* <View style={{ flex: 1 }} /> */}
        <View style={styles.loginContainer}>
          <View style={styles.loginPanel}>
            <Text style={styles.txtLogin}>
              Tên đăng nhập
          </Text>
            <TextInput
              placeholder="Nhập tên đăng nhập"
              style={styles.inpUsername}
            />
          </View>
          <View style={styles.loginPanel}>
            <Text style={styles.txtLogin}>
              Mật khẩu
          </Text>
            <TextInput
              placeholder="Nhập mật khẩu"
              style={styles.inpUsername}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Home")}}>
              <View style={styles.buttonView}>
                <Text style={styles.txtButton}>
                  ĐĂNG NHẬP
            </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoContaniner: {
    flex: 3,
    zIndex: 1,
    alignItems: 'center',
  },
  loginContainer: {
    zIndex: 99,
    flex: 2,
    padding: 25,
  },
  txtLogin: {
    fontSize:16,
    fontWeight: 'bold',
    marginLeft: 4,
    color:"#1E93EC"
  },
  inpUsername: {
    borderColor:  "#1E93EC",
  },
  loginPanel: {

  },
  buttonContainer: {
    // justifyContent: 'center',
    marginTop: 15,
    alignItems: 'center',
  },
  buttonView: {
    backgroundColor: '#44A6F1',
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 15,
  },
  txtButton: {
    fontSize: 15,
    fontWeight: "500",
    color: "white"
  }


});
