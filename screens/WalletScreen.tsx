import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card, TabBar } from "../components/common";
import { Store } from "../context";
import { GRAY_500, TURQUOISE_700, WHITE } from "../utils/colors";

const FinishIllustration = require("../assets/finish-illustration.png");

interface AppItem {
  name: string;
  description: string;
  url: string;
}
const Tab = createBottomTabNavigator();

export default function WalletScreen() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Account" component={AccountSection} />
      <Tab.Screen name="Partners" component={PartnersSection} />
    </Tab.Navigator>
  );
}

function AccountSection() {
  const {
    state: { username = "" },
  } = useContext(Store);
  return (
    <View style={styles.container}>
      <Image style={styles.illustration} source={FinishIllustration} />
      <Text style={styles.title}>Hello, {username}</Text>
      <Text style={styles.subtitle}>
        Glad you are here. Hope to see you soon!
      </Text>
    </View>
  );
}

const partnerList: AppItem[] = [
  {
    name: "ePaisa",
    url: "https://www.epaisa.com/",
    description:
      "ePaisa is a Point of Sale app India-based developed with React Native. It allows you to manage inventory, generate orders and make payments. It integrates bluetooth modules for communication with card readers and thermal printers for vouchers",
  },
  {
    name: "Cirkula",
    url: "https://www.cirkulaapp.com/",
    description:
      "Cirkula is a food delivery app Peru-based developed with React Native. It allows users to buy quality food surpluses of establishments and restaurants. It also allows restaurants admins to manage published products and orders to be delivered",
  },
  {
    name: "Tenpo",
    url: "https://www.tenpo.cl/",
    description:
      "Tenpo is a fintech app Chile-based developed with React Native. It allows users to make payments, create transactions, manage wallets and reclaim cashback profit.",
  },
  {
    name: "Raven Health",
    url: "https://ravenhealth.com/",
    description:
      "Raven Health is a health-care app US-based developed with React Native. It allows users to schedule medical appointments for clinics, manage EHR medical records, pharmacy management, billing, patient encounters and engagement.",
  },
  {
    name: "GHX Mobile",
    url: "https://www.ghxseed.com/",
    description:
      "GHX Mobile is a digital agronomy app US-based developed with React Native. It allows farmers owners to offer their fields to seed investors. Also it helps them to have a real time control analysis of their fields with gameplans that reduce risks and manage seeds programs.",
  },
];
function PartnersSection() {
  const renderItem = ({ name, description, url }: AppItem) => {
    const onLinkUrl = () => {
      Linking.openURL(url);
    };
    return (
      <Card key={name} style={styles.cardContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.descriptionApp}>{description}</Text>
        <View style={styles.urlContainer}>
          <Text style={styles.urlKey}>URL: </Text>
          <Text onPress={onLinkUrl} style={styles.urlValue}>
            {url}
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partners</Text>
      <Text style={styles.description}>Some apps I was involved:</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {partnerList.map(renderItem)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 24,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 60,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginBottom: 24,
  },
  illustration: {
    width: 354,
    height: 139,
  },
  cardContainer: {
    marginBottom: 7,
    marginTop: 5,
    padding: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: TURQUOISE_700,
  },
  descriptionApp: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 12,
  },
  urlContainer: {
    flexDirection: "row",
    marginTop: 24,
  },
  urlKey: {
    fontSize: 16,
    fontWeight: "400",
  },
  urlValue: {
    fontSize: 16,
    fontWeight: "400",
    color: GRAY_500,
  },
  scrollContainer: {
    paddingHorizontal: 31,
    paddingBottom: 20,
  },
});
