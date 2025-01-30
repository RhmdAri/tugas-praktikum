import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { IconButton, ECommerceCard, PromoCard, eCommerceOptions, PromoOptions } from "../components/IconButton";

const { width, height } = Dimensions.get("window");

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.headerContainer}>
          <Image source={require("../../assets/imlek.jpeg")} style={styles.backgroundImage} />
          <LinearGradient colors={["transparent", "rgba(0,0,0,0.6)"]} style={styles.gradientOverlay} />
        </View>

        <View style={styles.profileCard}>  
          <Text style={styles.profileName}>Hi, Rahmad Ari Wijaya</Text>
          <Text style={styles.profileLevel}>Member Basic</Text>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>Rp 100.000.000,00</Text>
            <TouchableOpacity>
              <Feather name="eye" size={24} color="gray" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.favoritesContainer}> 
          <Text style={styles.Titlefav}>Favorit Anda</Text>
          <View style={styles.iconGrid}>
            {[
              { icon: "send" as keyof typeof Feather.glyphMap, label: "Transfer" },
              { icon: "gift" as keyof typeof Feather.glyphMap, label: "Bayar/VA" },
              { icon: "plus-circle" as keyof typeof Feather.glyphMap, label: "Top Up" },
              { icon: "credit-card" as keyof typeof Feather.glyphMap, label: "e-Money" },
              { icon: "at-sign" as keyof typeof Feather.glyphMap, label: "Setor Tarik" },
              { icon: "zap" as keyof typeof Feather.glyphMap, label: "Quick Pick" },
              { icon: "heart" as keyof typeof Feather.glyphMap, label: "Me’ Care" },
              { icon: "percent" as keyof typeof Feather.glyphMap, label: "KPR" },
              { icon: "settings" as keyof typeof Feather.glyphMap, label: "Auto" },
              { icon: "file-text" as keyof typeof Feather.glyphMap, label: "Bayar/VA" },
            ].map((item, index) => (
              <IconButton key={index} icon={item.icon} label={item.label} index={index} />
            ))}
          </View>
        </View>

        {/* Checkout Belanjaan */}
        <View style={styles.newContent}>
          <Text style={styles.sectionTitle}>Checkout Belanjaan 🛍️ & Tiket ✈️</Text>
          <View style={styles.eCommerceContainer}>
            {eCommerceOptions.map((item: any, index: number) => (
              <ECommerceCard key={index} item={item} />
            ))}
          </View>
        </View>

        {/* Livin' Banyak Bisanya */}
        <View style={styles.newContent}>
          <Text style={styles.sectionTitle}>Disini' Banyak Bisanya, Udah Coba?</Text>
          <View style={styles.eCommerceContainer}>
            {PromoOptions.map((item: any, index: number) => (
              <PromoCard key={index} item={item} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#F8F9FB" 
  },

  contentWrapper: { 
    paddingBottom: 100 
  },

  headerContainer: { 
    position: "relative", 
    alignItems: "center" 
  },

  backgroundImage: { 
    width, 
    height: 250, 
    resizeMode: "cover" 
  },
  
  gradientOverlay: { 
    position: "absolute", 
    width, 
    height: 250 
  },

  profileCard: { 
    position: "absolute", 
    top: 195, 
    left: "5%", 
    width: "90%", 
    backgroundColor: "#fff", 
    padding: 15, 
    borderRadius: 15, 
    shadowColor: "#000", 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    alignItems: "center", 
    zIndex: 10, 
    elevation: 5
  },

  profileName: { 
    fontSize: 16, 
    fontWeight: "bold" 
  },

  profileLevel: { 
    color: "gray", 
    marginTop: 5 
  },

  balanceContainer: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", marginTop: 
    10 
  },

  balance: { 
    fontSize: 18, 
    fontWeight: "bold" 
  },

  favoritesContainer: { 
    position: "relative", 
    backgroundColor: "#fff", 
    padding: 15, 
    borderRadius: 25, 
    shadowColor: "#000", 
    shadowOpacity: 0.1, 
    shadowRadius: 10, 
    elevation: 3,
    height: "25%",
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 15 
  },

  Titlefav: { 
    fontSize: 18, 
    fontWeight: "bold", 
    top: 45
  },

  iconGrid: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between" 
  },

  newContent: { 
    backgroundColor: "#fff", 
    marginTop: 20, 
    padding: 15, 
    borderRadius: 10, 
    shadowColor: "#000", 
    shadowOpacity: 0.1, 
    shadowRadius: 5, 
    elevation: 2 
  },
  eCommerceContainer: { 
    flexDirection: "row", 
    justifyContent: "space-between" 
  },

  cardStyle: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginTop: "auto", 
    width: "100%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    width: "100%", 
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default HomeScreen;
