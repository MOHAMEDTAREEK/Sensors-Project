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

  const MyBezierLineChart = (props) => {
    console.log(props.data)
    return (
      <>
        <LineChart
          data={{
            labels: props.labels,
            datasets: [
              {
                data:props.data
              },
            ],
          }}
          width={Dimensions.get('window').width - 24} // from react-native
          height={320}
          
          chartConfig={{
            backgroundColor: '#108810',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0, 
            color: (opacity = 255) => `rgba(0, 1, 0, ${opacity})`,
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
  function Graph (props ) {
    return (
      <SafeAreaView style={{flex: 1}}>
      <View>
       <MyBezierLineChart data={props.data} labels={props.labels} />
      </View>
      </SafeAreaView>
    )
  }
  export default Graph;
  const styles = StyleSheet.create({
    
  });