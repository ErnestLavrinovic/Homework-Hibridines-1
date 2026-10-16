import { Text, View } from 'react-native';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ fontSize: 30, color: '#000' }}>Hello World</Text>
    </View>
  );
}
