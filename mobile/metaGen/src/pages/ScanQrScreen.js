import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { Ionicons } from '@expo/vector-icons';

const ScanQrScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [faces, setFaces] = useState([])
  const [flash, setFlash] = useState(false)
  const [flashIcon, setFlashIcon] = useState("md-flash-off")

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

  const handleFlashMode = async () => {
    setFlash(
      flash === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.torch
        : Camera.Constants.FlashMode.off
    )
  }

  const handleReturnCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
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
        >

          <TouchableOpacity
            style={{
              width: 50,
              marginTop: 10,
              marginLeft: 10
            }}>
            <Ionicons name='ios-refresh-circle' size={50} onPress={() => handleReturnCamera()} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              marginLeft: 330,
              marginTop: 10
            }}
          >
            <Ionicons name={flashIcon} size={50} onPress={() => handleFlashMode()} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              position: "absolute",
              marginTop: 650,
              marginLeft: 175,
            }}>
            <Ionicons name="radio-button-on-outline" size={80} onPress={() => takePicture()} />
          </TouchableOpacity>

        </Camera>
      </View>
    </View>
  )
}

export default ScanQrScreen

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
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