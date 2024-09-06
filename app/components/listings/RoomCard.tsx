import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { formatIndianCurrency } from '~/app/utils/formatIndianCurrency';

export interface RoomCardProps {
  image_url: string;
  verified: boolean;
  location: string;
  price: number;
  gender: string;
  location_url: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  image_url,
  gender,
  verified,
  location,
  price,
  location_url,
}) => {
  return (
    <View className="bg-white p-3 rounded-lg shadow-md w-full">
      <View className="flex flex-row gap-4">
        {/* Room Image */}
        <Image source={{ uri: image_url }} className="w-36 h-36 rounded-lg" />
        
        {/* Room Details */}
        <View className="flex-1 justify-around ">
          {/* Price */}
          <View className="mb">
            <Text className="text-xl font-semibold">
              {formatIndianCurrency(price)}
            </Text>
          </View>

          {/* Location */}
          <LocationInfo location={location} location_url={location_url} />

          {/* Gender & Verified */}
          <View className="flex-row items-center justify-between mt-2">
            <GenderBadge gender={gender} />
            {verified && <VerifiedBadge />}
          </View>

          <TouchableOpacity className='flex justify-center items-center bg-[#7536e5] text-white font-medium mt-2 px-3 py-2 rounded'>
            <Text className='text-white'>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const LocationInfo: React.FC<{ location: string; location_url: string }> = ({
    location,
    location_url,
  }) => (
    <TouchableOpacity
      style={{ alignSelf: 'flex-start' }} 
      className="px-2 py-1 bg-[#f2eaff] rounded-lg flex flex-row items-center mt-1"
      onPress={() => {
   
      }}
    >
      <MaterialIcons name="location-on" color="#7536e5" size={18} />
      <Text className="ml-1 text-[#7536e5]">{location}</Text>
    </TouchableOpacity>
  );
  

const GenderBadge: React.FC<{ gender: string }> = ({ gender }) => {
  const genderColor = gender === 'male' ? '#4A90E2' : '#FF69B4';
  const genderIcon = gender === 'male' ? 'male' : 'female';
  return (
    <View className="flex flex-row items-center">
      <MaterialIcons name={genderIcon} size={18} color={genderColor} />
      <Text className="ml-1 capitalize">{gender=== 'male' ? "Men" : "Women"}</Text>
    </View>
  );
};

const VerifiedBadge: React.FC = () => (
  <View className="flex flex-row items-center bg-[#e0f7fa] px-2 py-1 rounded-lg">
    <AntDesign name="checkcircle" size={16} color="#00796b" />
    <Text className="ml-1 text-[#00796b] text-xs">Verified</Text>
  </View>
);

export default RoomCard;
