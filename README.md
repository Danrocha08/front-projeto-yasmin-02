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
**Observação importante:** A sidebar é dinâmica, definindo o nome do item no menu e seu caminho
```tsx
const [itensMenu, setItensMenu] = useState<
    { item: string; path: string; selecionado: boolean }[]
  >([
    {
      item: "Carros",
      path: "/carros",
      selecionado: false,
    },
    {
      item: "Empregados",
      path: "/empregados",
      selecionado: false,
    },
    {
      item: "Jogos",
      path: "/jogos",
      selecionado: false,
    },
    {
      item: "Produtos",
      path: "/produtos",
      selecionado: false,
    },
  ]);
```

### FormDinamico:

**Descrição:** Criei um formulário dinâmico onde ele recebe algumas informações e consegue renderizar um formulário com comportamento:
```tsx
type FormProps = {
  campos: Object; // Esse objeto recebe os campos que existirão no formulário.
  setDadoCampo: (campos: Object) => void; // Esse método será acionado quando o usuário digitar algo no formulário
  enviaDados: () => Promise<void>; // Esse método é o que acontecerá quando o formulário for submetido
};
```
**Observação importante:** É importante dizer que vocês optaram por um formulário dinâmico p/ extrair as vantagens da lib (ReactJS), como componentização e tratamento de estado de objeto.

### GaleriaDinamica:

**Descrição:** A galeria dinâmica é bem similar ao formulário, recebe alguns objetos p/ renderizar a visualização de todos os itens cadastrados naquele tema:
```tsx
type GaleriaProps = {
  itens: Object[]; // Recebe a lista de itens p/ renderizar na galeria
  chaveId: string; // É a chave do id do item, exemplo: carro poderia ser idCarro e produto poderia ser idProduto, então para saber qual o campo que é utilizado como id coloquei esse item.
  deletaItem: (id: any) => Promise<void>; // O método que é utilizado para apagar um item, dado que um usuário pode apagar e editar os itens da galeria.
  salvaAlteracoes: (id: number, dados: any) => Promise<void>; // O método utilizado p/ salvar as alterações de um item
};
```
**Observação importante:** As mesmas vantagens que citaram para o formulário dinâmico é importante dizer aqui também.

---

## Injeção de dependência:
**Importante:** Criei um contexto para injeção de dependência, fiz isso para seguir as boas práticas, as vantagens de implementar isso é que vocês poderão alterar a lib que faz o fetch de informações (no caso eu utilizei o Axios) com mais facilidade. É importante falar sobre isso por que foi implementado manualmente.

- O contrato do serviço está no `@core/contratos/IHttp.ts`, independente de biblioteca.
- A implementação desse contrato está em `app/infra/axios-http.ts`.
- A injeção está acontecendo em `app/context/services.context.tsx`.

**Importância disso:** Desacopla a lib (axios) da aplicação, facilitando a implementação de outra lib p/ fetch de dados. 