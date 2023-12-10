import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/index';
import { AppContext } from '../../components/ultil/AppContext';
import { useNavigation } from '@react-navigation/native';

const Person = () => {
  const navigation = useNavigation();
  const { inforuser, setisLogin } = useContext(AppContext);

  const logOut = () => {
    setisLogin(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Cài đặt</Text>
          </View>
          <View style={styles.viewAvatar}>
            <Image style={styles.avatar} source={require('../../assets/images/logo.png')} />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
            {inforuser?.name}
          </Text>
          <Text style={{ textAlign: 'center' }}>{inforuser?.email}</Text>
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dành cho bạn</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('OrderProgress');
          }}
        >
          <View style={styles.item}>
            <View
              style={{
                justifyContent: 'center',
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Ionicons name="reader-outline" size={25} color="orange" />
              <View style={{}}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Lịch sử mua hàng</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Ionicons name="chevron-forward-outline" size={25} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Favorite');
          }}
        >
          <View style={styles.item}>
            <View
              style={{
                justifyContent: 'center',
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Ionicons name="heart" size={25} color="red" />
              <View style={{}}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Sản phẩm yêu thích</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Ionicons name="chevron-forward-outline" size={25} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={{ paddingBottom: 10, paddingLeft: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cài đặt chung</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <View style={styles.item}>
            <View
              style={{
                justifyContent: 'center',
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Ionicons name="person-outline" size={25} color="green" />
              <View style={{}}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Cập nhật thông tin</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Ionicons name="chevron-forward-outline" size={25} />
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('ChangePassword');
          }}
        >
          <View style={styles.item}>
            <View
              style={{
                justifyContent: 'center',
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Ionicons name="key-outline" size={25} color="blue" />
              <View style={{}}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Đổi mật khẩu</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Ionicons name="chevron-forward-outline" size={25} />
            </View>
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={logOut}>
          <View style={styles.item}>
            <View
              style={{
                justifyContent: 'center',
                paddingLeft: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <Ionicons name="log-out-outline" size={25} color="red" />
              <View style={{}}>
                <Text style={{ fontSize: 16, fontWeight: 500, color: 'red' }}>Đăng xuất</Text>
              </View>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <Ionicons name="chevron-forward-outline" size={25} />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Person;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginStart: 10,
    marginEnd: 10,
    marginBottom: 20,
  },
  header: {
    height: '40%',
    backgroundColor: COLORS.offwhite,
    borderRadius: 30,
    marginBottom: 30,
  },
  viewAvatar: {
    alignItems: 'center',
    borderRadius: 30,
    height: '70%',
    // backgroundColor: 'white',
  },
  avatar: {
    width: '65%',
    height: '100%',
    borderRadius: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginRight: 70,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  item: {
    backgroundColor: '#F5F7F8',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
});
