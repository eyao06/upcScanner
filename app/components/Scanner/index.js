import React from 'react';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';

// Camera
import Camera from 'react-native-camera';
import { RNCamera } from "react-native-camera";

// Redux
import { connect } from 'react-redux';

// Components
import Frame from '../Frame'

class Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];
    this._onBarCodeRead = this._onBarCodeRead.bind(this);
    this.state = {
      header: "Place Camera Over Barcode",
      onBarCodeRead: this._onBarCodeRead,
    };
  }

  componentWillMount() {
    this.setState({onBarCodeRead: this._onBarCodeRead});
  }
  componentWillUnmount() {
    this.setState({onBarCodeRead: null});
  }

  _onBarCodeRead(e) {
    let product = '', upc = '', productInStock = false;

        console.log(this.props.products);
    // Loops through data and checks if UPC exists in database 
    for (var item in this.props.products) {

      if(('00' + this.props.products[item].upc) == e.data) {
        product = this.props.products[item].product_name;
        upc = this.props.products[item].upc;
        productInStock = true;
      } 
    }

    if (productInStock) {
        Alert.alert( 'Barcode Found!', ('Product: ' + product + '\nUPC: ' + upc));
    } else {
        Alert.alert('Barcode Not Found In Database!');
    }

    // Delays next scan for 3 seconds
    this.componentWillUnmount();
    setTimeout(function(){this.componentWillMount();}.bind(this), 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          onBarCodeRead={this.state.onBarCodeRead}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          defaultTouchToFocus
        >
          <Frame />
        </Camera>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    products: state.products,
    loading: state.loading,
  };
}
function mapDispatchToProps(dispatch) {
    return {
        refresh: () => dispatch({type: 'GET_PRODUCT_DATA'}),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Scanner);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    borderRadius: 5,
    color: '#fff',
    padding: 1,
    margin: 40
  },
});