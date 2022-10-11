import { useEffect } from 'react';
import { 
    View, 
    StyleSheet, 
    Image,
    ActivityIndicator,
    Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getApiResource } from '../utils/network';
import { fetchPhoto } from '../store/actions';

import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

const Photo = ({ route, navigation }) => {
    const photoLoadingStatus = useSelector(state => state.photo.photoLoadingStatus);
    const dispatch = useDispatch();
    const { id } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: id
        });

        dispatch(fetchPhoto(getApiResource, id));
    }, []);

    const image = useSelector(state => state.photo.photo);

    if (photoLoadingStatus === 'loading') {
        return (
          <Loading />
        );
    } else if (photoLoadingStatus === 'error') {
        return (
            <Error />
        )
    }
        
    return (
        <View style={styles.container }>
            <Image style={{width: '100%', height: '100%'}} source={{uri: image.urls.full}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})

export default Photo;
