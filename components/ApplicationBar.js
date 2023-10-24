import { View, Text } from 'react-native'
import React from 'react'
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialIcons";

export default function ApplicationBar({ backgroundColor, title, locationIcon, getUserLocation, navigation }) {
    return (
        <AppBar
            title={title}
            backgroundColor={backgroundColor}
            trailing={props => (
                <HStack>
                    <IconButton 
                        icon={props => <Icon name="search" {...props} />}
                        onPress={() => { navigation.navigate('search') }}
                        {...props}
                    />
                    <IconButton
                        icon={props => <Icon name={locationIcon} {...props} />}
                        onPress={getUserLocation}
                        {...props}
                    />
                    <IconButton
                        icon={props => <Icon name="settings" {...props} />}
                        onPress={() => { navigation.navigate('settings') }}
                        {...props}
                    />
                </HStack>
            )}
        />
    )
}