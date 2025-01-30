import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFD700", "#8A2BE2", "#20B2AA", "#DC143C", "#FF8C00", "#00CED1"];

interface IconButtonProps {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  index: number;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label, index }) => {
  return (
    <View style={{ alignItems: "center", width: "18%" }}>
      <TouchableOpacity style={{ backgroundColor: colors[index % colors.length], padding: 15, borderRadius: 50, top: 60 }}>
        <Feather name={icon} size={20} color="white" />
      </TouchableOpacity>
      <Text style={{ marginTop: 5, fontSize: 12, textAlign: "center", top: 55 }}>{label}</Text>
    </View>
  );
};

const eCommerceOptions = [
  { name: "Shopee", image: Image.resolveAssetSource(require("../../assets/shoope.png")), label: "Shopee" },
  { name: "Tokopedia", image: Image.resolveAssetSource(require("../../assets/tokopedia.jpg")), label: "Tokopedia" },
  { name: "Lazada", image: Image.resolveAssetSource(require("../../assets/lazada.png")), label: "Lazada VA" },
];


const PromoOptions = [
  { image: require("../../assets/samsung.jpg"), text: "Cashback s.d. Rp7,6 Jt. Pre-Order Samsung Galaxy S25 Series!", buttonLabel: "Beli Sekarang" },
  { image: require("../../assets/promo.jpg"), text: "Listrik Tetap Menyala! Nikmati Diskonnya Ayo Segera!!!", buttonLabel: "Cek Sekarang" },
];

const ECommerceCard: React.FC<{ item: { image: any; label: string } }> = ({ item }) => (
  <View style={{ backgroundColor: "#fff", borderRadius: 10, padding: 15, alignItems: "center", width: "30%" }}>
    <Image source={item.image} style={{ width: 50, height: 50, resizeMode: "contain" }} />
    <Text style={{ marginTop: 5, fontSize: 14 }}>{item.label}</Text>
    <TouchableOpacity style={{ backgroundColor: "#007BFF", padding: 8, borderRadius: 5, marginTop: 5 }}>
      <Text style={{ color: "white", fontSize: 12 }}>Bayar</Text>
    </TouchableOpacity>
  </View>
);

const PromoCard: React.FC<{ item: { image: any; text: string; buttonLabel: string } }> = ({ item }) => (
  <View style={{ width: "48%", borderRadius: 10, overflow: "hidden", backgroundColor: "#fff" }}>
    <Image source={item.image} style={{ width: "100%", height: 100, resizeMode: "cover" }} />
    <Text style={{ padding: 10, fontSize: 14 }}>{item.text}</Text>
    <TouchableOpacity style={{ backgroundColor: "#007BFF", padding: 10, borderRadius: 5, margin: 10 }}>
      <Text style={{ color: "white", textAlign: "center" }}>{item.buttonLabel}</Text>
    </TouchableOpacity>
  </View>
);

export { IconButton, ECommerceCard, PromoCard, eCommerceOptions, PromoOptions };
