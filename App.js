import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview-crosswalk';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          style={styles.container}
          localhost={false}
          source={{
            uri: 'https://www.google.com',
          }}
          onMessage={this.onMessage}
          onError={this.onError}
          onProgress={this.onProgress}
        />
      </View>
    );
  }

  onMessage(e) {
    console.log('Message:', e);
  }

  onError(err) {
    console.log('Error:', err);
  }

  onProgress(e) {
    console.log('Progress:', e);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
