import { useNavigation } from "@react-navigation/native";
import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import {
  GRAY_500,
  GREEN_100,
  GREEN_500,
  GREEN_800,
  RED_100,
  RED_500,
  RED_800,
  TURQUOISE_700,
  VBLACK,
  WHITE,
} from "../../utils/colors";
import { formatNumber } from "../../utils/functions";

export interface Crypto {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

interface CryptoCardProps {
  item: Crypto;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode | ReactNode[];
  disabled?: boolean;
}
export default function CryptoCard({
  item,
  style,
  children,
  disabled,
}: CryptoCardProps) {
  const navigation = useNavigation();

  const onItemPressed = () => {
    navigation.navigate("Detail", { id: item.id });
  };

  const renderPercent = () => {
    const percent = parseFloat(item.changePercent24Hr);
    const isUp = percent > 0;
    const percentValue = Math.abs(percent);
    const percentContainer = {
      backgroundColor: isUp ? GREEN_100 : RED_100,
    };
    const percentStyle = {
      color: isUp ? GREEN_800 : RED_800,
    };
    return (
      <View style={[styles.percentContainer, percentContainer]}>
        {/* <Ionicons
          name={isUp ? "arrow-up" : "arrow-down"}
          size={16}
          color={isUp ? GREEN_500 : RED_500}
        /> */}
        <Text style={[styles.percent, percentStyle]}>
          {formatNumber(percentValue, 1)}%
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableWithoutFeedback disabled={disabled} onPress={onItemPressed}>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.symbol}>{item.symbol} - </Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <Text style={styles.rank}>#{item.rank}</Text>
          </View>
          <View style={styles.valuesContainer}>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>
                $ {formatNumber(item.priceUsd, 2)}
              </Text>
              <Text style={styles.currency}>USD</Text>
            </View>
            {renderPercent()}
          </View>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    borderRadius: 8,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { height: 1, width: 0 },
    shadowColor: VBLACK,
    marginBottom: 20,
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 2,
  },
  nameContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  valuesContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 8,
  },
  amountContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-end",
  },
  symbol: {
    fontWeight: "700",
    fontSize: 16,
  },
  name: {
    fontWeight: "400",
    fontSize: 16,
  },
  rank: {
    fontWeight: "500",
    fontSize: 14,
    marginRight: 8,
    color: GRAY_500,
  },
  amount: {
    fontWeight: "600",
    fontSize: 24,
    color: TURQUOISE_700,
  },
  currency: {
    fontWeight: "500",
    fontSize: 14,
    color: GRAY_500,
    marginBottom: 2,
    marginLeft: 6,
  },
  percentContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: 4,
    paddingVertical: 4,
    paddingHorizontal: 9,
    borderRadius: 30,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { height: 1, width: 0 },
    shadowColor: VBLACK,
  },
  percent: {
    fontWeight: "500",
    fontSize: 14,
    marginLeft: 2,
  },
});
