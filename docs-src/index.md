# Bem vindo a disciplina .....

!!! tip "Progresso"
    Para o progresso funcionar, indique seu nome:
    <div>
        <input class="input1" id="progressUsrName" name="name" type="name" placeholder="Seu nome" required class="auto-save">
    </div>
    
O progresso é reportado a uma planinha do google sheets via post. O exemplo aqui vai para:

- https://docs.google.com/spreadsheets/d/1OZUiduaqpe-YLMXVYqpUXNC7nnAlS8B7Pvp728YvMXs/edit?usp=sharing


## Parte 1 - Confirando spreadsheet

Será necessário criar uma planinha com colunas predefinidas (parâmetros do post) e criar um script que faz a recepção dos dados e salva na planilha.

1. Crie uma planinha
1. Crie as seguintes colunas:
    - `timestamp` / `name` / `id` / `time`
1. Vá em `Tools` -> `Script Editor` -> `File` -> `New` -> `Script File`
    - `Enter new file name`: `post`
    - Cole o código: `post.gs`
1. Siga o roteiro em: https://dev.to/omerlahav/submit-a-form-to-a-google-spreadsheet-1bia:  
    - Run the setup function
    - Add a new project trigger  
    - Publish the project as a web app 
1. **Salve a url que irá aparecer** para uso futuro.  
1. Vá em `Publish` -> `Deploy as web API`   

<button class="button0" id="parte-1-gs" onClick="progressBut(this.id);">Cheguei Aqui!</button>

!!! todo
    O que fazer se o usuário não escreveu o nome?
        - desabilitar todos os botões
        - usar um id aleatório

## Parte 2 - Configurando o mkdocs

Será necessário inserir alguns scripts `js` e um `css`, que estão localizados em:

- `docs-src/js`
- `docs-src/css`

Configure também o `.mkdocs`:

``` yml
extra_css:
  - css/progress.css

extra_javascript:
  - 'js/jquery.min.js'
  - 'js/savy.min.js'
  - 'js/progress.js'
```

Edite o arquivo `js/progress.js` inserindo a url que copiou na outra etapa.

```
const scriptURL = 'https://script.google.com/macros/s/AKfycbxJTJIvfkJzTusu8PGkyP1aGmA7KSrKq8H4OiiQYSl9Lf6ZVM8/exec';
```

!!! todo
    da para colocar no mkdocs.yml e extrair no js?

<button class="button0" id="parte-2-mkdocs" onClick="progressBut(this.id);">Cheguei Aqui!</button>

## Parte 3 - Usando

Para inserir um progresso, use o código html a seguir:

!!! todo
    como incorporar no markdown?

```
<button class="button0" id="checkpoint" onClick="progressBut(this.id);">Cheguei Aqui!</button>
```

Para cada botão de progresso você deve editar e criar um único `id=`.

<button class="button0" id="parte-3-botao" onClick="progressBut(this.id);">Cheguei Aqui!</button>
