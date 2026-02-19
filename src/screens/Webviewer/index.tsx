import { RouteProp } from '@react-navigation/native';
import ProgressBar from '@src/components/ProgressBar';
import ToolBar from '@src/components/ToolBar';
import { useAtom } from 'jotai';
import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import { RootStacksParams, RootStacksProp } from '../Screens';
import { useCaches } from '@src/constants/store';

interface MyProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Webviewer'>;
}

const Webviewer: React.FC<MyProps> = props => {
  const { theme } = useCaches();
  const { navigation, route } = props;
  const { url, title } = route?.params || {};
  const webViewRef = useRef<WebView>(null);
  const [progress, setProgress] = useState(0);

  const handleMessage = useCallback((event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
    } catch {}
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#f1f2f3' }}>
      <ToolBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title={title || '详情'}
      />
      <View style={{ height: 1 }} />
      {progress > 0 && progress < 1 && (
        <ProgressBar progress={progress} color={theme} />
      )}
      <WebView
        ref={webViewRef}
        source={{ uri: url }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        onLoadStart={() => {}}
        onLoadEnd={() => {}}
        onLoadProgress={e => setProgress(e.nativeEvent.progress)}
        onMessage={handleMessage}
        onNavigationStateChange={navState => {
          // setCanGoBack(navState.canGoBack);
          // onNavigationStateChange?.(navState);
        }}
        allowsBackForwardNavigationGestures
        mixedContentMode="always"
        originWhitelist={['*']}
        style={{ flex: 1 }}
      />
      <View
        style={{
          height: useSafeAreaInsets().bottom,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Webviewer;
