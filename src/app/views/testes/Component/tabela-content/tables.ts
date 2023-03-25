export const tabelas = [

    {
        "id": "1",
        "tableTitle": " 2.1 - Teste de Integridade de banco de dados",

        "contentOneLeft": "Objetivo do Teste:",

        "contentOne": "Garantir que os métodos e processos de acesso ao banco de dados funcionem  apropriadamente e sem corrupções de dados",

        "contentTwoLeft": "Técnica:",

        "contentTwo": "Invocar cada método e processo e de acesso ao banco de dados, alimentando cada um com dados ou requisições de dados válidos e inválidos \n Inspecionar o banco de dados para garantir que os dados foram preenchidos como deveria,que os eventos do banco de dados ocorram apropriadamente , ao realizar consultas que os dados retornem corretamente",

        "contentThreeLeft": "Critério de Finalização:",

        "contentThree": "Assim que todos os métodos, e processos de acesso a base de dados funcionem como projetados, e sem corrupção",

        "contentFourLeft": "Considerações Especiais:",

        "contentFour": " O teste pode necessitar de um ambiente de desenvolvimento ou drivers de SGBD    para inserção ou modificação dos dados \n * Processos devem ser invocados manualmente",

    },
    {
        "id": "2",
        "tableTitle": "2.2 - Teste de Função",

        "contentOneLeft": "Objetivo do Teste:",

        "contentOne": "Garantir a funcionalidade apropriada ao alvo teste, incluindo entrada de dados e        processamento",

        "contentTwoLeft": "Técnica:",

        "contentTwo": "Executar cada caso de uso, fluxo de caso de uso, usando dados válidos e inválidos,        verificar o seguinte: (a)ver os resultados esperados fazendo uso de dados válidos  /  (b)se as mensagens de erro ou aviso apropriados são exibidas ao inserir dados inválidos  / (c) verificar se cada regra de negócio está sendo aplicada apropriadamente",

        "contentThreeLeft": "Critério de Finalização:",

        "contentThree": " (a)se todos os testes planejados foram realizados / (b) caso haja erros de funcionamento, se esses foram identificados e tratados",

        "contentFourLeft": "Considerações Especiais:",

        "contentFour": "------- nenhuma-----------"

    },
    {
        "id": "3",
        "tableTitle": " 2.3 - Teste de Segurança e Controle de Acesso",

        "contentOneLeft": "Objetivo do Teste:",

        "contentOne": "verificar se o acesso está restrito apenas a pessoas autorizadas",

        "contentTwoLeft": "Técnica:",

        "contentTwo": " (a) - identifique e liste cada tipo de usuário e as funções ou dados para os quais o    seu tipo de usuário tem permissão / (b) - crie testes para cada tipo de usuário e verifique cada permissão criando  específicas para cada tipo de usuário / (c) - modifique o tipo de usuário e repita os testes para os mesmos usuários, verificando  em   cada usuário se os dados adicionados estão corretamente disponíveis ou negados",

        "contentThreeLeft": "Critério de Finalização:",

        "contentThree": "se todas as transações estão funcionando corretamente",

        "contentFourLeft": "Considerações Especiais:",

        "contentFour": "Necessário ser revisado com o administrador da rede do contratante. (esse teste pode não ser necessário)"

    }
    // // {
    // //     "id": "4",
    // //     "tableTitle": "2.2 - Teste de Função",
    // //     "contentOneLeft": "Objetivo do Teste:",
    // //     "contentOne": "",
    // //     "contentTwoLeft": "Técnica:",
    // //     "contentTwo": "",
    // //     "contentThreeLeft": "Critério de Finalização:",
    // //     "contentThree": "",
    // //     "contentFourLeft": "Considerações Especiais:",
    // //     "contentFour": ""
    // // },


]
