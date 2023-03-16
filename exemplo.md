<div id="caixa">
    <h1 class="name"> Swagger</h1>
    <span class="space"></span>
    <div class="principal">
        <h3 class="name">Introdução</h3>
        <p>
            &nbsp;&nbsp;&nbsp;&nbsp;O Swagger é um software opensource com um conjunto de ferramentas
            profissionais, no qual ajuda no trabalho de desenvolvimento de APIs.
            <br>
            &nbsp;&nbsp;&nbsp;&nbsp;Fazendo uso do Swagger o desenvolvedor poderá fazer a modelagem de uma
            API, poderá documentar e mesmo gerar código para o desenvolvimento de APIs.
        </p>
    </div>

</div>

<div id="caixa" class="principal ">
    <h3>Imagens dos endpoint realizados com Swagger</h3>
    <div class="box_img centralizando">
        <div class="img_text">
            <h4> </h4>
            <img class="img-postagem" [src]={{img.routerlink}} alt="swagger_endpoint">
        </div>
    </div>
</div>
<hr>
<div id="caixa" class="principal">
    <h1 class="name" style="font-size: xx-large;">USUÁRIOS</h1>
</div>
<hr>
<div class="rotas_users">
    <div id="caixa" class="principal ">
        <h3>{{user.title}}</h3>
        <div class="box_img centralizando">
            <div class="img_text">
                <h4> <span class="name">{{user.name}}</span> </h4>
                <img class=" img-postagem" [src]="user.img" [alt]="user.descriptionImg">
            </div>
            <div class="img_text">
                <h4> <span class="name">{{user.name2}}</span> </h4>
                <img class=" img-postagem" [src]="user.img2" [alt]="user.descriptionImg2">
            </div>
        </div>
    </div>
    <!-- <div id="caixa" class="principal ">
        <h3>Imagens dos endpoint usuário</h3>
        <div class="box_img centralizando">
            <div class="img_text">
                <h4> <span class="name">Put (User) </span> - atualizando usuário </h4>
                <img class=" img-postagem" src="../Image/swagger/User/PutUser.png" alt="PutUser">
            </div>
            <div class="img_text">
                <h4> <span class="name">(put-return)</span> - resposta ao atualizar um usuário</h4>
                <img class=" img-postagem" src="../Image/swagger/User/PutUserReturn.png" alt="put-return">
            </div>
        </div>
    </div>
    <div id="caixa" class="principal ">
        <h3>Imagens dos endpoint usuário</h3>
        <div class="box_img centralizando">
            <div class="img_text">
                <h4> <span class="name">Post (User)</span> - cadastrando usuário </h4>
                <img class=" img-postagem" src="../Image/swagger/User/PostUser.png" alt="PostUser">
            </div>
            <div class="img_text">
                <h4> <span class="name">Delete (User)</span> - deletando usuário </h4>
                <img class=" img-postagem" src="../Image/swagger/User/DeleteUser.png" alt="DeleteUser">
            </div>
        </div>
    </div> -->
</div>
<hr>

<hr>
<div class="rota_book" ng*for="let title of swagger.book,let i=index">
    <div id="caixa" class="principal ">
        <h3>{{book.title}}</h3>
        <div class="box_img centralizando">
            <div class="img_text">
                <h4> <span class="name">{{book.name}}</span> </h4>
                <img class=" img-postagem" [src]="{{book.img}}" alt="book.descriptionImg">
            </div>
            <div class="img_text">
                <h4> <span class="name">{{book.name2}}</span> </h4>
                <img class=" img-postagem" [src]="{{book.img2}}" alt="{{book.descriptionImg2}}">
            </div>
        </div>
    </div>
    <!-- <div id="caixa" class="principal ">
        <h3>Imagens dos endpoint livro</h3>
        <div class="box_img centralizando">
            <div class="img_text">
                <h4> <span class="name">Put (Book) </span> - atualizando livro </h4>
                <img class=" img-postagem" src="../Image/swagger/Book/PutBook.png" alt="PutBook">
            </div>
            <div class="img_text">
                <h4> <span class="name">(put-return)</span> - resposta ao atualizar um livro</h4>
                <img class=" img-postagem" src="../Image/swagger/Book/PutReturnBook.png" alt="put-return">
            </div>
        </div>
    </div>
    <div id="caixa" class="principal ">
        <h3>Imagens dos endpoint livro</h3>
        <div class="box_img centralizando">
            <div class="img_text">
                <h4> <span class="name">Post (Book)</span> - cadastrando livro </h4>
                <img class=" img-postagem" src="../Image/swagger/Book/PostBook.png" alt="PostBook">
            </div>
            <div class="img_text">
                <h4> <span class="name">Delete (Book)</span> - deletando livro </h4>
                <img class=" img-postagem" src="../Image/swagger/Book/DeleteBook.png" alt="DeleteBook">
            </div>
        </div> 
    </div>-->
