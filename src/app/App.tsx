import { FlatList, Text, View, StyleSheet } from 'react-native';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.screenTitle}>Product List</Text>
      </View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            price={item.price}
            category={item.category}
            image={item.image}
            onAddToCart={() => {
              console.log('Added to cart:', item.name);
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'left',
    marginLeft: 20,
    marginBottom: 20,
  }
});