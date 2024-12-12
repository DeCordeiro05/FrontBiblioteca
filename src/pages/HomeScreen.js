import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { getLivros } from "./services/api";
import { Button, ScrollView, View, Text } from "react-native-web";

export default function HomeScreen() {
    const [livros, setLivros] = useState([]);
    
    const get = async () => {
        const livro = await getLivros();
        console.log(livro)
        setLivros(livro)
    } 
    useEffect(() => {
        get()
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
            >
            {
                    livros.map((item) => (
                        <View style={styles.card} key={item.id} >
                            <Text style={styles.title}>{item.titulo}</Text>
                            <Text style={styles.text}>Autor: {item.autor}</Text>
                            <Text style={styles.text}>Ano: {item.ano}</Text>
                            <Text style={styles.text}>Quantidade: {item.quantidade}</Text>
                            <Button title="Emprestar" onPress={() => console.log('Emprestar livro')} />
                        </View>
                    ))
                }
            </ScrollView>
          </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',  
        alignItems: 'center',      
      },
      card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: 20,
      },
      cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      cardAuthor: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
      },
      cardYear: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
      },
      cardQuantity: {
        fontSize: 16,
        marginBottom: 15,
        color: '#555',
      },
      button: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
  });
  