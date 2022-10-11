import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export const Loading = () => {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
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