import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './Details';

const Stack = createStackNavigator();

const Bundesliga = () => {
  const [standingsData, setStandingsData] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); 

  useEffect(() => {
    const fetchStandingsData = async () => {
      try {
        const response = await fetch('https://v3.football.api-sports.io/standings?league=78&season=2023', {
          headers: {
            'x-apisports-key': 'a816021a44c797e2d936f757e921aa9a'
          }
        });
        const data = await response.json();
        setStandingsData(data.response[0].league.standings[0]);
      } catch (error) {
        console.error("Error fetching standings data:", error);
      }
    };

    fetchStandingsData();
  }, []);

  const handleTeamPress = (team) => {
    setSelectedTeam(team);
    console.log(team)
    setIsModalVisible(true); 
  };

  const closeModal = () => {
    setIsModalVisible(false); 
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={[styles.text, styles.header]}>Rank</Text>
          <Text style={[styles.text, styles.header]}>Team</Text>
          <Text style={[styles.text, styles.header]}>Points</Text>
        </View>
        {standingsData.map((teamStanding, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
            onPress={() => handleTeamPress(teamStanding)} 
          >
            <View  style={styles.image}>
              <Text style={styles.text}>{teamStanding.rank}</Text>
              <Image
                source={{ uri: teamStanding.team.logo }}
                style={styles.logo}
              />
              </View>
           
              <View style={styles.team}>
              <Text style={styles.text}>{teamStanding.team && teamStanding.team.name}</Text>
            </View>
            <Text style={styles.text}>{teamStanding.points}</Text>
          </TouchableOpacity>
        ))}
       
        <Modal transparent={true} visible={isModalVisible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', margin:50, padding:50,  borderRadius: 10 }}>
              <Button title='Close' onPress={closeModal} />
              {selectedTeam && (
                <View>
                     <Text style={styles.card}>Name: {selectedTeam.team.name}</Text>
                     <Text style={styles.card}>Rank: {selectedTeam.rank}</Text>
                    <Text style={styles.card}>matches played: {selectedTeam.all.played}</Text>
                    <Text style={styles.card}>matches won: {selectedTeam.all.win}</Text>
                    <Text style={styles.card}>matches lose: {selectedTeam.all.lose}</Text>
                  <Text style={styles.card}>Goal score: {selectedTeam.all.goals.for}</Text>
                  <Text style={styles.card}>Goal concede: {selectedTeam.all.goals.against}</Text>
                  <Text style={styles.card}>FORM: {selectedTeam.form}</Text>
                  
                  

                </View>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
    },
    text: {
      fontSize: 10,
      fontWeight: '600',
      paddingRight:25
    },
    header: {
      fontWeight: '700',
  
    },
    logo: {
      width: 20,
      height: 20,
    alignItems:"center",
   
    
    },
    card:{
      marginTop:20,
      fontSize:13
    },
   image:{
    flexDirection: 'row', // Set the direction to row
    justifyContent: 'center', // Align items along the main axis (horizontally in this case)
    alignItems: 'center',
   }
   ,team:{
    marginRight:15
  }

  });


export default Bundesliga;
