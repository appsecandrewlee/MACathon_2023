import AsyncStorage from '@react-native-async-storage/async-storage';

const storageService = {
    saveToken: async (token) => {
        await AsyncStorage.setItem('userToken', token);
    },
    getToken: async () => {
        return await AsyncStorage.getItem('userToken');
    },
    removeToken: async () => {
        await AsyncStorage.removeItem('userToken');
    },

    // Repeat similar methods for UID, preferred language, and other data you want to store/retrieve/remove
    saveUID: async (uid) => {
        await AsyncStorage.setItem('userUid', uid);
    },
    getUID: async () => {
        return await AsyncStorage.getItem('userUid');
    },
    removeUID: async () => {
        await AsyncStorage.removeItem('userUid');
    }
}

export default storageService;