</div>
<hr>

<hr>
<div id="caixa" class="principal ">
    <h3>Imagens do endpoint Login - criando um token para acesso aos livros</h3>
    <div class="box_img centralizando">
        <div class="img_text" *ngFor=" let title of swagger.login,let i=index">
            <h4> <span class="name">{{login.name}} </span></h4>
            <img class=" img-postagem" [src]="{{login.img}}" alt="{{login.descriptionImg}}">
        </div>
        <!-- <div class="img_text">
            <h4> <span class="name">(return)</span> - Token gerado </h4>
            <img class=" img-postagem" src="../Image/swagger/LoginReturn.png" alt="login_token">
        </div> -->
    </div>
</div>
--------------------------
,
    "user": [
        {
            "id": 1,
            "title": "Imagens dos endpoint usuário",
            "dados": [
                {
                    "name": "Get (User)",
                    "img": "assets/Image/swagger/User/getUser.png",
                    "descriptionImg": "get_user_img"
                },
                {
                    "name2": "GetById (User)",
                    "img2": "assets/Image/swagger/User/GetByIdUser.png",
                    "descriptionImg2": "GetByIdUser_img"
                }
            ]
        },
        {
            "id": 2,
            "title": "Imagens dos endpoint usuário",
            "dados": [
                {
                    "name": "Put (User)",
                    "img": "assets/Image/swagger/User/PutUser.png",
                    "descriptionImg": "Put_user_img"
                },
                {
                    "name2": "Put-return (User)",
                    "img2": "assets/Image/swagger/User/PutUserReturn.png",
                    "descriptionImg2": "Put_user_return"
                }
            ]
        },
        {
            "id": 3,
            "title": "Imagens dos endpoint usuário",
            "dados": [
                {
                    "name": "Post (User)",
                    "img": "assets/Image/swagger/User/PostUser.png",
                    "descriptionImg": "Post_user_img"
                },
                {
                    "name2": "Delete (User)",
                    "img2": "assets/Image/swagger/User/DeleteUser.png",
                    "descriptionImg2": "Delete_user_img"
                }
            ]
        }
    ],
    "book": [
        {
            "id": 1,
            "title": "Imagens dos endpoint livro",
            "dados": [
                {
                    "name": "Get (Book)",
                    "img": "assets/Image/swagger/User/GetBook.png",
                    "descriptionImg": "get_book_img"
                },
                {
                    "name2": "GetById (Book)",
                    "img2": "assets/Image/swagger/User/getByIdBook.png",
                    "descriptionImg2": "GetByIdBook_img"
                }
            ]
        },
        {
            "id": 2,
            "title": "Imagens dos endpoint livro",
            "dados": [
                {
                    "name": "Put (Book)",
                    "img": "assets/Image/swagger/User/PutBook.png",
                    "descriptionImg": "Put_Book_img"
                },
                {
                    "name2": "Put-return (Book)",
                    "img2": "assets/Image/swagger/User/PutReturnBook.png",
                    "descriptionImg2": "Put_book_return"
                }
            ]
        },
        {
            "id": 3,
            "title": "Imagens dos endpoint livro",
            "dados": [
                {
                    "name": "Post (Book)",
                    "img": "assets/Image/swagger/User/PostBook.png",
                    "descriptionImg": "Post_Book_img"
                },
                {
                    "name2": "Delete (Book)",
                    "img2": "assets/Image/swagger/User/DeleteBook.png",
                    "descriptionImg2": "Delete_Book_img"
                }
            ]
        }
    ],
    "login": [
        {
            "name": "Login",
            "img": "assets/Image/swagger/Login.png",
            "descriptionImg": "Login_img",
            "id": 1
        },
        {
            "name": "(return) - Token Gerado",
            "img": "assets/Image/swagger/LoginReturn.png",
            "descriptionImg": "login_token",
            "id": 2
        }