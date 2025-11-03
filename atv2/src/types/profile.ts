/* Interface para estrutura básica de perfil do usuário */
export interface UserProfile {
  name: string;
  sobrenome: string;
  idade: string;
  instituicao?: string;
  curso?: string;
  github?: string;
  fileUri?: string;
}
