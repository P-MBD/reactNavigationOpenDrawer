import * as React from 'react';
import { Button, View, Image, Pressable,Text } from 'react-native';
import { createDrawerNavigator, DrawerActions } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.openDrawer()}
        title="Open close drawer"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function CustomHeader() {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        navigation.toggleDrawer();
      }}>
      <Text>Ali</Text>
      
    </Pressable>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator  initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) => <CustomHeader {...props} /> }}
        />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
