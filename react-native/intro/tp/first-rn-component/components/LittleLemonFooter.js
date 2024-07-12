import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
            <Text
                style={{
                    paddingBottom: 20,
                    fontSize: 10,
                    color: 'black',
                    textAlign: 'center',
                }}>
                All rights reserved by Little Lemon, 2022
            </Text>
        </View>
    );
}