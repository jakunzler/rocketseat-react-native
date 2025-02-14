import { View, Text, StatusBar } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.firstParagraph}>Primeiro app criado por Jonas Augusto Kunzler,</Text>
      <Text style={styles.secondParagraph}>utilizando React Native</Text>
    </View>
  );
}
