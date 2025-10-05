import { Stack } from 'expo-router';
import React from 'react';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, 
      }}
    >
      <Stack.Screen name="UserProfile" options={{ title: 'Profile' }} />
      {/* <Stack.Screen name="Favorites" options={{ title: 'Favorites' }} /> */}
    </Stack>
  );
}
