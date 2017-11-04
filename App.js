import React from 'react';
import { StyleSheet, Text, View, WebView, TouchableOpacity, BackHandler } from 'react-native';

var WEBVIEW_REF = 'webview';
var self

export default class App extends React.Component {

  constructor(props) {
        super(props);
        self = this
    }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  componentDidMount() {
      BackHandler.addEventListener('backPress', () => {
        self.refs[WEBVIEW_REF].goBack();
        return true;
      })
  }

  render() {
    return (
        <WebView
          ref={WEBVIEW_REF}
          source={{uri: 'https://intranet.meta.gov.co'}}
          style={ { flex: 1 } }
          javaScriptEnabled={true}
          startInLoadingState={true}
          domStorageEnabled={true}
          style={{marginTop: 20}}
          mixedContentMode='always'
          allowsInlineMediaPlayback={true}
          mediaPlaybackRequiresUserAction={false}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        />
    );
  }
}
