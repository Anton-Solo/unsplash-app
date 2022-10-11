import { StyleSheet, Text, View } from 'react-native';

export const Error = () => {
    return (
        <View style={styles.container}>
          <Text>Loading Error</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#777',
      alignItems: 'center',
      justifyContent: 'center',
    }
});