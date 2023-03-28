import {View} from "react-native";
import LottieView from 'lottie-react-native';

export default () => {
    return (
        <View style={{flex:1 , justifyContent:"center", alignItems:"center"}}>
            <LottieView
                autoPlay
                style={{
                    width:200,
                    height:200,
                }}
                source={require('../assets/loading.json')}
            />

        </View>
    );
};