public class ManipulacaoString {
    public static void main(String[] args) {
        String texto = "Olá, mundo!";

        // Encontrar posição (find/index)
        int posicao = texto.indexOf("mundo"); // Retorna 5

        // Maiúsculas (upper)
        String maiuscula = texto.toUpperCase(); // OLA, MUNDO!

        // Substituição (replace)
        String novoTexto = texto.replace("Olá", "Adeus"); // Adeus, mundo!

        System.out.println("Posição: " + posicao);
        System.out.println("Maiúsculo: " + maiuscula);
        System.out.println("Substituição: " + novoTexto);
    }
}
