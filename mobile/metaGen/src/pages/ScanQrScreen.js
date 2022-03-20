import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

const ScanQrScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [faces, setFaces] = useState([])
  const [flash, setFlash] = useState(false)

  const handleFacesDetected = ({ faces }) => {
    setFaces(faces);
  }

  //console.log(faces);
  //{faces.map(e => e.smilingProbability > 0.5 ? console.log("smiling"):console.log("not smiling"))}

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
          ratio={'1:1'}
          flashMode={flash}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.all,
            minDetectionInterval: 1000,
            tracking: false,
          }}
        />
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
      <Button title="Open Flash" color='tomato' style={styles.button} onPress={() => {
        setFlash(
          flash === Camera.Constants.FlashMode.off
            ? Camera.Constants.FlashMode.torch
            : Camera.Constants.FlashMode.off
        )
      }} />
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