import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { View , StyleSheet} from "react-native";

const Splash = ({ navigation }) =>{

    useEffect(() =>{
       const timeoutId = setTimeout(() =>{
            navigation.replace('Login');
        }, 3000);

        return () =>
            clearTimeout(timeoutId);
        
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LottieView
            style={{width: 200, height: 200}}
                source={require('../../assets/animations/splash.json')}
                autoPlay
                loop
            />
            <Text>SWIFTCUT</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Splash;