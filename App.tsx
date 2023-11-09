import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [currentTemp, setCurrentTemp] = useState(24);
  const [setTemp, setSetTemp] = useState(24);
  const [mode, setMode] = useState('cooling');
  const [fanSpeed, setFanSpeed] = useState(1);

  const modes = ['cooling', 'heating', 'dehumidify'];
  const fanSpeeds = [1, 2, 3];

  const increaseTemp = () => setSetTemp(prevTemp => prevTemp + 1);
  const decreaseTemp = () => setSetTemp(prevTemp => prevTemp - 1);

  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <TouchableOpacity style={styles.powerButton} onPress={() => setIsOn(!isOn)}>
          <FontAwesome5 
            name={isOn ? 'snowflake' : 'power-off'} 
            size={24} 
            color={isOn ? 'blue' : 'gray'} 
          />
        </TouchableOpacity>
        <Text style={styles.tempDisplay}>{`${currentTemp}°C`}</Text>
      </View>
      
      <View style={[styles.tempControl, styles.tempControlMargin]}>
        <TouchableOpacity style={styles.tempButton} onPress={decreaseTemp}>
          <FontAwesome5 name="minus" size={24} color='black' />
        </TouchableOpacity>

        <Text style={styles.setTempDisplay}>{`${setTemp}°C`}</Text>

        <TouchableOpacity style={styles.tempButton} onPress={increaseTemp}>
          <FontAwesome5 name="plus" size={24} color='black' />
        </TouchableOpacity>
      </View>

      <View style={styles.controls}>
        <View style={styles.modeSwitch}>
          <TouchableOpacity 
            style={[styles.modeButton, mode === 'cooling' ? styles.selectedMode : null]}
            onPress={() => setMode('cooling')}
          >
            <FontAwesome5 name="snowflake" size={18} color={mode === 'cooling' ? 'white' : 'black'} />
            <Text style={[styles.modeText, mode === 'cooling' ? styles.modeTextSelected : null]}>Cooling</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.modeButton, mode === 'heating' ? styles.selectedModeHeating : null]}
            onPress={() => setMode('heating')}
          >
            <FontAwesome5 name="fire" size={18} color={mode === 'heating' ? 'white' : 'black'} />
            <Text style={[styles.modeText, mode === 'heating' ? styles.modeTextSelected : null]}>Heating</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.modeButton, mode === 'dehumidify' ? styles.selectedModeDehumidify : null]}
            onPress={() => setMode('dehumidify')}
          >
            <FontAwesome5 name="water" size={18} color={mode === 'dehumidify' ? 'white' : 'black'} />
            <Text style={[styles.modeText, mode === 'dehumidify' ? styles.modeTextSelected : null]}>Dehumidify</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.fanSpeedControl}>
          {[1, 2, 3].map((speed) => (
            <TouchableOpacity 
              key={speed} 
              style={[
                styles.fanSpeedButton, 
                fanSpeed >= speed ? styles.selectedFanSpeed : {}
              ]}
              onPress={() => setFanSpeed(speed)}
            >
              <FontAwesome5
                name={'wind'} // Using 'circle' as a placeholder for the icon
                size={24} 
                color={fanSpeed >= speed ? 'white' : 'black'}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF', // White background for a clean look
  },
  status: {
    alignItems: 'center',
    marginBottom: 20,
  },
  powerButton: {
    position: 'absolute',
    top: -50,
    padding: 12,
    borderRadius: 30, // A perfect circle
    backgroundColor: '#FFF', // Keeping it white to blend with the container
    elevation: 0, // No shadow for a flat design
  },
  tempControlMargin: {
    marginTop: 20,
  },
  tempDisplay: {
    fontSize: 48,
    fontWeight: '300', // Lighter font-weight for a more delicate and clean appearance
    color: 'black',
  },
  setTempDisplay: {
    fontSize: 32,
    fontWeight: '300',
    color: '#757575', // Softer color for less visual impact
  },
  controls: {
    width: '100%',
    alignItems: 'center',
  },
  tempControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tempButton: {
    padding: 12,
    borderRadius: 30, // Circle shape for + and - for a more universal symbol
    backgroundColor: '#FFF', // White to blend with the background
    elevation: 0, // No shadow for a flat design
  },
  modeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20, // Slightly rounded edges for a subtle touch
    backgroundColor: '#FFF', // White for a clean look
    elevation: 0, // No shadow for a flat design
    marginHorizontal: 5,
    flex: 1,
  },
  modeText: {
    marginLeft: 10,
    color: '#212121', // Keeping text color solid for readability
    fontWeight: '300',
  },
  selectedMode: {
    backgroundColor: '#E0E0E0', // A subtle grey to indicate selection without overpowering
  },
  modeTextSelected: {
    color: 'white',
  },
  selectedModeHeating: {
    backgroundColor: '#BDBDBD',
  },
  selectedModeDehumidify: {
    backgroundColor: '#BDBDBD',
  },
  modeSwitch: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  fanSpeedControl: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  fanSpeedButton: {
    padding: 12,
    borderRadius: 30, // Circle shape to indicate increase in speed
    backgroundColor: '#FFF', // White to keep it clean and minimal
    elevation: 0, // No shadow for a flat design
    marginHorizontal: 5,
  },
  selectedFanSpeed: {
    backgroundColor: '#E0E0E0', // A subtle grey to indicate selection
  },
  fanSpeedText: {
    color: 'white',
  },
});


export default App;
