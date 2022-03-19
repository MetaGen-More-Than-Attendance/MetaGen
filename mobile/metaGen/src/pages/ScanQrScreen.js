import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const ScanQrScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri);
    }
    console.log(image);
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'} />
      </View>
      <TouchableOpacity
        style={{
          height: 40,
          borderRadius: 10,
          marginBottom: 10
        }}>
        <Button
          title="Flip Camera"
          color='tomato'
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}>
        </Button>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 40,
          borderRadius: 10,
        }}>
        <Button title="Take Picture" color='tomato' style={styles.button} onPress={() => takePicture()} />

      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
    </View>
  )
}

export default ScanQrScreen

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
})