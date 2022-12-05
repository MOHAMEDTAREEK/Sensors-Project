import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
  } from 'react-native';
  import {
    LineChart,
  } from 'react-native-chart-kit';

  const MyBezierLineChart = () => {
    return (
      <>
        <LineChart
          data={{
            labels: ['co2', 'February', 'March', 'April'],
            datasets: [
              {
                data: [
                 0,
                 2,
                50,
                20,
                 30,
                40,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 24} // from react-native
          height={220}
          
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 0, 
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            borderRadius: 16,
          }}
        />
      </>
    );
  };
  function Graph ( ) {
    return (
      <SafeAreaView style={{flex: 1}}>
      <View>
       <MyBezierLineChart />
      </View>
      </SafeAreaView>
    )
  }
  export default Graph;
  const styles = StyleSheet.create({
    
  });