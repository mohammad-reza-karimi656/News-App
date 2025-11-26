import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { newsData } from '../(tabs)/index';

// دسته‌بندی‌ها
const categories = [
  'All',
  'Technology',
  'Science',
  'Health',
  'Environment',
  'Economy',
  'Sport',
  'Education',
  'World',
];

export default function Explore() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredNews = newsData.filter((item) => {
    const matchCategory =
      selectedCategory === 'All' || item.category === selectedCategory;

    const search = searchText.trim().toLowerCase();
    const matchSearch =
      !search ||
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search);

    return matchCategory && matchSearch;
  });

  return (
    <View style={styles.container}>
      {/* 🔥 Header خارج از FlatList */}
      <View style={styles.headerBlock}>
        <Text style={styles.header}>Explore</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search news..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScrollContent}
        >
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              style={[
                styles.categoryButton,
                selectedCategory === cat && styles.categoryButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* FlatList فقط برای آیتم‌ها */}
      <FlatList
        data={filteredNews}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: '/news/[id]', params: { id: item.id } })
            }
            style={styles.newsCard}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {item.description}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}

// -------- Styles --------
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },

  headerBlock: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    marginBottom: 12,
  },
  categoryScrollContent: {
    paddingLeft: 5,
    paddingRight: 15,
    alignItems: 'center',
  },
  categoryButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButtonActive: {
    backgroundColor: '#333',
  },
  categoryText: {
    fontSize: 15,
    color: '#333',
  },
  categoryTextActive: {
    color: '#fff',
  },

  // 🔥 کارت کوچک برای دو ستونه
  newsCard: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 12,
    borderRadius: 10,
    elevation: 3,
    width: '48%',    // مهم برای دو کارت کنار هم
  },

  image: {
    width: '100%',
    height: 120,   // کمی کوچک کردم تا بهتر جا شود
    borderRadius: 10,
    marginBottom: 8,
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  description: { fontSize: 13, color: '#444' },
});