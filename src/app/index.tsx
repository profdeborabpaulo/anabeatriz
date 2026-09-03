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
 
  function adicionarTarefa() {
    if(!tarefa.trim())// impede tarefas em branco
    return;
    setTarefas([...tarefas, tarefa]);
    setTarefa('');
  }
 
  //Próxima etapa:
 
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciador de Tarefas</Text>
 
      <TextInput
      placeholder='Digite uma tarefa:'
      value={tarefa}
      onChangeText={setTarefa}
      />
 
      {tarefas.map((item, index)=>(
      <Text
      key={index}
    style={styles.item}
  >
    .{item}
    </Text>
  ))}
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
  item
 
});