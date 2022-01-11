import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { CryptoApi } from "../api";
import CryptoCard, { Crypto } from "../components/common/CryptoCard";
import { Button } from "../components/ui";
import { GRAY_500, WHITE } from "../utils/colors";

const limit = 10;
export default function ListScreen() {
  const [data, setData] = useState<Crypto[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const fetchData = async (start: boolean = false) => {
    setLoading(true);
    setError(false);
    var localOffset = offset;
    try {
      if (!start) {
        localOffset += limit;
        setOffset(localOffset);
      }
      var res = await CryptoApi.GET(limit, localOffset);
      if (res?.data) {
        setData(start ? res.data : [...data, ...res.data]);
      }
    } catch (error) {
      if (!start) {
        setOffset(localOffset - limit);
      } else setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  const onEndReached = () => {
    if (loading) return;
    fetchData();
  };

  useEffect(() => {
    fetchData(true);
  }, []);

  const renderItem = ({ item }: { item: Crypto }) => (
    <CryptoCard key={item.id} item={item} />
  );
  const renderError = () => {
    return (
      <View style={styles.scrollContainer}>
        <Text style={styles.errorMessage}>An unexpected error has ocurred</Text>
        <Button onPress={() => fetchData(true)} style={styles.button}>
          Retry
        </Button>
      </View>
    );
  };
  const isEmpty = data && data.length > 0;

  return (
    <View style={styles.container}>
      {error ? (
        renderError()
      ) : isEmpty ? (
        <FlatList
          style={styles.container}
          contentContainerStyle={styles.scrollContainer}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          initialNumToRender={limit}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
        />
      ) : (
        <ActivityIndicator size={"large"} style={styles.loader} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 30,
    paddingVertical: 24,
  },
  illustration: {
    width: 50,
    height: 50,
  },
  itemContainer: {
    display: "flex",
    backgroundColor: WHITE,
    marginVertical: 6,
    padding: 8,
  },
  loader: {
    marginTop: 20,
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
