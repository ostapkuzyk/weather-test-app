import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useAppContext } from '@/context/AppContext';
import { WeatherService } from '@/types/AppContext';

const Settings = () => {
    const router = useRouter();
    const { weatherService, setWeatherService } = useAppContext();
    const [localService, setLocalService] = useState(weatherService);

    const handleSave = () => {
        setWeatherService(localService);
        router.back();
    };

    const handleBack = () => {
        router.back();
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 2 }} />
                <Text style={styles.title}>Settings</Text>
                <Pressable style={{ flex: 2 }} onPress={handleBack}>
                    <Text style={styles.close}>Close</Text>
                </Pressable>
            </View>
            <View style={styles.mainWrap}>
                <Text style={styles.label}>Select Weather Service</Text>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            localService === WeatherService.OpenWeatherMap ? styles.selectedOption : null,
                        ]}
                        onPress={() => setLocalService(WeatherService.OpenWeatherMap)}
                    >
                        <Text style={styles.optionText}>OpenWeatherMap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            localService === WeatherService.WeatherApi ? styles.selectedOption : null,
                        ]}
                        onPress={() => setLocalService(WeatherService.WeatherApi)}
                    >
                        <Text style={styles.optionText}>WeatherAPI</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003366',
    },
    header: {
        paddingTop: 16,
        paddingHorizontal: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    title: {
        flex: 3,
        textAlign: 'center',
        fontSize: 27,
        color: '#ffffff',
    },
    close: {
        textAlign: 'right',
        color: '#b91212',
    },
    mainWrap: {
        paddingHorizontal: 24,
    },
    label: {
        fontSize: 18,
        color: '#ffffff',
        marginBottom: 16,
    },
    optionsContainer: {
        marginBottom: 24,
    },
    option: {
        backgroundColor: '#1e3a5f',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    selectedOption: {
        backgroundColor: '#134cb5',
    },
    optionText: {
        color: '#ffffff',
        fontSize: 16,
    },
    saveButton: {
        backgroundColor: '#1E90FF',
        paddingVertical: 12,
        borderRadius: 12,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Settings;