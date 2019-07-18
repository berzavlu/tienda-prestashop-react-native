import React, { Fragment, useEffect, useState } from 'react'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  StatusBar,
  Dimensions
} from 'react-native';
import API from '../../../components/api';

const window = Dimensions.get('window');
const imageWidth = window.width / 3 + 30;
const imageHeight = window.width / 2;

const HomeInicio = () => {
  const [productos, setProductos] = useState([]);
  const getProductos = async () => {
    try {
      const result = await API.request(
        "https://lulumuebles.com.pe/api/products?output_format=JSON&ws_key=L774Y4FASS9M2WVHEATFK27YJNN9HRGZ"
      );
      const urls = [];
      result.products.map(e =>
        urls.push(
          `https://lulumuebles.com.pe/api/products/${
            e.id
          }?output_format=JSON&ws_key=L774Y4FASS9M2WVHEATFK27YJNN9HRGZ`
        )
      );
      Promise.all(
        urls.map(request => {
          return fetch(request)
            .then(response => {
              return response.json();
            })
            .then(data => {
              return data;
            });
        })
      )
        .then(values => {
          setProductos(values);
        })
        .catch(console.error.bind(console));
    } catch (error) {
      console.log(error);
    }
  };
  const alerta = () => {
    Alert.alert(
      "Deseas comprar este producto???",
      "Epa champo esto esta fino, nos vamos de rumba",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  };
  useEffect(() => {
    getProductos();
  }, []);
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
        >
          {productos.map((e, i) => {
            return (
              <View style={styles.child} key={i}>
                <TouchableOpacity onPress={alerta}>
                  <Image
                    style={{ width: 150, height: 150 }}
                    source={{
                      uri: `https://lulumuebles.com.pe/api/images/products/${
                        e.product.id
                      }/${
                        e.product.associations.images[0].id
                      }&ws_key=L774Y4FASS9M2WVHEATFK27YJNN9HRGZ`,
                      method: "GET",
                      headers: {
                        Pragma: "no-cache"
                      },
                      body: "Your Body goes here"
                    }}
                  />
                </TouchableOpacity>
                <View style={styles.sectionContainer}>
                  <Text style={styles.sectionTitle}>{e.product.name}</Text>
                  <Text style={styles.sectionTitle}>{e.product.price}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  child: {
    width: window.width / 2,
    alignItems: "center",
    height: imageHeight + 5,
    marginTop: 10,
  },
  scrollView: {
    backgroundColor: Colors.white,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeInicio;
