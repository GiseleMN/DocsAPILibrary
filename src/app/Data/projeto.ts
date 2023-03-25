export const data = [

    {
        "id": "1",
        "name": "Classe Usuário",
        "img": "assets/Image/userEntity.png",
        "descriptionImg": "UserEntity_img",
        "conteudoItem": "Classe Usuário - Fazendo uso de Data Annotations: Para validação de dados para migração com o banco de dados. \n ( Dados - Chave de identificação(id)	| Email  | Senha  | Tipo )",
    },
    {
        "id": "2",
        "name": "Classe Livro",
        "img": "assets/Image/BookEntity.png",
        "descriptionImg": "BookEntity_img",
        "conteudoItem": " Classe Livro - ( Dados Chave de identificação (id) |  Título | Número de páginas |  Disponibilidade )"
    },
    {
        "id": "3",
        "name": "Desenvolvendo Classe Context - Configuração para o banco de dados",
        "img": "assets/Image/ClassContext.png",
        "descriptionImg": "Class_Context",
        "conteudoItem": "A Fluent Api serve para complementar ou substituir as convenções pré definidas ou não, tendo como resultado final uma chamada de método encadeados como resultado final. Podemos sobrescrever os dados chamando o método OnModelCreating (modelbuilder). Nesse projeto não foi feito uso da FluentApi  mas pode ver um exemplo da implementação da FluentApi na imagem acima."
    },
    {
        "id": "4",
        "name": "Configurações de Serviços / Adicionando Cors ",
        "img": "assets/Image/Program.png",
        "descriptionImg": "Program",
        "conteudoItem": " Na Program realizamos consfigurações de serviços para a coleção de serviços, na imagem acima vemos referenciado, o uso da classe context, também vemos dos objetos usuário e livro. ( Referencia usando AddScoped - trabalha de forma que, sempre ao realizar uma requisição, durante o processo irá sempre retornar o mesmo objeto / Referencia usando AddTransient - ao impletar esse método você sempre terá uma nova instância do objeto.) Podemos ver implementado o uso do Cors ( Cors 'Cross-Origin-Resource Sharing' - garante uma navegação mais segura ao usuário, evitando ação de crackers e acesso de websites maliciosos, faz isso permitindo ou recusando o acesso desses. )  ",

    },
    {
        "id": "5",

        "name": " Adicionando JWT Bearer / Swagger",
        "img": "assets/Image/Program -2.png",
        "descriptionImg": "Program_Jwt",
        "conteudoItem": "A implementação do JWT BEARE no código é utilizada para realizar autenticação.  Autenticação é o processo de determinar a identidade de um usuário. Dessa forma o usuário obtém uma autorização para  acesso ao recurso. No ASP.NET Core, a autenticação é tratada pelo serviço de autenticação, IAuthenticationService, que é usado pelo middleware de autenticação.  /  O SWAGGER - Ferramenta para fazer modelagem, documentar e gerar o documento para desenvolvimento de APIs. "
    },
    {
        "id": "6",
        "name": "Pasta Migration",
        "img": "assets/Image/Migration.png",
        "descriptionImg": "Migration",
        "conteudoItem": "MODELO ENTIDADE USER: após realizar a migração vemos pela imagem os dados com uso de Data Annotations(anotações). Parâmetros imposto na classe modelo usuário, limitando a quantidade de caracteres , tipo do dado, que será implementado no banco de dados. / MODELO ENTIDADE BOOK: após realizar a migração, vemos os dados sendo implementados sem o uso de Data Annotations, a própria ferramenta implanta o tipo de dados a ser        implementado no dados, porém vemos que não foi imposto um limite de valor de caracteres. ( Nesse caso não é        uma boa prática) Nesse caso você pode realizar atualização dos por meio da Fluent Api."
    },
    {
        "id": "7",
        "name": "Entidade livro no Banco de Dados",
        "img": "assets/Image/dbBook.png",
        "descriptionImg": "db_book",
        "conteudoItem": "A)  Modelo entidade User: após realizar a migração vemos pela imagem os dados com uso de Data Annotations(anotações). Parâmetros imposto na classe modelo usuário,  limitando a quantidade de caracteres , tipo do dado, que será implementado no banco de dados.        "


    },
    {
        "id": "8",
        "name": "Entidade Usuário no Banco de Dados",
        "img": "assets/Image/dbUser.png",
        "descriptionImg": "db_user",
        "conteudoItem": "B) Modelo entidade Book: após realizar a migração, vemos os dados sendo implementados sem o uso de Data Annotations, a própria ferramenta implanta o tipo de dados a ser implementado no dados, porém vemos que não foi imposto um limite de valor de caracteres. ( Nesse caso não é uma boa prática) Nesse caso você pode realizar atualização dos por meio da Fluent Api.  "

    },
    {
        "id": "9",
        "name": "User Interface",
        "img": "assets/Image/UserInterface.png",
        "descriptionImg": "user_interface",
        "conteudoItem": "Classe Interface: interface de visualização de dados referenciados (métodos CRUD -Create/Read/Update/Delete)."
    },
    {
        "id": "10",
        "name": "Book Interface",
        "img": "assets/Image/bookInterface.png",
        "descriptionImg": "Book_interface",
        "conteudoItem": "Classe Interface: interface de visualização de dados referenciados (métodos CRUD -Create/Read/Update/Delete)."

    },
    {
        "id": "11",
        "name": "User Repository",
        "img": "assets/Image/UserRepository.png",
        "descriptionImg": "user_repository",
        "conteudoItem": "Camada responsável por trabalhar com a fonte de dados da aplicação , manipulação da lógica de acesso dos dados que será chamado na program fazendo uso da interface. Por meio dessa classe que se faz verificações dos dados   consultados, existentes no banco de dados."
    },
    {
        "id": "12",
        "name": "Book Repository",
        "img": "assets/Image/BookRepository.png",
        "descriptionImg": "Book_Repository",
        "conteudoItem": "Camada responsável por trabalhar com a fonte de dados da aplicação , manipulação da lógica de acesso dos dados que será chamado na program fazendo uso da interface. Por meio dessa classe que se faz verificações dos dados   consultados, existentes no banco de dados."

    },
    {
        "id": "13",
        "name": "User Controller",
        "img": "assets/Image/UserController.png",
        "descriptionImg": "User_Controller",
        "conteudoItem": "Controle de acesso a API  por meio dos endpoints, realizando métodos para criar, listar, atualizar, deletar dados de um objeto. O controle de acesso por meio dos endpoints é importante para restringir o acesso a API. Nos Controladores se encontra a regra de negócio implementando a API a parte de segurança por meio e autorizações e autenticações."
    },
    {
        "id": "14",
        "name": "Book Controller",
        "img": "assets/Image/BookController.png",
        "descriptionImg": "Book_controller",
        "conteudoItem": "Controle de acesso a API  por meio dos endpoints, realizando métodos para criar, listar, atualizar, deletar dados de um objeto. O controle de acesso por meio dos endpoints é importante para restringir o acesso a API. Nos Controladores se encontra a regra de negócio implementando a API a parte de segurança por meio e autorizações e autenticações."

    },
    {
        "id": "15",
        "name": "Login View Model",
        "img": "assets/Image/LoginViewModel.png",
        "descriptionImg": "LoignModel",
        "conteudoItem": "Objeto modelo para o uso do login."
    },
    {
        "id": "16",
        "name": "Login Controller",
        "img": "assets/Image/LoginController.png",
        "descriptionImg": "Book_controller",
        "conteudoItem": "Classe responsável pelas requisições do Login da API. ( Nessa classe implementamos a  autenticação de segurança pelo JWT)"
    },
    {
        "id": "17",
        "name": "NuGet",
        "img": "assets/Image/nugets.png",
        "descriptionImg": "NuGets",
        "conteudoItem": "NuGet -  Pacotes do NuGet é um arquivo ZIP com a extensão .nupkg que contém o código compilado (DLLs), outros arquivos relacionados a esse código e um manifesto descritivo que inclui informações como o número de versão do pacote. Os consumidores de pacote obtêm esses pacotes de hosts adequados, os adicionam aos seus projetos e chamam a funcionalidade de um pacote no código do projeto. Em seguida, o próprio NuGet manipula todos os detalhes de intermediários. \n  Para mais informações sobre NuGet, acesse: \n  https://learn.microsoft.com/pt-br/nuget/what-is-nuget  "
    }
]


