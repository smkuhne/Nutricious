import React, { Component } from 'react';
import {View, Text, Button,Alert,StyleSheet,FlatList} from 'react-native';

import { db } from "./src/config/db.js";
import { setUser, getUser } from "./Storage.js";
locations = [{
  location: "Tercero",
  latitude: 38.5363,
  longitude: 121.7575,
},
{
  location: "Segundo",
  latitude: 38.5440,
  longitude: 121.7580,
},
{
  location: "Cuarto",
  latitude: 38.5473,
  longitude: 121.77632,
},
{
  location: "Random DC",
  latitude: 12,
  longitude: -12,
},
];
apprxLoc = [
];
Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}

function haversineDistance (lon1,lat1,lon2,lat2){
  
  if(lat2 == null || lat1 == null){
    return 0;
  }
  var R = 6371; // km 
  //has a problem with the .toRad() method below.
  var a = Math.sin(((lat2-lat1).toRad())/2) * Math.sin(((lat2-lat1).toRad())/2) + 
               Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
               Math.sin(((lon2-lon1).toRad())/2) * Math.sin(((lon2-lon1).toRad())/2);  
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; 
  return d;
}

export default class Location extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      atDC: "none",
      nearest: "n/a",
    };
    
  }
  
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState(
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      }
      );
      for (i = 0; i < locations.length; i++) { 
        if(haversineDistance(locations[i].longitude,locations[i].latitude,this.state.longitude,this.state.latitude)<0.001){
           this.setState({
             atDC:locations[i].location
           })
           apprxLoc.pop()
           apprxLoc.push({
              text: "Current Location:",
              location: locations[i].location
           })
        };
      }
      if(this.state.atDC=="none") {
        var num = haversineDistance(locations[0].longitude,locations[0].latitude,this.state.longitude,this.state.latitude);
        var name = locations[0].location;
        for (i = 1; i < locations.length; i++) { 
          var difnum = haversineDistance(locations[i].longitude,locations[i].latitude,this.state.longitude,this.state.latitude);
          if(difnum<num){
            num=difnum
            name = locations[i].location;
          };
        }
        this.setState({
          nearest: name,
        })
        apprxLoc.pop();
        apprxLoc.push({
          text: "Nearest Locale: ",
          location: name,
       })
        
      }
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 0.5 },
  );
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState(
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        }
        );
        for (i = 0; i < locations.length; i++) { 
          if(haversineDistance(locations[i].longitude,locations[i].latitude,this.state.longitude,this.state.latitude)<0.001){
            this.setState({
               atDC:locations[i].location
             })
             apprxLoc.pop()
             apprxLoc.push({
                text: "Current Location:",
                location: locations[i].location
             })
          };
        }
        if(this.state.atDC=="none") {
          var num = haversineDistance(locations[0].longitude,locations[0].latitude,this.state.longitude,this.state.latitude);
          var name = locations[0].location;
          for (i = 1; i < locations.length; i++) { 
            var difnum = haversineDistance(locations[i].longitude,locations[i].latitude,this.state.longitude,this.state.latitude);
            if(difnum<num){
              num=difnum
              name = locations[i].location;
            };
          }
          this.setState({
            nearest: name,
          })
          apprxLoc.pop();
          apprxLoc.push({
            text: "Nearest Locale: ",
            location: name,
         })
          
        }
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 0.5 },
    );
  }

  render() {
    const newLoc = apprxLoc.map(b => {
      return (
        <View style = {styles.container}>
          <Text style = {styles.text}>{b.text} {b.location}</Text>
        </View>
      )
    });
    return (
      <View style={{ flexGrow: 1,alignContent:"center", backgroundColor: 'white'}}>
        {newLoc}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    padding: 15,
    backgroundColor: "rgb(97, 145, 221)",
    margin: 10,
  },
  title: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 350,
    height: 40,
    flexDirection: "column",
    backgroundColor: "rgb(97, 145, 221)",
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: "white"
  },
});