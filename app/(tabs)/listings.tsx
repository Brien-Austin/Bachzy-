import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { rooms } from '~/assets/data/rooms'
import RoomCard from '../components/listings/RoomCard'

const Listings = () => {
  return (
    <View>
      {/* Filters */}
      {/* Sort By Location */}
      {/* FlatList of Rooms */}
      <FlatList showsVerticalScrollIndicator={false} data={rooms} contentContainerStyle={{gap: 10,marginTop : 5,marginBottom : 20}} keyExtractor={(item)=>item.image_url} renderItem={({item})=>
        <RoomCard key={item.image_url} gender={item.gender} price={item.price} verified={item.verified} image_url={item.image_url} location={item.location} location_url={item.location_url}/>
    }/>
    </View>
  )
}

export default Listings

const styles = StyleSheet.create({})