import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const PortfolioScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F2F5FA", paddingBottom: 20 }}>
      <LinearGradient colors={["#007AFF", "#0051A3"]} style={{ padding: 40}}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: "#fff", top: 20 }}>Produk Anda</Text>
      </LinearGradient>

      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: "row", marginTop: -20, backgroundColor: "#fff", borderRadius: 12, padding: 8, elevation: 4, top: 10 }}>
          <TouchableOpacity style={{ flex: 1, alignItems: "center", paddingVertical: 12, backgroundColor: "#E7F1FF", borderRadius: 10 }}>
            <Text style={{ fontWeight: "bold", color: "#007AFF" }}>Rekening</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#A1A1A1" }}>Pinjaman</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: "center", paddingVertical: 12 }}>
            <Text style={{ color: "#A1A1A1" }}>Investasi</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Tabungan</Text>
          <View style={{ backgroundColor: "#fff", borderRadius: 12, padding: 16, marginTop: 8, elevation: 5, flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Tabungan Mikro IDR</Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", color: "#007AFF", marginTop: 5 }}>Rp 1.291.850³</Text>
            </View>
            <Image source={{ uri: "https://www.bni.co.id/Portals/1/BNI/Personal/Kartu%20Debit/Images/Mastercard-Silver.jpg" }} style={{ width: 100, height: 60, borderRadius: 10 }} />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>e-Wallet</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: "row", marginTop: 8 }}>
            {["DANA", "GoPay", "OVO", "ShopeePay", "LinkAja"].map((wallet, index) => (
              <View key={index} style={{ backgroundColor: "#fff", borderRadius: 12, padding: 16, marginRight: 10, elevation: 5, alignItems: "center" }}>
                <MaterialCommunityIcons name="wallet-outline" size={40} color="#007AFF" />
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>{wallet}</Text>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#007AFF", marginTop: 5 }}>Rp {Math.floor(Math.random() * 10000)}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Penawaran Menarik</Text>
          {["Dapatkan Bonus Tabungan Hingga Rp 1.000.000!", "Buka Deposito Sekarang & Raih Keuntungan Besar!", "Cashback 10% untuk Transaksi e-Wallet Pertama Anda!"].map((promo, index) => (
            <LinearGradient key={index} colors={["#4A90E2", "#0051A3"]} style={{ borderRadius: 12, padding: 16, marginTop: 8, elevation: 5 }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>{promo}</Text>
              <Text style={{ color: "#E0E0E0", marginTop: 5 }}>Jangan lewatkan kesempatan ini untuk mendapatkan berbagai keuntungan.</Text>
            </LinearGradient>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default PortfolioScreen;
