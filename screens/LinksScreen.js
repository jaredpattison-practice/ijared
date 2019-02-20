import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  View,
  TouchableOpacity
} from "react-native";
import { WebBrowser } from "expo";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Jared Links"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={this._handleLinkedinPress}
              style={styles.link}
            >
              <Text style={styles.linkText}>
                Jared's LinkedIn (with Linking from react-native)
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={this._handleLinkedinPress}
              style={styles.link}
            >
              <Text
                style={styles.linkText}
                onPress={() =>
                  Linking.openURL("https://www.linkedin.com/in/jaredpattison")
                }
              >
                Jared's LinkedIn (no handler, opacity doesn't work)
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity
              onPress={this._handleGitPress}
              style={styles.link}
            >
              <Text style={styles.linkText}>Jared's GitHub (with WebBrowser from expo)</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
  _handleGitPress = () => {
    WebBrowser.openBrowserAsync("https://github.com/jaredpattison");
  };
  _handleLinkedinPress = () => {
    Linking.openURL("https://www.linkedin.com/in/jaredpattison");
  };
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 20,
    backgroundColor: "#fff"
  },
  link: {
    color: "blue",
    paddingVertical: 20
  },
  linkText: {
    fontSize: 20,
    color: "#2e78b7"
  },
  linkContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 20
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  contentContainer: {
    paddingTop: 30,
    alignItems: "center"
  }
});
