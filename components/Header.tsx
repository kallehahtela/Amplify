import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import React from 'react'
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView style={styles.outer}>
        <View style={styles.container}>
            <View style={styles.insideContainer}>
                <Ionicons name='search-outline' size={26} color={Colors.dark_grey} style={{ marginLeft: 20 }} />
                <Text style={styles.insideText}>What to do?</Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 5 }}>
                <Text style={styles.insiderText}>Hola · Amigos · Putas</Text>
            </View>
        </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    outer: {
        borderBottomColor: Colors.light_grey,
        borderBottomWidth: .4,
    },
    container: {
        marginTop: Platform.OS === 'ios' ? 50 : 0,
        marginBottom: 25,
        marginHorizontal: 17,
        height: 80,
        width: '90%',
        borderColor: Colors.light_grey,
        borderWidth: 1,
        borderRadius: 35,
    },
    insideContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 60,
        alignItems: 'center',
    },
    insideText: {
        color: Colors.dark_grey,
        fontSize: 17,
        textAlign: 'center',
        marginRight: Platform.OS === 'android' ? 100 : 50,
    },
    insiderText: {
        color: Colors.light_grey,
    },
});

export default Header