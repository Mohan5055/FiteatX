import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import CustomButton from './CustomButton';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


const CreateProfile = ({route}) => {

  const navigation = useNavigation();

  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [location, setLocation] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const genders = ['Male', 'Female'];

  const handleSubmit=()=>{
    if(gender && dateOfBirth && location){
      navigation.navigate('Goal1')
    }
    else{
      Alert.alert('Validation Error','Please fill out all fields ');
    }
  }

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.modalItem}
      onPress={() => {
        setSelectedItem(item);
        setGender(item);
        setModalVisible(!modalVisible);

      }}>
      <Text  style={styles.textColor}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.body}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../src/assets/Images/ladki.png')}
          />
        </View>
        <Text style={styles.boldText}>Let's complete your profile</Text>
        <Text style={styles.normalText}>
          It will help us to know more about you!
        </Text>

        <View style={styles.box2}>
          <View style={styles.container}>
           
            <AntDesign style={styles.icon} name="addusergroup" size={18} color="#7B6F72"/>
            <TextInput
              style={styles.input}
              placeholder="Choose Gender"
              value={gender}
              placeholderTextColor="#ADA4A5"
              editable={false}
            />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                style={styles.dropDownIcon}
                source={require('../../src/assets/Images/icons/Dropdown.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            
            <AntDesign style={styles.icon} name="calendar" size={18} color="7B6F72"/>
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              value={dateOfBirth}
              placeholderTextColor="#ADA4A5"
              onChangeText={text => setDateOfBirth(text)}
            />
          </View>
          <View style={styles.container}>
           
            <AntDesign style={styles.icon} name="calendar" size={18} color="7B6F72"/>
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={location}
              placeholderTextColor="#ADA4A5"
              onChangeText={text => setLocation(text)}
            />
          </View>
        </View>

        <View style={styles.button} >
        <CustomButton onPress={handleSubmit} title="Next" />
        </View>
    

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FlatList
                data={genders}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 380,
    height: 380,
    marginTop: 30,
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 30,
    color: '#1D1617',
    textAlign: 'center',
  },
  normalText: {
    marginTop: 5,
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#7B6F72',
    textAlign: 'center',
  },
  box2: {
    width: 316,
    height: 180,
    marginTop: 30,
    justifyContent: 'space-between',
  },
  container: {
    width: 315,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#F7F8F8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  dropDownIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    right: 20,
  },
  input: {
    flex: 1,
    height: 48,
    paddingLeft: 10,
    color: '#1D1617',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  modalView: {
    margin: 20,
    height: '20%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 10,
  },
  modalItem: {
    width: 200,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1617'
  },
  textColor:{
  color: '#1D1617',
},
button:{
  marginTop:150,
}

});

export default CreateProfile;
