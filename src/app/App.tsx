import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { CartInfo } from '../components/CartInfo';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.screenTitle}>Prekių sąrašas</Text>
        <CartInfo count={cartCount}
          onClearCount={() => setCartCount(0)} />
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
              setCartCount((cartCount) => cartCount + 1);
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});