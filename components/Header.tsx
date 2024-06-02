import { View, Text, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import React from 'react'
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from '@react-navigation/native';

const width = Dimensions.get('window').width;

const Header = () => {
  return (
    <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
            <View style={styles.actionContainer}>
                <Link to={'../screens/home'}>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Ionicons name='search-outline' size={24} />
                        <View>
                            <Text style={{ fontFamily: 'PoppinsSemiBold' }}>What to do?</Text>
                            <Text style={{ fontFamily: 'Poppins' }}>click to search...</Text>
                        </View>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
    safeView: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        flex: 1,
        backgroundColor: Colors.white,
    },
    container: {
        backgroundColor: Colors.white,
        height: 100,
        borderBottomColor: Colors.light_grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingBottom: 10,
        gap: 10,
    },
    searchBtn: {
        width: width - 40,
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 14,
        borderRadius: 30,
        backgroundColor: Colors.white,
        borderColor: Colors.light_grey,
        borderWidth: StyleSheet.hairlineWidth,
        shadowColor: Colors.black,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: .12,
        shadowRadius: 8,
        elevation: 2,
    },
});

export default Header;