import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Modal, Pressable } from 'react-native';

type CartInfoProps = {
    count: number;
    onClearCount: () => void;
}

export function CartInfo({ count, onClearCount }: CartInfoProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <Pressable
                style={styles.container}
                onPress={() => setIsOpen(true)
                }
            >
                <View style={styles.container}>
                    <Text style={[styles.icon, { opacity: count > 0 ? 1 : 0.4 }]}>
                        🛒
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.count}>{count}</Text>
                    </View>
                </View>
            </Pressable>

            <Modal
                visible={isOpen}
                transparent
                animationType='fade'
                onRequestClose={() => setIsOpen(false)}
            >
                <View style={styles.overlay}>
                    <View style={styles.popup}>
                        <Text>Prekiu krepselyje: {count}</Text>

                        <Button
                            title="Uždaryti"
                            onPress={() => setIsOpen(false)}
                        />
                        <Button
                            title="Išvalyti krepšelį"
                            onPress={() => {
                                onClearCount();
                                setIsOpen(false);
                            }}
                        />
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 42,
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#2563eb',
        borderRadius: 12,
        minWidth: 24,
        height: 24,
        paddingHorizontal: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    count: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    popup: {
        width: '80%',
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 16,
        gap: 16,
    },
});