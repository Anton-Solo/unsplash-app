import { useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  Image, 
  View, 
  FlatList, 
  TouchableOpacity, 
  RefreshControl,
  ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import { withErrorApi } from '../hoc-helper/withErrorApi';
import { getApiResource } from '../utils/network';
import { photosListFetching, photosListFetched, photosListFetchingError } from '../store/actions';

const HomeScreen = ({ navigation, setErrorApi }) => {
  const dispatch = useDispatch();
  let images = useSelector(state => state.photosList.photosList);
  const photosListLoadingStatus = useSelector(state => state.photosListLoadingStatus);

  const fetchPhotos = () => {
    dispatch(photosListFetching())
    getApiResource('https://api.unsplash.com/photos?page=1&client_id=PPN2Qm0G7KlhVkSk-YikYpAl0rKME44sDt9MBZ8vJrI')
      .then(data => {
        dispatch(photosListFetched(data));
        setErrorApi(false);
      })
      .catch(() => {
        dispatch(photosListFetchingError());
        setErrorApi(true);
      })
  }
  
  useEffect(fetchPhotos, []);

  if (photosListLoadingStatus === "loading") {
    return (
      <Loading />
    );
  } else if (photosListLoadingStatus === "error") {
     return (
      <Error />
    );
  }
 
  return (
    <View style={styles.container}>
      <FlatList 
        refreshControl={<RefreshControl refreshing={photosListLoadingStatus} onRefresh={fetchPhotos} />}
        data={images}
        renderItem={({item}) => 
          <View style={styles.polaroid}>
            <TouchableOpacity onPress={() => navigation.navigate('Photo', {id: item.id})}>
              <Image style={styles.polaroid__img} source={{uri:item.urls.regular}}/>
            </TouchableOpacity>
            <Text style={{fontWeight: 'bold'}}>{item.id}</Text>
            <Text>Author: {item.user.name}</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  polaroid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: '3px 3px 3px #777',
    width: 350,
    height: 380,
    marginBottom: 10, 
  },
  polaroid__img: {
    width: 300,
    height: 300,
    marginBottom: 10
  }
});

export default withErrorApi(HomeScreen);
