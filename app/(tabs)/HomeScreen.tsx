import { Text, View, StyleSheet, ScrollView } from 'react-native'

export default function HomeScreen() {
  return (
   <ScrollView contentContainerStyle={styles.container}>

    {/* header */}
    <View>
        <View>

        </View>
    </View>
   </ScrollView>
  )
}
const styles = StyleSheet.create({ 
    container: {    
        backgroundColor: '#F3F4F6',    
        flex: 1,    
        
    },
    area :{
        backgroundColor:'#F3F4F6',
    }
 })
