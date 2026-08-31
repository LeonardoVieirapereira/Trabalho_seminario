import java.util.ArrayList;
import java.util.List;

public class ManipulacaoListas {
    public static void main(String[] args) {
        System.out.println("=== SEMINARIO: STRINGS E LISTAS EM JAVA ===");

        // 1. Manipulação de Strings
        String texto = "Desenvolvimento de Sistemas";
        System.out.println("Texto Original: " + texto);

        // Caixa alta (equivalente ao .upper() do Python)
        System.out.println("Maiúsculas: " + texto.toUpperCase());

        // Caixa baixa (equivalente ao .lower() do Python)
        System.out.println("Minúsculas: " + texto.toLowerCase());

        // Substituição de texto (equivalente ao .replace() do Python)
        String textoAlterado = texto.replace("Sistemas", "Web");
        System.out.println("Substituição: " + textoAlterado);

        // Posição de caractere/palavra (equivalente ao .find() do Python)
        int posicao = texto.indexOf("Sistemas");
        System.out.println("Índice de 'Sistemas': " + posicao);

        System.out.println("\n-----------------------------------\n");

        // 2. Trabalhando com Listas Dinâmicas (ArrayList)
        List<Character> letrasAcertadas = new ArrayList<>();

        // Adicionando elementos (equivalente ao .append() do Python)
        letrasAcertadas.add('p');
        letrasAcertadas.add('y');
        letrasAcertadas.add('t');
        letrasAcertadas.add('h');
        letrasAcertadas.add('o');
        letrasAcertadas.add('n');

        System.out.println("Letras Adicionadas na Lista: " + letrasAcertadas);
        System.out.println("Tamanho da lista: " + letrasAcertadas.size());

        // Verificando se contém um item
        if (letrasAcertadas.contains('a')) {
            System.out.println("A letra 'a' está na lista.");
        } else {
            System.out.println("A letra 'a' NAO está na lista.");
        }
    }
            }
            
