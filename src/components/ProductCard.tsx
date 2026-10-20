import { Button, StyleSheet, Text, View, Image, type ImageSourcePropType } from 'react-native';

type ProductCardProps = {
    name: string,
    price: number,
    category: string,
    image: ImageSourcePropType,
    onAddToCart: () => void;
}

export function ProductCard({
    name,
    price,
    category,
    image,
    onAddToCart }: ProductCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <View style={styles.details}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>{price.toFixed(2)} €</Text>
                    <Text style={styles.category}>{category}</Text>
                </View>
                <Image
                    source={image}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Button title="Pridėti į krepšelį" onPress={onAddToCart} />
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 12,
        gap: 8,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
        color: 'green',
    },
    category: {
        fontSize: 14,
        color: '#777',
    },
    image: {
        width: '50%',
        height: 150,
        borderRadius: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    details: {
        flex: 1,
        gap: 5,
    },
});