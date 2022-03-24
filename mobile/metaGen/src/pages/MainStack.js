import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, createAppContainer  } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import AttendanceTrackingScreen from './AttendanceTrackingScren';
import ScanQrScreen from './ScanQrScreen';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SettingsScreen from './SettingsScreen';
import Demo from './Demo';


const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Attendance" component={AttendanceTrackingScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
                <Stack.Screen name="Scan" component={ScanQrScreen} />
                <Stack.Screen name="Demo" component={Demo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}