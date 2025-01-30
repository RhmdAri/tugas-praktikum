import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const settingsMenu = [
  { title: "Nama Panggilan", icon: "account" },
  { title: "Email", icon: "email" },
  { title: "Bahasa", icon: "translate" },
  { title: "Data Anda", icon: "database" },
]; 

const securityMenu = [
  { title: "Biometrik untuk Login", icon: "fingerprint" },
  { title: "PIN", icon: "key-variant" },
  { title: "Password", icon: "lock" },
  { title: "Transaksi Tanpa PIN", icon: "credit-card" },
  { title: "Ubah No Handphone", icon: "cellphone" },
];

const infoMenu = [
  { title: "FAQ", icon: "help-circle" },
  { title: "Tentang", icon: "information" },
];

const SettingsScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F2F5FA", paddingBottom: 20 }}>
      <LinearGradient colors={["#007AFF", "#0051A3"]} style={{ padding: 40}}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff", top: 20 }}>Pengaturan</Text>
      </LinearGradient>

      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Akun</Text>
        {settingsMenu.map((item, index) => (
          <TouchableOpacity key={index} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 10, elevation: 3 }}>
            <MaterialCommunityIcons name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap} size={24} color="#007AFF" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </TouchableOpacity>
        ))}

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>Keamanan</Text>
        {securityMenu.map((item, index) => (
          <TouchableOpacity key={index} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 10, elevation: 3 }}>
            <MaterialCommunityIcons name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap} size={24} color="#007AFF" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </TouchableOpacity>
        ))}

        <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>Informasi</Text>
        {infoMenu.map((item, index) => (
          <TouchableOpacity key={index} style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#fff", padding: 12, borderRadius: 10, marginBottom: 10, elevation: 3 }}>
            <MaterialCommunityIcons name={item.icon as keyof typeof MaterialCommunityIcons.glyphMap} size={24} color="#007AFF" style={{ marginRight: 10 }} />
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;