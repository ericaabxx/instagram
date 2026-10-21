
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Lista from "./src/Lista/index"

function App() {

 const feed = [
  {
    id: "1",
    usuario: "mariana",
    fotoPerfil: "https://i.pravatar.cc/150?img=47",
    imagem: "https://picsum.photos/id/1011/400/400",
    descricao: "Curtindo a natureza 🌿",
    curtidas: 125,
  },
  {
    id: "2",
    usuario: "pedro.dev",
    fotoPerfil: "https://i.pravatar.cc/150?img=12",
    imagem: "https://picsum.photos/id/1/400/400",
    descricao: "Estudando React Native 💻",
    curtidas: 89,
  },
  {
    id: "3",
    usuario: "carol",
    fotoPerfil: "https://i.pravatar.cc/150?img=44",
    imagem: "https://picsum.photos/id/1025/400/400",
    descricao: "Meu companheiro de aventuras 🐶",
    curtidas: 230,
  },
];

  return (
    <View style={styles.container} >

    <View style={styles.header} >
      <TouchableOpacity >
      <Image
      style={styles.logo} 
      source={{uri: 'https://e7.pngegg.com/pngimages/125/308/png-clipart-logo-brand-instagram-social-media-graphy-instagram-text-photography.png'}}/>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image
      style={styles.send} 
      source={{uri: 'https://www.clipartmax.com/png/middle/318-3188512_icicle-clip-art.png'}}/>
    </TouchableOpacity>
    </View>

    <FlatList 
    showsHorizontalScrollIndicator={false}
    data={feed}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <Lista dados={item} />
    )}    
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,

    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1
  },
  logo: {
    width: 100
  },
  send: {
    width: 21,
    height: 21
  }

});

export default App;
