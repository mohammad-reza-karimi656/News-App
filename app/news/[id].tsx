import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { newsData } from '../(tabs)/index'; // از همان فایل index.tsx دیتا را می‌گیرد

export default function NewsDetail() {
  const { id } = useLocalSearchParams();  // گرفتن id از URL

  const item = newsData.find(n => n.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18 }}>خبر پیدا نشد</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{item.title}</Text>

      <Image source={item.image} style={styles.image} />

      <Text style={styles.description}>{item.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});
