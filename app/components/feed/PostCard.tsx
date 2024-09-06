import { View, Text, Image } from 'react-native'
import React from 'react'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'

interface User {
  id: string
  avatar_url: string
  image_url: string
  username: string
}
interface PostCardProps {
  id: string
  image_url: string
  caption: string
  user: User
}
const PostCard: React.FC<PostCardProps> = ({
  id, image_url, caption, user
}) => {
  return (
    <View className='bg-white'>
      {/* User Data */}
      <View className='p-3 flex-row items-center gap-2'>
        <Image source={{ uri: user.image_url }} className='w-12 aspect-square rounded-full' />
        <Text className='font-medium text-neutral-600 '>{user.username}</Text>
      </View>

      {/* Post content */}
      <Image source={{ uri: image_url }} className='w-full aspect-[1/1]' />

      {/* User Interaction */}
      <View className='flex-row items-center gap-3 p-3 '>
        <AntDesign name='hearto' size={20} />
        <Ionicons name='chatbubble-outline' size={20} />
        <Feather name='send' size={20} />

        <Feather name='bookmark' size={20}  className='mr-auto '/> 
      </View>
    </View>
  )
}

export default PostCard
