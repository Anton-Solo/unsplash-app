import { useState } from "react";
import { 
    StyleSheet,
    View, 
    Text} from 'react-native';

export const withErrorApi = ViewContainer => {

    return props => {
        const [errorApi, setErrorApi] = useState(false);
        return (
            <>
                {errorApi ?
                    <View style={styles.container}>
                        <Text>App Error</Text>
                    </View>
                    : <ViewContainer  setErrorApi={setErrorApi} {...props}/>}
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})