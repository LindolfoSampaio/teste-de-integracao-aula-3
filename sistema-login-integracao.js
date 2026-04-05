// --- Módulo: auth.js ---
function login(usuario, senha) {
    // Simula a validação de credenciais com um "banco de dados"
    if (usuario === "admin" && senha === "1234") {
        return { id: 1, nome: "Administrador" }; // Retorna objeto do usuário
    }
    return null; // Credenciais inválidas
}

// --- Módulo: profile.js ---
function getPerfil(usuario) {
    // Verifica se o objeto usuário existe (contrato entre módulos)
    if (!usuario) {
        return "Usuário não autenticado"; // Caso de erro
    }
    return `Bem-vindo, ${usuario.nome}`; // Caso de sucesso
}

// --- TESTE DE INTEGRAÇÃO ---
function testeIntegracao() {
    console.log("Iniciando teste de integração...");

    // Passo 1: Tenta realizar o Login
    const usuarioLogado = login("admin", "1234");

    // Passo 2: Usa o resultado do Login no módulo de Perfil
    const mensagemPerfil = getPerfil(usuarioLogado);

    // Validação dos resultados
    if (mensagemPerfil === "Bem-vindo, Administrador") {
        console.log("✅ Teste passou! A comunicação entre Login e Perfil está correta.");
    } else {
        console.log("❌ Teste falhou!");
    }
}

// Executar o teste
testeIntegracao();
