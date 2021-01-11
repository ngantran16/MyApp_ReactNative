/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-unused-styles */
import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import cancel from '../images/cancel.png';
import global from '../images/internet.png';
import fb from '../images/facebook.png';
import instagram from '../images/instagram.png';
import arrow from '../images/arrow.png';
import background from '../images/enouvo.jpg';
import address from '../images/house.png';
import phone from '../images/phone.png';

const ImageItem = () => {
  return <Image source={background} style={styles.imageStyle} />;
};

const EnouvoDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={background} style={styles.imageBackground} />
      <TouchableOpacity style={styles.borderStyle}>
        <Image source={cancel} style={styles.cancelStyle} />
      </TouchableOpacity>

      <View style={styles.textContain}>
        <Text style={styles.textStyle}>ENOUVO IT SOLUTIONS</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={address} style={styles.addressSty} />
          <Text style={styles.textStyle}>15 Ta My Duat - Da Nang</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={phone} style={styles.addressSty} />
          <Text style={styles.textStyle}>(+84) 901 131 212</Text>
        </View>
      </View>

      <View>
        <Text style={styles.imageText}>IMAGE</Text>
        <ScrollView horizontal={true} style={styles.scrollStyle}>
          <ImageItem />
          <ImageItem />
          <ImageItem />
          <ImageItem />
        </ScrollView>
      </View>

      <View>
        <Text style={styles.imageText}>DESCRIPTION</Text>
        <Text style={styles.paragrapStyle}>
          To close a successful 2017 and welcome 2018, on December 29th, a Year-End Party party was
          held with the full participation of Enouvo members. This was an unforgettable night full
          of delights, warms, and remarkable memories. The event not only showed the company’s
          appreciation to all Enouvers for all the hard work over the past year but, more
          importantly.
        </Text>
      </View>

      <View>
        <Text style={styles.imageText}>SOCIAL</Text>
        <View style={styles.growItem}>
          <Image source={global} style={styles.iconGlobal} />
          <Text style={styles.textBottom}>enouvo.com</Text>
        </View>
        <View style={styles.growItem}>
          <Image source={fb} style={styles.iconStyle} />
          <Text style={styles.textBottom}>facebook.com/enouvo/</Text>
        </View>
        <View style={styles.growItem}>
          <Image source={instagram} style={styles.iconStyle} />
          <Text style={styles.textBottom}>instagram.com/enouvo.it.solutions/</Text>
        </View>
      </View>

      <View style={styles.visitBottom}>
        <TouchableOpacity style={styles.visitButton}>
          <Text style={styles.visitStyle}>Visit our website</Text>
          <Image source={arrow} style={styles.arrowStyle} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageBackground: {
    width: '100%',
    height: 260,
    opacity: 0.9,
  },
  cancelStyle: {
    marginTop: -250,
    marginLeft: 5,
    tintColor: '#EEEEEE',
    borderRadius: 10,
    backgroundColor: '#666666',
  },
  textContain: {
    marginTop: -60,
    marginLeft: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    opacity: 1,
  },
  imageStyle: {
    width: 120,
    height: 90,
    borderRadius: 10,
    marginRight: 5,
  },
  scrollStyle: {
    marginRight: 10,
    marginLeft: 10,
  },
  imageText: {
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  paragrapStyle: {
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10,
    color: '#777777',
    fontSize: 15,
  },
  growItem: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
  iconGlobal: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginRight: 8,
  },
  visitStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
    fontWeight: 'bold',
    marginLeft: 120,
  },
  visitButton: {
    flexDirection: 'row',
    marginTop: 13,
    backgroundColor: '#FF3333',
    height: 50,
  },
  arrowStyle: {
    width: 25,
    height: 25,
    marginTop: 13,
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: '#CC0000',
    tintColor: 'white',
  },
  textBottom: {
    fontSize: 16,
  },
  addressSty: {
    tintColor: 'white',
    marginRight: 5,
  },
});
export default EnouvoDetail;
