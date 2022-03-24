import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import SettingsScreen from '../pages/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from '../pages/LoginScreen';
import CameraStack from '../pages/CameraStack';
import AttendanceReportScreen from '../pages/AttendanceReportScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        } else if (route.name === 'Scan') {
                            iconName = focused ? 'scan-circle' : 'scan-circle-outline';
                        }
                        else if (route.name === 'Attendance') {
                            iconName = focused ? 'search' : 'search-outline';
                        }
                        else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        else if (route.name === 'Account') {
                            iconName = focused ? 'people' : 'people-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Attendance" component={AttendanceReportScreen} />
                <Tab.Screen name="Scan" component={CameraStack} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="Account" component={LoginScreen} />
            </Tab.Navigator>
          
        </NavigationContainer>
    );
}

export default MyTabs;
