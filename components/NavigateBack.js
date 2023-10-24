import React from 'react';
import { AppBar, HStack, IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialIcons';

export default function NavigateBack({ backgroundColor, title, navigation }) {
  return (
    <AppBar
      title={title}
      backgroundColor={backgroundColor}
      leading={(props) => (
        <HStack>
          <IconButton
            icon={(props) => <Icon name="arrow-back" {...props} />}
            onPress={() => {
              navigation.goBack();
            }}
            {...props}
          />
        </HStack>
      )}
    />
  );
}
