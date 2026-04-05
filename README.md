# Teste de Integração - Aula 3

Projeto simples em JavaScript para demonstrar teste de integração entre dois módulos:
- autenticação (`login`)
- perfil (`getPerfil`)

## Objetivo
Validar a comunicação entre módulos e o contrato de dados entre as funções, garantindo que o objeto retornado no login seja consumido corretamente no módulo de perfil.

## Estrutura
- `sistema-login-integracao.js`: contém os dois módulos e o fluxo do teste de integração.

## Como executar
1. Abra o terminal na pasta do projeto.
2. Execute:

```bash
node sistema-login-integracao.js
```

## Saída esperada
- Iniciando teste de integração...
- Teste passou! A comunicação entre Login e Perfil está correta.

## Cenários cobertos
- Caminho feliz: usuário `admin` com senha `1234`.
- Tratamento de erro no módulo de perfil quando o usuário não está autenticado.
