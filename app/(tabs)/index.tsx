import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { posts } from '~/assets/data/posts'
import PostCard from '../components/feed/PostCard'

const Home = () => {

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id} 
      renderItem={({ item }) => (
        <View style={{ marginBottom: 16 }}>  
          <PostCard
            id={item.id}
            caption={item.caption}
            user={item.user}
            image_url={item.image_url}
          />
        </View>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap :5, padding : 2 }}  
    />
  )
}

export default Home

const styles = StyleSheet.create({
  // Add any custom styles if needed
})
