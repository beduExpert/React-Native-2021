import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { ComponentProps, FC } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

const BackgroundDesign: FC = () => {
  return (
    <View style={backgroundStyles.edge}>
      <View style={backgroundStyles.firstBall} />
      <View style={backgroundStyles.secondBall} />
    </View>
  );
};

interface InputProps {
  icon: MaterialIconName;
  name: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ icon, name, placeholder = null }) => {
  return (
    <View style={formStyles.container}>
      <Text style={formStyles.label}>{name}</Text>
      <View style={formStyles.inputContainer}>
        <View style={formStyles.iconContainer}>
          <MaterialIcons name={icon} size={24} color="black" />
        </View>
        <TextInput
          style={formStyles.input}
          placeholder={placeholder ?? name}
          placeholderTextColor="#75757F"
        />
      </View>
    </View>
  );
};

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({ text }) => {
  return (
    <View style={buttonStyles.container}>
      <TouchableOpacity style={buttonStyles.button} activeOpacity={0.7}>
        <Text style={buttonStyles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const SignInScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sweeter</Text>
      <Text style={styles.subtitleText}>Sign in</Text>
      <Input icon="mail-outline" name="Email" />
      <Input icon="vpn-key" name="Password" />
      <SubmitButton text="Sign in" />
      <BackgroundDesign />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="login" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Payment"
          component={SignInScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="payment" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Status"
          component={SignInScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="data-usage" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const backgroundStyles = StyleSheet.create({
  firstBall: {
    backgroundColor: '#5071AF',
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    position: 'absolute',
    top: -33,
    left: -40,
    zIndex: -1,
  },
  secondBall: {
    backgroundColor: '#4EA8DB',
    width: 272,
    height: 272,
    borderRadius: 272 / 2,
    position: 'absolute',
    top: -65,
    right: -34,
    zIndex: -1,
  },
  edge: {
    width: '100%',
    height: '100%',
    borderColor: '#4EA8DB',
    borderWidth: 4,
    position: 'absolute',
    zIndex: -1,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
  },
  titleText: {
    fontSize: 60,
    textAlign: 'center',
    color: 'black',
  },
  subtitleText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
  },
});

const formStyles = StyleSheet.create({
  container: {
    marginHorizontal: 48,
  },
  label: {
    color: 'black',
    fontSize: 16,
    marginLeft: 15,
  },
  inputContainer: {
    backgroundColor: '#A5D1FA',
    height: 30,
    borderRadius: 15,
    paddingRight: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
  },
  iconContainer: {
    height: 30,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#5071AF',
    marginHorizontal: 48,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    marginTop: 32,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});

export default App;
