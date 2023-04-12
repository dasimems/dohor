import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { bauhs93, lato } from '../../fonts'
import { logoImage } from '../../assets/images'

const Logo = ({image, imageSize, fontSize, style}) => {
  return (
    <View style={{
        alignItems: "center",
        ...style

    }}>

      {image? <>
        
        <Image source={logoImage} style={{
          width: imageSize? imageSize : 150,
          height: imageSize? imageSize: 150,
          resizeMode: "contain"
        }} />

      </> : 
      
        <>
          <Text style={{
            textAlign: "center",
            fontFamily: bauhs93,
            fontSize: fontSize? fontSize : 33
          }}>DOHOR</Text>
          <Text style={{
            fontSize: fontSize? (fontSize/2) : 16,
            textAlign: "center",
            fontFamily: lato.regular.italic
          }}>Driver</Text>
        
        </>
      
      }
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({})