# 💊 Drogaria Desconto Certo

Este é o repositório do site institucional e painel administrativo da **Drogaria Desconto Certo**. O projeto foi desenvolvido com foco em performance, design moderno e facilidade de gerenciamento de estoque em tempo real.

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🚀 Funcionalidades

* **Vitrine Digital:** Exposição de produtos em destaque com busca dinâmica.
* **Dark Mode Automático:** Interface que se adapta automaticamente à preferência do sistema/navegador do usuário.
* **Painel Administrativo:** Área restrita para cadastro e exclusão de produtos.
* **Banco de Dados Real-time:** Integração com Firebase Firestore para atualização instantânea do catálogo sem necessidade de refresh.
* **Design Responsivo:** Totalmente otimizado para dispositivos móveis, tablets e desktops.
* **Integração WhatsApp:** Botões de conversão direta para pedidos via chat.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** HTML5, Tailwind CSS (via CDN).
* **Backend/Database:** Firebase Firestore.
* **Autenticação:** Firebase Auth.
* **Ícones:** FontAwesome 6.5.1.
* **Tipografia:** Inter e Poppins (Google Fonts).

## 📂 Estrutura do Projeto

* `index.html`: Página principal com destaques, localização e informações de contato.
* `produtos.html`: Catálogo completo com sistema de busca e filtros.
* `admin.html`: Painel de controle protegido por login para gerenciamento de produtos.
* `LICENSE`: Arquivo contendo os termos de direitos autorais.

## ⚙️ Configuração Local

Para rodar o projeto localmente:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/drogaria-desconto-certo.git
    ```
2.  Abra qualquer um dos arquivos `.html` diretamente no seu navegador ou utilize a extensão **Live Server** no VS Code.
3.  **Nota:** O projeto já está configurado com as credenciais do Firebase da Drogaria. Caso queira usar seu próprio banco, altere a constante `firebaseConfig` nos scripts de cada arquivo.

## ⚖️ Licença

Este projeto é **proprietário**. 

**Copyright © 2026 Drogaria Desconto Certo. Todos os direitos reservados.**

É estritamente proibida a cópia, modificação ou redistribuição de qualquer parte deste código sem a autorização prévia por escrito do proprietário. Para mais detalhes, consulte o arquivo [LICENSE](./LICENSE).

---

> Desenvolvido por [Mateus Calixto](https://mateuscalixto.com.br)
