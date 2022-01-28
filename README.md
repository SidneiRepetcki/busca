## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo em seu navegador.

A página será recarregada quando você fizer alterações.\
Você também pode ver erros de lint no console.

### `npm test`

Inicia o executor de teste no modo de exibição interativa.\

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

### `npm run eject`

**Nota: esta é uma operação unidirecional. Depois de 'ejetar', você não pode voltar!**


Se você não estiver satisfeito com a ferramenta de compilação e as opções de configuração, você pode `ejetar` a qualquer momento. Este comando removerá a dependência de compilação única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc) diretamente em seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto você está por conta própria.

Você não precisa usar `eject`. O conjunto de recursos com curadoria é adequado para implantações pequenas e médias, e você não deve se sentir obrigado a usar esse recurso. No entanto, entendemos que essa ferramenta não seria útil se você não pudesse personalizá-la quando estiver pronto para isso.


### OBSERVAÇÕES

Projeto foi feito baseado no que foi pedido, simples e funcional, criado a API de busca de musicas e videos do youtube.
A chave que foi gerada de uma aplicação simples, onde iremos buscar por um determinado artista ou banda para termos acesso aos vídeos do Youtube retornados pela busca esta falha com ' ERRO 403 '.

Youtube: ' AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc '

ERRO 403 - sinaliza que você não tem permissão para ver determinada página. Porém, o servidor entende a solicitação e sabe quem está tentando o acesso, porém se recusa a liberar a passagem.

Foi gerada uma nova chave porém indentifado outro erro ' ERRO 404 '.

Nova chave gerada do YOUTUBE: ' AIzaSyDJHLPBdVBrkAoKALCgJMFvdi_7NE4FCnw '

ERROR 404 - normalmente acontece quando o usuário clica em um link quebrado ou quando o site altera a localização de um conteúdo sem corrigir os links de redirecionamento. Digitar incorretamente o endereço também é uma causa comum desse erro. Precisa-se de tempo para identificar o erro. 

O maior desafio deste projeto foi criar uma API do YOUTUBE, implementando qualquer tipo de video. 
