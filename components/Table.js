import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';
export default class ExampleOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['time', 'co2', 'pH', 'water level'],
            tableData: props.data

        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={state.tableData} textStyle={styles.text} />
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});