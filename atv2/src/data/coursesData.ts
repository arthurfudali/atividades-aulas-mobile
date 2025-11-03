import { Course, Lesson } from "@/types/course";

// Cursos baseados nas funcionalidades do próprio Projeto
// Emojis https://emojipedia.org/ ou https://getemoji.com/
export const COURSES: Course[] = [
  {
    id: "1",
    title: "Onboarding e Navegação",
    description: "Crie telas de boas-vindas e navegação com Expo Router",
    icon: "🚀",
    color: "#9C27B0",
    totalLessons: 4,
  },
  {
    id: "2",
    title: "Componentes Personalizados",
    description: "Desenvolva componentes reutilizáveis Button e Card",
    icon: "🎨",
    color: "#FF5722",
    totalLessons: 3,
  },
  {
    id: "3",
    title: "Perfil e AsyncStorage",
    description: "Implemente sistema de perfil com armazenamento local",
    icon: "👤",
    color: "#4CAF50",
    totalLessons: 5,
  },
  {
    id: "4",
    title: "Sistema de Cursos",
    description: "Construa lista de cursos, lições e questões",
    icon: "📚",
    color: "#2196F3",
    totalLessons: 4,
  },
];

export const LESSONS: Lesson[] = [
  // CURSO 1: Onboarding e Navegação
  {
    id: "1-1",
    courseId: "1",
    title: "Configuração do Expo Router",
    description: "Configure navegação baseada em arquivos",
    order: 1,
    questions: [
      {
        id: "1-1-1",
        question:
          "O Expo Router é uma biblioteca de navegação que usa a estrutura de pastas para criar rotas automaticamente. Para criar uma navegação em pilha (stack), precisamos importar o componente correto. Qual componente devemos importar?",
        code: `import { [BLANK] } from 'expo-router';

export default function App() {
  return <Stack />;
}`,
        options: ["Stack", "Router", "Screen", "Navigator"],
        correctAnswer: 0,
      },
      {
        id: "1-1-2",
        question:
          "No React Native com Expo Router, para navegar entre telas usamos o objeto 'router'. Quando queremos adicionar uma nova tela na pilha de navegação (permitindo voltar com o botão), qual método devemos usar?",
        code: `import { router } from 'expo-router';

const handlePress = () => {
  router.[BLANK]('/home');
};`,
        options: ["push", "redirect", "navigate", "go"],
        correctAnswer: 0,
      },
      {
        id: "1-1-3",
        question:
          "O Expo Router usa convenção de pastas para criar rotas. Para criar uma navegação por abas (tabs) na parte inferior da tela, usamos uma pasta especial. Qual o nome correto dessa pasta?",
        code: `// Estrutura de pastas para criar tabs:
app/
  [BLANK]/
    _layout.tsx
    index.tsx
    profile.tsx`,
        options: ["(tabs)", "{tabs}", "tabs", "[tabs]"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "1-2",
    courseId: "1",
    title: "Tela de Onboarding",
    description: "Crie uma tela de boas-vindas atrativa",
    order: 2,
    questions: [
      {
        id: "1-2-1",
        question:
          "No React Native, para exibir texto na tela precisamos usar um componente específico (diferente de HTML que usa tags como <p> ou <span>). Qual componente devemos importar do 'react-native' para mostrar texto?",
        code: `import { View, [BLANK] } from 'react-native';

export default function Onboarding() {
  return (
    <View>
      <Text>Bem-vindo ao Merge Skills!</Text>
    </View>
  );
}`,
        options: ["Paragraph", "Text", "Label", "Title"],
        correctAnswer: 1,
      },
      {
        id: "1-2-2",
        question:
          "Após o usuário ver a tela de boas-vindas, queremos levá-lo para a tela principal do app. Precisamos SUBSTITUIR a tela de onboarding (não permitir voltar), pois o onboarding só deve aparecer uma vez. Qual método usar?",
        code: `import { router } from 'expo-router';

const handleStart = () => {
  // Vai para tela de tabs e remove onboarding do histórico
  router.[BLANK]('/(tabs)');
};`,
        options: ["navigate", "replace", "redirect", "push"],
        correctAnswer: 1,
      },
      {
        id: "1-2-3",
        question:
          "Criamos um componente Button personalizado no projeto para reutilizar em várias telas. Para usar esse componente customizado (não o nativo), qual é a sintaxe correta em JSX?",
        code: `import Button from '@/components/Button';

export default function Onboarding() {
  return (
    <View>
      <Text>Bem-vindo!</Text>
      <[BLANK]
        title="Começar"
        onPress={handleStart}
      />
    </View>
  );
}`,
        options: ["Pressable", "Link", "Button", "TouchableOpacity"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "1-3",
    courseId: "1",
    title: "Rotas Dinâmicas",
    description: "Aprenda a criar rotas com parâmetros",
    order: 3,
    questions: [
      {
        id: "1-3-1",
        question:
          "Quando temos várias telas semelhantes (ex: detalhes de diferentes cursos), não criamos um arquivo para cada uma. Usamos rotas dinâmicas que recebem um parâmetro (ID). Como nomeamos o arquivo para criar a rota '/courses/123' onde 123 é variável?",
        code: `// Queremos criar rotas dinâmicas:
// /courses/1, /courses/2, /courses/3, etc.
app/
  courses/
    [BLANK].tsx`,
        options: ["[id]", ":id", "{id}", "<id>"],
        correctAnswer: 0,
      },
      {
        id: "1-3-2",
        question:
          "Quando o usuário acessa '/courses/123', precisamos capturar o valor '123' para buscar os dados corretos. O Expo Router oferece um Hook (função especial do React) para isso. Qual Hook devemos usar?",
        code: `import { [BLANK] } from 'expo-router';

export default function CourseDetail() {
  const { id } = useLocalSearchParams();
  // Agora 'id' contém o valor da URL (ex: "123")
  return <View><Text>Curso {id}</Text></View>;
}`,
        options: ["useRouter", "useRoute", "useParams", "useLocalSearchParams"],
        correctAnswer: 3,
      },
      {
        id: "1-3-3",
        question:
          "Para melhorar a experiência do usuário, queremos mudar o título que aparece no topo da tela (header) baseado no conteúdo exibido. Qual componente do Stack usamos dentro da tela para configurar o header?",
        code: `import { Stack } from 'expo-router';

export default function Screen() {
  return (
    <>
      <Stack.[BLANK] options={{ title: 'Detalhes do Curso' }} />
      <View>
        {/* Conteúdo da tela */}
      </View>
    </>
  );
}`,
        options: ["Header", "Navigator", "Title", "Screen"],
        correctAnswer: 3,
      },
    ],
  },
  {
    id: "1-4",
    courseId: "1",
    title: "Tab Navigation",
    description: "Configure navegação por abas",
    order: 4,
    questions: [
      {
        id: "1-4-1",
        question:
          "A navegação por abas (tabs) é comum em apps mobile, mostrando ícones na parte inferior da tela. No Expo Router, qual componente devemos importar para criar esse tipo de navegação no arquivo _layout.tsx?",
        code: `import { [BLANK] } from 'expo-router';

export default function TabLayout() {
  return <Tabs />;
}`,
        options: ["Tabs", "TabBar", "TabNavigator", "BottomTabs"],
        correctAnswer: 0,
      },
      {
        id: "1-4-2",
        question:
          "Para cada aba (tab) queremos mostrar um ícone que representa a funcionalidade (ex: casa para Home, pessoa para Perfil). Qual propriedade das options recebe uma função que retorna o componente de ícone?",
        code: `<Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    [BLANK]: ({ color }) => <Icon name="home" color={color} />,
  }}
/>`,
        options: ["iconComponent", "tabIcon", "tabBarIcon", "icon"],
        correctAnswer: 2,
      },
      {
        id: "1-4-3",
        question:
          "Para personalizar a aparência das tabs, podemos mudar cores, fontes e estilos. Quando queremos aplicar um estilo customizado à barra de tabs inteira (não apenas a uma aba), qual propriedade das options devemos usar no componente Tabs?",
        code: `<Tabs
  screenOptions={{
    [BLANK]: {
      backgroundColor: '#1a1a1a',
      borderTopWidth: 0,
      height: 60,
    },
  }}
>`,
        options: ["navigationStyle", "barStyle", "tabBarStyle", "tabStyle"],
        correctAnswer: 2,
      },
    ],
  },

  // CURSO 2: Componentes Personalizados
  {
    id: "2-1",
    courseId: "2",
    title: "Componente Button",
    description: "Crie um botão reutilizável",
    order: 1,
    questions: [
      {
        id: "2-1-1",
        question:
          "Ao criar um componente Button reutilizável, precisamos definir quais propriedades ele aceita. Uma das props mais importantes é 'onPress' - a função que será executada ao clicar. No TypeScript, como definimos o tipo de uma função que não recebe parâmetros e não retorna nada?",
        code: `interface ButtonProps {
  title: string;
  onPress: [BLANK];  // Tipo da função de callback
  disabled?: boolean;
}`,
        options: ["void", "Function", "function", "() => void"],
        correctAnswer: 3,
      },
      {
        id: "2-1-2",
        question:
          "Quando criamos um componente, recebemos as props como parâmetro. Para facilitar o uso, podemos 'desestruturar' o objeto de props, extraindo cada propriedade diretamente. Qual é a sintaxe correta para desestruturação com TypeScript?",
        code: `export default function Button([BLANK]) {
  // Agora podemos usar title e onPress diretamente
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}`,
        options: [
          "{ title, onPress }: ButtonProps",
          "(title, onPress)",
          "title, onPress",
          "props: ButtonProps",
        ],
        correctAnswer: 0,
      },
      {
        id: "2-1-3",
        question:
          "No React Native, TouchableOpacity é o componente usado para criar botões clicáveis. Quando o usuário pressiona o botão, queremos executar uma ação (função). Qual prop do TouchableOpacity recebe a função callback que será chamada ao tocar?",
        code: `<TouchableOpacity
  style={styles.button}
  [BLANK]={handlePress}  // Função executada ao clicar
>
  <Text style={styles.text}>{title}</Text>
</TouchableOpacity>`,
        options: ["onClick", "onTap", "onTouch", "onPress"],
        correctAnswer: 3,
      },
    ],
  },
  {
    id: "2-2",
    courseId: "2",
    title: "Componente Card",
    description: "Desenvolva um card flexível",
    order: 2,
    questions: [
      {
        id: "2-2-1",
        question:
          "O Card é um componente 'container' que pode receber outros componentes dentro dele (filhos/children). No React com TypeScript, qual é o tipo correto para representar 'qualquer conteúdo React válido' (texto, componentes, etc)?",
        code: `import { [BLANK] } from 'react';

interface CardProps {
  children: ReactNode;  // Aceita texto, componentes, arrays, etc
}`,
        options: ["Component", "ReactNode", "ReactElement", "React"],
        correctAnswer: 1,
      },
      {
        id: "2-2-2",
        question:
          "Nem todas as props precisam ser obrigatórias. Uma prop 'title' pode ser opcional - se fornecida, mostramos; se não, apenas renderizamos o children. No TypeScript, como tornamos uma propriedade opcional?",
        code: `interface CardProps {
  title[BLANK]: string;  // title é opcional
  children: ReactNode;   // children é obrigatório
}`,
        options: ["!", "|", ":", "?"],
        correctAnswer: 3,
      },
      {
        id: "2-2-3",
        question:
          "Queremos mostrar um título opcional no Card. Se a prop 'title' foi fornecida, renderizamos um componente Text com ela; se não foi fornecida, não mostramos nada. Qual é a forma correta de renderização condicional em JSX?",
        code: `export default function Card({ title, children }: CardProps) {
  return (
    <View style={styles.container}>
      [BLANK]
      {children}
    </View>
  );
}`,
        options: [
          "if (title) <Text>{title}</Text>",
          "<Text>{title || ''}</Text>",
          "{title && <Text>{title}</Text>}",
          "{title ? <Text>{title}</Text>}",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "2-3",
    courseId: "2",
    title: "Card Reutilizável Avançado",
    description: "Adicione slots e customização",
    order: 3,
    questions: [
      {
        id: "2-3-1",
        question:
          "Para tornar nosso Card mais visual e organizado, queremos aplicar estilos (cores, espaçamentos, bordas, etc). No React Native, usamos StyleSheet para criar estilos otimizados. Qual método do StyleSheet usamos para definir múltiplos estilos de uma vez?",
        code: `import { StyleSheet } from 'react-native';

const styles = StyleSheet.[BLANK]({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});`,
        options: ["style", "define", "make", "create"],
        correctAnswer: 3,
      },
      {
        id: "2-3-2",
        question:
          "No React Native, para criar layouts flexíveis usamos Flexbox. Quando queremos que os elementos filhos fiquem organizados em uma linha (horizontalmente), qual valor usamos na propriedade flexDirection?",
        code: `const styles = StyleSheet.create({
  container: {
    flexDirection: '[BLANK]',  // Organiza filhos horizontalmente
    alignItems: 'center',
    gap: 8,
  },
});`,
        options: ["row", "horizontal", "inline", "flex-row"],
        correctAnswer: 0,
      },
      {
        id: "2-3-3",
        question:
          "No React Native, quando queremos aplicar múltiplos estilos a um componente, podemos usar um array de estilos. Isso permite combinar estilos fixos com estilos dinâmicos ou condicionais. Qual é a sintaxe correta para aplicar múltiplos estilos?",
        code: `<View 
  style={[BLANK]}
>
  <Text>Conteúdo do Card</Text>
</View>`,
        options: [
          "[styles.container, styles.shadow]",
          "(styles.container, styles.shadow)",
          "styles.container + styles.shadow",
          "{styles.container, styles.shadow}",
        ],
        correctAnswer: 0,
      },
    ],
  },

  // CURSO 3: Perfil e AsyncStorage
  {
    id: "3-1",
    courseId: "3",
    title: "Interface de Perfil",
    description: "Defina tipos para dados do usuário",
    order: 1,
    questions: [
      {
        id: "3-1-1",
        question:
          "Antes de armazenar dados do perfil do usuário, precisamos definir sua estrutura (quais campos existem e seus tipos). No TypeScript, qual palavra-chave é mais adequada para definir a estrutura de um objeto de dados?",
        code: `// Definindo a estrutura dos dados de perfil
export [BLANK] Profile {
  name: string;      // Nome do usuário
  email: string;     // Email do usuário
  bio?: string;      // Biografia (opcional)
  avatar?: string;   // URL da foto (opcional)
}`,
        options: ["type", "const", "class", "interface"],
        correctAnswer: 3,
      },
      {
        id: "3-1-2",
        question:
          "Criamos a interface Profile em um arquivo separado ('@/types/profile'). Para usar esse tipo em outro arquivo, precisamos importá-lo. Qual a sintaxe correta de importação?",
        code: `import { [BLANK] } from '@/types/profile';

export default function ProfileScreen() {
  const [profile, setProfile] = useState<Profile>();
}`,
        options: ["Profile", "{ Profile }", "Profile as type", "type Profile"],
        correctAnswer: 0,
      },
      {
        id: "3-1-3",
        question:
          "Vamos usar useState para gerenciar os dados do perfil. Inicialmente não temos dados (usuário não está logado), mas depois teremos um objeto Profile. Como definir o tipo para aceitar 'Profile' ou 'undefined'?",
        code: `// Estado pode começar undefined e depois ter um Profile
const [profile, setProfile] = useState[BLANK];`,
        options: [
          "<Profile?>",
          "<Profile | undefined>",
          "<Profile>",
          "<Profile | null>",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "3-2",
    courseId: "3",
    title: "AsyncStorage - Salvamento",
    description: "Persista dados localmente",
    order: 2,
    questions: [
      {
        id: "3-2-1",
        question:
          "AsyncStorage é como um 'banco de dados simples' que salva informações no dispositivo do usuário (não na nuvem). Os dados persistem mesmo se o app for fechado. Para usar AsyncStorage no React Native, precisamos instalá-lo. Qual é o pacote oficial da comunidade?",
        code: `import AsyncStorage from '[BLANK]';

const saveProfile = async (profile: Profile) => {
  await AsyncStorage.setItem('profile', JSON.stringify(profile));
};`,
        options: [
          "@expo/async-storage",
          "@react-native-async-storage/async-storage",
          "react-native-async-storage",
          "async-storage",
        ],
        correctAnswer: 1,
      },
      {
        id: "3-2-2",
        question:
          "O AsyncStorage funciona como chave-valor (similar a um dicionário). Para SALVAR dados, usamos um método que recebe uma chave (identificador) e o valor. Qual é o método correto?",
        code: `const saveProfile = async (profile: Profile) => {
  // Salvando com chave 'profile' e o valor do objeto
  await AsyncStorage.[BLANK]('profile', JSON.stringify(profile));
};`,
        options: ["setItem", "put", "save", "store"],
        correctAnswer: 0,
      },
      {
        id: "3-2-3",
        question:
          "O AsyncStorage só aceita STRINGS (texto) como valores. Mas nosso perfil é um OBJETO JavaScript. Precisamos converter o objeto em texto antes de salvar. Qual função JavaScript faz essa conversão?",
        code: `await AsyncStorage.setItem(
  'profile',
  [BLANK](profile)  // Converte objeto para string JSON
);`,
        options: ["serialize", "toString", "JSON.stringify", "JSON.parse"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "3-3",
    courseId: "3",
    title: "AsyncStorage - Leitura",
    description: "Recupere dados armazenados",
    order: 3,
    questions: [
      {
        id: "3-3-1",
        question:
          "Agora precisamos LER os dados que foram salvos anteriormente. Quando o usuário abre o app, buscamos o perfil dele no AsyncStorage usando a mesma chave ('profile') usada para salvar. Qual método usamos para recuperar dados?",
        code: `const loadProfile = async () => {
  // Busca dados pela chave 'profile'
  const data = await AsyncStorage.[BLANK]('profile');
  if (data) {
    setProfile(JSON.parse(data));
  }
};`,
        options: ["getItem", "read", "get", "load"],
        correctAnswer: 0,
      },
      {
        id: "3-3-2",
        question:
          "O AsyncStorage retorna os dados como STRING (texto). Mas precisamos de um OBJETO JavaScript para usar no app. Qual função converte a string JSON de volta para objeto?",
        code: `const data = await AsyncStorage.getItem('profile');
if (data) {
  // Converte string JSON para objeto JavaScript
  const profile = [BLANK](data);
  setProfile(profile);
}`,
        options: ["fromJSON", "JSON.stringify", "JSON.parse", "parse"],
        correctAnswer: 2,
      },
      {
        id: "3-3-3",
        question:
          "Queremos carregar o perfil do usuário AUTOMATICAMENTE quando a tela for aberta, não esperar o usuário clicar em algo. Qual Hook do React executa código quando o componente é montado (aparece na tela)?",
        code: `// Dentro do componente ProfileScreen
[BLANK](() => {
  loadProfile();  // Carrega dados ao abrir a tela
}, []);  // Array vazio = executa apenas uma vez`,
        options: ["useEffect", "useMount", "useCallback", "useMemo"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "3-4",
    courseId: "3",
    title: "Edição de Perfil",
    description: "Implemente formulário de edição",
    order: 4,
    questions: [
      {
        id: "3-4-1",
        question:
          "Para criar formulários no React Native, usamos o componente TextInput. Um input 'controlado' significa que o React controla seu valor via estado (useState). Qual prop do TextInput define o texto exibido nele?",
        code: `// Input controlado: valor vem do estado 'name'
<TextInput
  [BLANK]={name}          // Mostra o valor atual
  onChangeText={setName}  // Atualiza quando usuário digita
  placeholder="Nome"
/>`,
        options: ["content", "text", "input", "value"],
        correctAnswer: 3,
      },
      {
        id: "3-4-2",
        question:
          "Para facilitar a digitação do e-mail (mostrando teclas como @ e .), queremos abrir o teclado adequado no TextInput. Qual prop define o tipo de teclado?",
        code: `<TextInput
  value={email}
  onChangeText={setEmail}
  [BLANK]="email-address"  // Teclado otimizado para e-mail
  placeholder="Seu e-mail"
/>`,
        options: ["textType", "inputType", "keyboardType", "type"],
        correctAnswer: 2,
      },
      {
        id: "3-4-3",
        question:
          "Após o usuário editar o perfil e clicar em 'Salvar', queremos: 1) Salvar no AsyncStorage, 2) Voltar para a tela anterior. O router do Expo oferece um método para voltar. Qual é?",
        code: `const handleSave = async () => {
  await saveProfile({ name, email, bio });  // Salva dados
  router.[BLANK]();  // Volta para tela anterior
};`,
        options: ["goBack", "back", "pop", "return"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "3-5",
    courseId: "3",
    title: "Service de Armazenamento",
    description: "Organize lógica de persistência",
    order: 5,
    questions: [
      {
        id: "3-5-1",
        question:
          "Para organizar melhor o código, criamos 'services' (serviços) - arquivos que agrupam funções relacionadas. O service de profile terá funções de salvar, carregar e deletar. Como tornamos essas funções acessíveis em outros arquivos?",
        code: `const PROFILE_KEY = '@merge_skills:profile';

// Tornando a função disponível para import em outros arquivos
[BLANK] const saveProfile = async (profile: Profile) => {
  await AsyncStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
};`,
        options: ["export", "async", "function", "const"],
        correctAnswer: 0,
      },
      {
        id: "3-5-2",
        question:
          "Às vezes precisamos DELETAR os dados salvos (ex: usuário fez logout). O AsyncStorage tem um método específico para remover um item pela chave. Qual é o método correto?",
        code: `export const deleteProfile = async () => {
  // Remove dados da chave '@merge_skills:profile'
  await AsyncStorage.[BLANK](PROFILE_KEY);
};`,
        options: ["removeItem", "remove", "delete", "clear"],
        correctAnswer: 0,
      },
      {
        id: "3-5-3",
        question:
          "Criamos o service em '@/services/profileStorage.ts' (o @ é um alias para a pasta src). Para usar as funções exportadas (saveProfile, loadProfile) em outro arquivo, qual o caminho correto de importação?",
        code: `// Importando múltiplas funções do service
import { saveProfile, loadProfile } from '[BLANK]';

export default function EditProfile() {
  // Agora podemos usar saveProfile() e loadProfile()
}`,
        options: [
          "@/storage/profile",
          "@/utils/storage",
          "@/profile/service",
          "@/services/profileStorage",
        ],
        correctAnswer: 3,
      },
    ],
  },

  // CURSO 4: Sistema de Cursos
  {
    id: "4-1",
    courseId: "4",
    title: "Tipos de Cursos e Lições",
    description: "Defina estrutura de dados",
    order: 1,
    questions: [
      {
        id: "4-1-1",
        question:
          "Para tornar os cards de cursos mais visuais e fáceis de identificar, queremos adicionar um emoji para cada curso (🚀, 🎨, 👤, etc). No TypeScript, qual tipo de dado usamos para armazenar um emoji ou qualquer texto?",
        code: `export interface Course {
  id: string;
  title: string;
  description: string;
  icon: [BLANK];          // Emoji do curso (ex: "🚀")
  color: string;
  totalLessons: number;
}`,
        options: ["emoji", "char", "string", "text"],
        correctAnswer: 2,
      },
      {
        id: "4-1-2",
        question:
          "Queremos armazenar uma LISTA de questões em cada lição. No TypeScript, para definir um array (lista) de objetos do tipo 'Question', adicionamos colchetes após o tipo. Qual é a sintaxe correta?",
        code: `export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  questions: [BLANK];  // Array de questões
}`,
        options: ["Question<>", "Array<Question>", "Question[]", "[Question]"],
        correctAnswer: 2,
      },
      {
        id: "4-1-3",
        question:
          "Cada questão tem 4 opções de resposta (índices 0, 1, 2, 3). Precisamos salvar qual é a correta. Como o índice é um número (ex: 0 para primeira opção), qual tipo usar para 'correctAnswer'?",
        code: `export interface Question {
  id: string;
  question: string;
  code: string;
  options: string[];      // ["opção A", "opção B", ...]
  correctAnswer: [BLANK]; // Índice da resposta (0, 1, 2 ou 3)
}`,
        options: ["string", "number", "index", "boolean"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "4-2",
    courseId: "4",
    title: "FlatList de Cursos",
    description: "Renderize lista otimizada",
    order: 2,
    questions: [
      {
        id: "4-2-1",
        question:
          "Para exibir uma lista de cursos na tela, precisamos de um componente otimizado que só renderiza itens visíveis (economiza memória). O React Native oferece um componente perfeito para listas grandes. Qual é?",
        code: `import { [BLANK] } from 'react-native';

export default function Home() {
  return (
    <FlatList
      data={COURSES}         // Array de dados
      renderItem={renderCourse}  // Função que renderiza cada item
    />
  );
}`,
        options: ["ScrollView", "FlatList", "ListView", "List"],
        correctAnswer: 1,
      },
      {
        id: "4-2-2",
        question:
          "A FlatList chama a função 'renderItem' para cada curso. Essa função recebe um objeto com informações do item. A propriedade principal que contém o curso atual se chama 'item'. Como extraímos ela via desestruturação?",
        code: `const renderCourse = ({ [BLANK] }: { item: Course }) => (
  <TouchableOpacity onPress={() => handlePress(item)}>
    <Card>{item.title}</Card>
  </TouchableOpacity>
);`,
        options: ["element", "item", "course", "data"],
        correctAnswer: 1,
      },
      {
        id: "4-2-3",
        question:
          "Para otimizar a performance, o React precisa identificar unicamente cada item da lista (para saber o que mudou). A FlatList tem uma prop que recebe uma função que retorna uma chave única para cada item. Qual é essa prop?",
        code: `<FlatList
  data={COURSES}
  renderItem={renderCourse}
  [BLANK]={(item) => item.id}  // Retorna ID único do curso
/>`,
        options: ["getKey", "keyExtractor", "key", "itemKey"],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "4-3",
    courseId: "4",
    title: "Filtrar Lições por Curso",
    description: "Use filter e find",
    order: 3,
    questions: [
      {
        id: "4-3-1",
        question:
          "Quando o usuário clica em um curso, navegamos para '/courses/123'. Precisamos buscar esse curso específico no array COURSES. Arrays têm um método que retorna o PRIMEIRO elemento que atende à condição. Qual método usar?",
        code: `const { id } = useLocalSearchParams();  // id = "123"
// Busca o curso com id = "123"
const course = COURSES.[BLANK](c => c.id === id);`,
        options: ["get", "find", "search", "filter"],
        correctAnswer: 1,
      },
      {
        id: "4-3-2",
        question:
          "Agora precisamos buscar TODAS as lições que pertencem ao curso (não apenas uma). Queremos um array com todas as lições onde 'courseId' é igual ao 'id' do curso. Qual método retorna array com TODOS os elementos que atendem à condição?",
        code: `// Busca todas as lições do curso e ordena
const courseLessons = LESSONS
  .[BLANK](l => l.courseId === id)  // Retorna array de lições
  .sort((a, b) => a.order - b.order);`,
        options: ["where", "find", "select", "filter"],
        correctAnswer: 3,
      },
      {
        id: "4-3-3",
        question:
          "As lições têm um campo 'order' (1, 2, 3...) para definir a sequência. Precisamos ordenar o array pela ordem correta. Arrays têm um método que ordena baseado em uma função de comparação. Qual é?",
        code: `const courseLessons = LESSONS
  .filter(l => l.courseId === id)
  .[BLANK]((a, b) => a.order - b.order);  // Ordena crescente por 'order'`,
        options: ["sort", "orderBy", "order", "sortBy"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "4-4",
    courseId: "4",
    title: "Execução de Questões",
    description: "Implemente lógica de perguntas",
    order: 4,
    questions: [
      {
        id: "4-4-1",
        question:
          "Uma lição tem várias questões que o usuário responde uma por vez. Precisamos rastrear qual questão está sendo exibida no momento (índice 0, 1, 2...). Qual Hook do React gerencia valores que mudam ao longo do tempo?",
        code: `// Começa na questão 0 (primeira)
const [currentQuestionIndex, setCurrentQuestionIndex] = [BLANK](0);`,
        options: ["createState", "state", "useRef", "useState"],
        correctAnswer: 3,
      },
      {
        id: "4-4-2",
        question:
          "Quando o usuário clica em 'Verificar Resposta', comparamos a opção selecionada com a resposta correta. A questão tem uma propriedade que guarda o índice da resposta certa. Qual é o nome dessa propriedade?",
        code: `const handleCheckAnswer = () => {
  // Compara opção selecionada com a correta
  const correct = selectedOption === currentQuestion.[BLANK];
  setIsCorrect(correct);
};`,
        options: ["solution", "correctAnswer", "correct", "answer"],
        correctAnswer: 1,
      },
      {
        id: "4-4-3",
        question:
          "O código das questões tem lacunas marcadas com '[BLANK]' (ex: 'const x = [BLANK];'). Para mostrar isso visualmente, dividimos a string em partes sempre que encontramos '[BLANK]'. Qual método de string faz essa divisão?",
        code: `// Divide "const x = [BLANK];" em ["const x = ", ";"]
currentQuestion.code.[BLANK]('[BLANK]').map((part, index) => (
  <Text key={index}>{part}</Text>
))`,
        options: ["split", "separate", "divide", "cut"],
        correctAnswer: 0,
      },
    ],
  },
];
