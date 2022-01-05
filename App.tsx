import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import React, { ComponentProps, FC, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
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

type InputProps = TextInputProps & {
  icon: MaterialIconName;
  name: string;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
  icon,
  name,
  placeholder = null,
  ...props
}) => {
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
          {...props}
        />
      </View>
    </View>
  );
};

type SubmitButtonProps = Pick<TouchableOpacityProps, 'onPress'> & {
  text: string;
};

const SubmitButton: FC<SubmitButtonProps> = ({ text, onPress }) => {
  return (
    <View style={buttonStyles.container}>
      <TouchableOpacity
        style={buttonStyles.button}
        activeOpacity={0.7}
        onPress={onPress}>
        <Text style={buttonStyles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const save = async (key: string, value: Record<string, any>) => {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
};

const getValueFor = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

const SignInScreen: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sweeter</Text>
      <Text style={styles.subtitleText}>Sign in</Text>
      <Input
        icon="mail-outline"
        name="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        icon="vpn-key"
        name="Password"
        value={password}
        onChangeText={setPassword}
      />
      <SubmitButton
        text="Sign in"
        onPress={() =>
          save('user', {
            email,
            password,
          })
        }
      />
      <BackgroundDesign />
    </View>
  );
};

const PaymentScreen: FC = () => {
  const [card, setCard] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.subtitleText}>Payment</Text>
      <Input
        icon="credit-card"
        name="Card number"
        onChangeText={setCard}
        value={card}
      />
      <Input
        icon="person"
        name="Full name"
        onChangeText={setName}
        value={name}
      />
      <Input
        icon="date-range"
        name="Expiry date"
        placeholder="mm/yy"
        onChangeText={setDate}
        value={date}
      />
      <Input icon="vpn-key" name="CVV" onChangeText={setCvv} value={cvv} />
      <SubmitButton
        text="Pay"
        onPress={() =>
          save('card', {
            card,
            name,
            date,
            cvv,
          })
        }
      />
      <BackgroundDesign />
    </View>
  );
};

const StatusScreen: FC = () => {
  const [user, setUser] = useState<null | string>(null);
  const [card, setCard] = useState<null | string>(null);
  const [status, setStatus] = useState<string>('loading');

  const getStatus = async () => {
    try {
      setStatus('loading');
      const securedUser = await getValueFor('user');
      const securedCard = await getValueFor('card');
      setUser(securedUser);
      setCard(securedCard);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Status</Text>
      <Text>User</Text>
      <Text>{status === 'loading' ? 'loading' : user}</Text>
      <Text>Card</Text>
      <Text>{status === 'loading' ? 'loading' : card}</Text>
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
          component={PaymentScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="payment" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Status"
          component={StatusScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="data-usage" color={color} size={size} />
            ),
            unmountOnBlur: true,
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
    alignItems: 'center',
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
    marginBottom: 32,
  },
});

const formStyles = StyleSheet.create({
  container: {
    marginHorizontal: 48,
  },
  label: {
    color: 'black',
    fontSize: 12,
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
