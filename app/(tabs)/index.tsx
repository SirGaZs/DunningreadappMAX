import React, { useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  imageContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
    position: 'relative', // Add position relative to position the checkbox
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  aboutContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  aboutText: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default function Index(): JSX.Element {
  const [animalsChecked, setAnimalsChecked] = useState<boolean>(false);
  const [bugsChecked, setBugsChecked] = useState<boolean>(false);
  const [plantsChecked, setPlantsChecked] = useState<boolean>(false);
  const [birdsChecked, setBirdsChecked] = useState<boolean>(false);

  const toggleCheck = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter(prevState => !prevState);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.content}>
        <Text style={styles.heading}>Welcome to Dunning Read Area App!</Text>

        {/* Animals */}
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => toggleCheck(setAnimalsChecked)}
        >
          <ImageBackground
            source={require('../../assets/animals.jpg')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            {animalsChecked && (
              <View style={styles.textContainer}>
                <Text style={styles.text}>✔ Animals</Text>
              </View>
            )}
          </ImageBackground>
        </TouchableOpacity>

        {/* Bugs */}
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => toggleCheck(setBugsChecked)}
        >
          <ImageBackground
            source={require('../../assets/bugs.jpg')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            {bugsChecked && (
              <View style={styles.textContainer}>
                <Text style={styles.text}>✔ Bugs</Text>
              </View>
            )}
          </ImageBackground>
        </TouchableOpacity>

        {/* Plants */}
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => toggleCheck(setPlantsChecked)}
        >
          <ImageBackground
            source={require('../../assets/plants.jpg')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            {plantsChecked && (
              <View style={styles.textContainer}>
                <Text style={styles.text}>✔ Native Plants</Text>
              </View>
            )}
          </ImageBackground>
        </TouchableOpacity>

        {/* Birds */}
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => toggleCheck(setBirdsChecked)}
        >
          <ImageBackground
            source={require('../../assets/birds.jpg')}
            style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}
          >
            {birdsChecked && (
              <View style={styles.textContainer}>
                <Text style={styles.text}>✔ Birds</Text>
              </View>
            )}
          </ImageBackground>
        </TouchableOpacity>

        {/* About Us */}
        <View style={styles.aboutContainer}>
          <Text style={styles.heading}>About Dunning Read Natural Area</Text>
          <Text style={styles.aboutText}>
          The Dunning Read Natural Area,
 also known as Park 601, is an approximately 21-acre area in the Dunning neighborhood of northwest Chicago. Comprising prairies, wetlands, and woodlands, the park has approximately 0.8 miles of trails and is under active restoration by the Chicago Park District. Much of that work focuses on removing invasive teasel, buckthorn, phragmites, and wild parsnip.
The site offers a unique oasis in the midst of the city, with open space and trails for public enjoyment. The woodlands and wetlands help control stormwater runoff, and provide critical habitat for native plants and animals. Hawks, coyote, red-winged blackbirds, chipmunks, killdeer, and other wildlife can be found in the park.
volunteers working
Aerial shot of the area.
            {'\n\n'}
            The area was originally inhabited by Indigenous peoples, including the Chippewa and Potawatomi. After the Black Hawk War of 1832, a man named Peter Ludby acquired the land. Just over a decade later, he sold the land to Cook County. For many years, the county used the site to operate a psychiatric hospital, which was known as the Dunning Asylum, and as a poorhouse. In 1970, the Chicago-Read Mental Health Center was built.
            {'\n\n'}
            Today, the surrounding area is heavily developed, and the open space that remains exists because of a passionate group of community members. In 2005, a coalition of open space advocates – including local residents, and neighborhood groups such as the Austin-Irving Community Council, Northwest Concerned Citizens, and Friends of the Parks – successfully campaigned for the state to officially designate the site as a conservation area. This designation protected the woodlands and wetlands as habitat and for public use.
            {'\n\n'}
            Beginning in 2007, Friends of the Parks and a dedicated group of volunteers from the local community began working to restore the area by removing invasive trees and brush, picking up litter, and planting oak trees and native prairie plants. In 2009, they created a walking trail and “council rings” or sitting circles. In 2019, a steel sculpture called “Nesewin” was installed at the trailhead.
            {'\n\n'}
            The Dunning Read Natural Area is the oasis it is today because of their efforts and the work of countless others, including but not limited to students and staff from Wright College, staff from the Chicago Read Mental Health Center, students from After School Matters, and members of the American Indian Center.
            {'\n\n'}
            In 2021, a state bill backed by local lawmakers passed, and transferred the land to the Chicago Park District. The Park District now manages the site as a natural area, according to a 2014 plan that was drafted by Friends of the Parks. The Dunning Read Natural Area Park Advisory Council formed in 2022.
            {'\n\n'}
            Please join us in continuing a long legacy of community involvement and advocacy for the protection and restoration of this incredible natural area.
            {'\n\n'}
            © Dunning Read Natural Area PAC
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}