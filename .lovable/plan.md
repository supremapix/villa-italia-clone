# Plano de Remoção do Motor de Reservas e Popup

Remover todas as referências ao motor de reservas Omnibees (`https://book.omnibees.com/hotel/18988`) e desativar o popup promocional `SummerAlert`.

## Alterações Visuais e Funcionais

- **Remover o Popup**: Desativar a exibição do componente `SummerAlert` na página inicial.
- **Substituir Botões de Reserva**: Onde houver botões apontando para o Omnibees, eles serão removidos ou redirecionados para o WhatsApp da Central de Reservas, conforme o contexto.
- **Limpeza de Rodapé e Navegação**: Remover o link direto de reserva online do menu superior e do rodapé.

## Detalhes Técnicos

### 1. Desativação do Popup
- Em `src/pages/Index.tsx`, remover a importação e o uso do componente `<SummerAlert />`.
- Arquivo `src/components/SummerAlert.tsx` pode ser mantido ou deletado (será removido o uso).

### 2. Atualização da Navegação (`src/components/Navigation.tsx`)
- Remover o botão "Reserve Agora" que aponta para o link externo.
- (Opcional) Adicionar um botão de WhatsApp se não houver um proeminente, mas a instrução é "retirar a url".

### 3. Atualização dos Botões Flutuantes (`src/components/FloatingButtons.tsx`)
- Remover o botão de reserva (ícone de calendário) que aponta para o link externo.

### 4. Formulário de Reserva (`src/components/ReservationForm.tsx`)
- Remover o botão "Reservar Online" que aponta para o link externo, mantendo apenas o botão "Enviar via WhatsApp".

### 5. Seção Hero (`src/components/Hero.tsx`)
- Remover o link externo do botão principal de reserva. O botão deve ser removido ou alterado para rolar até o formulário de contato/WhatsApp.

### 6. Informações Importantes (`src/components/KeyInfo.tsx`)
- Remover o card promocional "Reserve Agora e Garanta Sua Vaga!" que contém o link externo.

### 7. Página de Acomodações (`src/pages/Accommodations.tsx`)
- Remover o botão "Reserve Agora" no Hero da página.

### 8. Página Beto Carrero World (`src/pages/BetoCarreroWorld.tsx`)
- Remover o botão de reserva no final da página.

### 9. Rodapé (`src/components/Footer.tsx`)
- O rodapé já foca em WhatsApp, mas verificarei se há links residuais.

### 10. Links em Blog e FAQ
- Em `src/pages/FAQ.tsx` e `src/pages/BlogPost.tsx` (e arquivos de dados associados), remover links em anchor tags que apontam para o Omnibees.

## Validação
- Verificar se o popup não aparece após 2 segundos na Home.
- Clicar em todos os botões de "Reserva" visíveis para garantir que nenhum aponte para a URL proibida.
- Verificar se a navegação mobile e desktop está limpa.
