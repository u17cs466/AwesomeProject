import React, { Component } from 'react'
import { Image, StyleSheet, View, Text, FlatList, ScrollView, Button } from 'react-native'

export default class Api extends Component {
  constructor(props) {
    // Calling super class constructor
    super(props);
    // Creating state
    this.state = {
      data: [],
      isLoading: false,
    }
  }
  componentDidMount() {
    fetch('https://reqres.in/api/users')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: true,
          data: responseJson.data
        });
      });

  }

  // display = () => {
  //   if (this.state.isLoading) {
  //     return (
  //       <View style={styles.container}>
  //         <Text>{this.state.data.map((item) => {
  //           return (
  //             <View>
  //               <Text >{item.id}</Text>
  //               <Image
  //                 style={styles.logo}
  //                 source={{ uri: `${item.avatar}` }}
  //               />
  //               <Text style={styles.Textcolor}>FullName:- {item.first_name} {item.last_name}</Text>
  //               <Text style={styles.Textcolor}>Email:- {item.email}</Text>
  //               <Text style={styles.Textcolor}>profilepic: {item.avatar}</Text>
  //             </View>
  //           )
  //         })}</Text>
  //       </View>
  //     )
  //   }
  // }


  render() {
    return (
      console.log(this.state.data),
      console.log(this.state.isLoading),
      <ScrollView>
        <View style={styles.container}>
          <Text>{this.state.data.map((item) => {
            return (
              <View>
                <Text >{item.id}</Text>
                <Image
                  style={styles.logo}
                  source={{ uri: `${item.avatar}` }}
                />
                <Text style={styles.Textcolor}>FullName:- {item.first_name} {item.last_name}</Text>
                <Text style={styles.Textcolor}>Email:- {item.email}</Text>
                <Text style={styles.Textcolor}>profilepic: {item.avatar}</Text>
              </View>
            )
          })}</Text>
        </View>

      </ScrollView>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 50,
    paddingBottom: 50,
  },
  display: {
    flexDirection: 'column',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: 'center'

  },
  logo: {
    width: 300,
    height: 400,
    margin: 5,

  },
  Textcolor: {
    color: 'red',
  }
})