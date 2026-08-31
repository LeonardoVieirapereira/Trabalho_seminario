import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== MANIPULAÇÃO DE STRINGS EM JAVA ===");
        String texto = "Curso de Desenvolvimento de Sistemas";

        // Substituição e busca em String
        String novoTexto = texto.replace("Sistemas", "Python");
        int posicao = texto.indexOf("Desenvolvimento");

        System.out.println("Texto Original: " + texto);
        System.out.println("Texto Alterado: " + novoTexto);
        System.out.println("Posicao da palavra: " + posicao);

        System.out.println("\n=== MANIPULAÇÃO DE LISTAS EM JAVA ===");
        // Criando uma lista de acertos (Jogo da Forca)
        ArrayList<String> letrasAcertadas = new ArrayList<>();

        // Adicionando elementos
        letrasAcertadas.add("P");
        letrasAcertadas.add("Y");
        letrasAcertadas.add("T");

        System.out.println("Letras acertadas: " + letrasAcertadas);
    }
}

