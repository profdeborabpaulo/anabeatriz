//Importando os componentes do react native
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { useState} from 'react';

export default function HomeScreen(){
  const[tarefa, setTarefa]=useState('');
  const[tarefas, setTarefas]=useState([
    'Estudar react native',
    'Aprender useState',
    'Criar a primeira tela',
  ]);

//Criar a função de chamada adicionarTarefa

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Tarefas</Text>

      <TextInput 
      placeholder='Digite uma tarefa:'
      />
    </View>
  );
}

//Criando o estilo para o index.tsx
const styles=StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,

  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },

});