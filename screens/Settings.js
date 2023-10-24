import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavigateBack from '../components/NavigateBack';
import { Picker } from '@react-native-picker/picker';

export default function Settings(props) {
    const [mapType, setMapType] = useState(props.mapType); // Use props.mapType as initial value
    
    useEffect(() => {
        console.log('Map type prop in Settings:', mapType);
    }, [mapType]);

    return (
        <>
            <NavigateBack {...props} />
            <View style={styles.settingsArea}>
                <Text style={styles.heading}>Map Type</Text>
                <Picker
                    selectedValue={props.mapType} // Use props.mapType directly
                    onValueChange={(itemValue) => {
                        props.setMapType(itemValue);
                    }}
                >
                    <Picker.Item label="Standard" value="standard" />
                    <Picker.Item label="Satellite" value="satellite" />
                </Picker>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    settingsArea: {
        marginTop: 32,
        marginLeft: 16,
    },
    heading: {
        color: global.backgroundColor,
        textTransform: 'uppercase',
    },
});