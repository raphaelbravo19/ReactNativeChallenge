import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { CryptoApi } from "../api";
import CryptoCard, { Crypto } from "../components/common/CryptoCard";
import { Button } from "../components/ui";
import { GRAY_500 } from "../utils/colors";
import { formatNumber } from "../utils/functions";

export default function DetailScreen() {
  const [data, setData] = useState<Crypto | null>(null);
  const [error, setError] = useState<boolean>(false);
  const route = useRoute<any>();
  const navigation = useNavigation();

  const onWallet = () => {
    navigation.navigate("Wallet");
  };

  const fetchInfo = async () => {
    setError(false);
    try {
      const { id } = route.params;
      const res = await CryptoApi.GETBYID(id);
      if (res?.data) {
        setData(res?.data);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <View>
          <Text style={styles.errorMessage}>
            An unexpected error has ocurred
          </Text>
          <Button onPress={fetchInfo} style={styles.button}>
            Retry
          </Button>
        </View>
      ) : data ? (
        <View>
          <CryptoCard item={data} disabled>
            <View style={styles.firstRow}>
              <Text style={styles.detailName}>Supply</Text>
              <Text style={styles.detailValue}>
                {formatNumber(data.supply, 2)}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.detailName}>Max Supply</Text>
              <Text style={styles.detailValue}>
                {formatNumber(data.maxSupply || 0, 2)}
              </Text>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.detailName}>Market Cap</Text>
              <Text style={styles.detailValue}>
                $ {formatNumber(data.marketCapUsd, 2)}
              </Text>
              <Text style={styles.currency}>USD</Text>
            </View>
          </CryptoCard>
          <Button onPress={onWallet} style={styles.button}>
            My Wallet
          </Button>
        </View>
      ) : (
        <ActivityIndicator size={"large"} style={styles.loader} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  loader: {
    marginTop: 20,
  },
  firstRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginTop: 20,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  detailName: {
    fontWeight: "500",
    fontSize: 14,
    marginRight: 8,
  },
  detailValue: {
    fontWeight: "400",
    fontSize: 14,
  },
  currency: {
    fontWeight: "500",
    fontSize: 14,
    color: GRAY_500,
    marginLeft: 6,
  },
  errorMessage: {
    fontWeight: "500",
    fontSize: 16,
    color: GRAY_500,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
  },
});
