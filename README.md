# Projeto front-end de integração dos temas;

**Descrição:** Escolhi usar o React pela facilidade que a framework oferece (componentização, hooks e paginação). Este documento serve p/ orientar vocês nas explicações e etc...

**Lista de critérios de avaliação que seguirei:**

- Utilização de HTML5 com escolha das TAGs com base em sua semântica. Construção semântica do documento HTML.
- Apresentação visual adequada ao tema e fazendo uso de CSS responsivo (versão mobile e desktop).
- Organização em arquivos dos scripts JavaScript e requisição HTTP via JavaScript à API do projeto organizada.
- Integração entre os temas. Uma única aplicação Web que permita navegar entre os temas do grupo. Não será aceito uma página com link para cada tema. Seja criativo.

**Observação importante:**

- Estou utilizando TailwindCSS para estilizar, é como um BOOTSTRAP CSS p/ estilizar utilizando classes.
- Para organização criei as seguintes estruturas de pastas:
  - @core: onde fica todo código que deve ser independente da framework (regras de negócio e modelos);
    - modulos: todo o codigo que pertence a cada respectivo tema;
    - contratos: todos os contratos estabelecidos que o core de vcs precisa para funcionar, independente de biblioteca e framework;
  - infra: onde fica toda a implementação dos contratos definidos no @core/contratos;
  - components: guardando código que complementa a aplicação e é reutilizada em diferentes páginas (tabela dinâmica e sidebar);
  - app:
    - layout.tsx é o que engloba a aplicação de vcs (no que se refere a tela), é nele que toda a aplicação renderizará, onde introduzirão os meta dados, elementos que se repetem por todas as páginas;
      - page.tsx página inicial;
    - cada pasta de dentro de /app representa uma página da aplicação, é assim que o next trata de rotas e etc, vc só precisa criar uma pasta e inserir um page.tsx dentro.

## Componentes:

### Sidebar:

**Descrição:** Menu com as páginas dos temas que foram selecionadas.
**Observação importante:**
