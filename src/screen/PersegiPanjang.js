import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';

class PersegiPanjang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      hasil: 0,
    };
  }
  hitungLuas = () => {
    let hasilnya =
      parseFloat(this.state.panjang) * parseFloat(this.state.lebar);
    this.setState({hasil: hasilnya});
  };
  hitungKeliling = () => {
    let hasilnya =
      2 * (parseFloat(this.state.panjang) + parseFloat(this.state.lebar));
    this.setState({hasil: hasilnya});
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Text
            style={{
              color: '#000',
              padding: 10,
              fontSize: 15,
            }}>
            Hitung Keliling Dan Luas
          </Text>
        </View>
        <View>
          <TextInput
            value={this.state.panjang}
            style={{
              padding: 10,
              backgroundColor: '#858585',
              marginHorizontal: 10,
              marginVertical: 10,
              borderRadius: 10,
            }}
            placeholder="Masukan nilai panjang"
            keyboardType="number-pad"
            onChangeText={value => this.setState({panjang: value})}></TextInput>
          <TextInput
            value={this.state.lebar}
            style={{
              padding: 10,
              backgroundColor: '#858585',
              marginHorizontal: 10,
              marginVertical: 10,
              borderRadius: 10,
            }}
            placeholder="Masukan nilai lebar"
            keyboardType="number-pad"
            onChangeText={value => this.setState({lebar: value})}></TextInput>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'blue',
              margin: 10,
              borderRadius: 10,
            }}
            onPress={() => this.hitungLuas()}>
            <Text style={{color: '#fff', fontSize: 15, padding: 10}}>
              Hitung Luas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: 'green',
              margin: 10,
              borderRadius: 10,
            }}
            onPress={() => this.hitungKeliling()}>
            <Text style={{color: '#fff', fontSize: 15, padding: 10}}>
              Hitung Keliling
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'center',
              alignItems: 'center',
              color: 'black',
              fontSize: 20,
            }}>
            Hasil : {this.state.hasil}
          </Text>
        </View>
      </View>
    );
  }
}

export default PersegiPanjang;
