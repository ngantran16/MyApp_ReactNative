/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-unused-styles */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import close from './images/signup.png';
import visibility1 from './images/visibility1.png';
import visibility2 from './images/visibility2.png';
import InputItem from './inputItem.js';

const SignUp = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState('');
  const [hidenVal, setHidenVal] = useState(false);

  const onLoginClicked = () => {
    if (password !== confirm) {
      alert('Password and confirm password not match!');
    } else {
      alert(
        'Tên người dùng: ' +
          name +
          '\nEmail: ' +
          email +
          '\nSố điện thoại: ' +
          phone +
          '\nTên tài khoản: ' +
          username +
          '\nMật khẩu: ' +
          password,
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.closeForm}>
          <Image source={close} />
        </Text>
        <Text style={styles.formName}>Đăng ký</Text>
      </View>

      <InputItem
        value={'Tên người dùng*'}
        styles={styles.textInput}
        onChangeText={(val) => setName(val)}
      />
      <InputItem value={'Email*'} styles={styles.textInput} onChangeText={(val) => setEmail(val)} />
      <InputItem
        value={'Số điện thoại*'}
        styles={styles.textInput}
        onChangeText={(val) => setPhone(val)}
      />
      <InputItem
        value={'Tên tài khoản*'}
        styles={styles.textInput}
        onChangeText={(val) => setUsername(val)}
      />

      <View>
        <Text> Mật khẩu*</Text>
        <TouchableOpacity onPress={() => setHidenVal(!hidenVal)}>
          <Image source={hidenVal ? visibility1 : visibility2} style={styles.eyeImage2} />
        </TouchableOpacity>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(val) => setPassword(val)}
        />
      </View>

      <View>
        <Text> Xác nhận mật khẩu*</Text>
        <TouchableOpacity onPress={() => setHidenVal(!hidenVal)}>
          <Image source={hidenVal ? visibility1 : visibility2} style={styles.eyeImage2} />
        </TouchableOpacity>
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={(val) => setConfirm(val)}
        />
      </View>

      <View style={styles.button}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{ textAlign: 'center' }}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={onLoginClicked}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textPolicy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với các{' '}
        <Text style={{ color: '#41B8C1' }}>điều khoản quy định</Text> của chúng tôi
      </Text>
      <Text>Text: {hidenVal}</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  header: {
    flexDirection: 'row',
    marginTop: 0,
  },
  main: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingVertical: 5,
  },
  textInput: {
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  loginButton: {
    borderColor: '#41B8C1',
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
  },
  closeForm: {
    marginTop: 20,
  },
  formName: {
    fontSize: 30,
    alignContent: 'center',
    textAlign: 'center',
    width: '100%',
  },
  textPolicy: {
    fontSize: 16,
    marginTop: 8,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  eyeImage: {
    position: 'absolute',
    marginLeft: 310,
    marginTop: 30,
  },
  eyeImage2: {
    position: 'absolute',
    marginLeft: 310,
    marginTop: 30,
  },
});
export default SignUp;
