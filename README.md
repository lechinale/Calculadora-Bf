🧮 Calculadora de Gordura Corporal (7 Dobras)

Este projeto é uma aplicação web simples e funcional que calcula a porcentagem estimada de gordura corporal utilizando o método das 7 dobras cutâneas (Pollock & Jackson).
O cálculo é feito com base em idade, sexo e medidas de adipometria, usando as equações de densidade corporal para homens e mulheres.

🚀 Funcionalidades

Interface simples, limpa e responsiva

Entradas para:

Idade

Sexo

Peso

Peito

Abdômen

Coxa

Tríceps

Subescapular

Supra-ilíaca

Axilar média

Cálculo automático com apenas um clique

Exibição clara da porcentagem de gordura corporal

Fundo com imagem personalizada

Estilização moderna utilizando CSS puro

🧠 Fórmulas Utilizadas

As equações seguem o padrão Pollock (7 dobras):

🔹 Homens
Densidade corporal = 1.112 - (0.00043499 × Σ7) + (0.00000055 × Σ7²) - (0.00028826 × idade)

🔸 Mulheres
Densidade corporal = 1.097 - (0.00046971 × Σ7) + (0.00000056 × Σ7²) - (0.00012828 × idade)

Conversão densidade → porcentagem de gordura
Gordura (%) = (495 / densidade) - 450

📂 Estrutura do Projeto
/
├── index.html      # Estrutura da página
├── style.css       # Estilização visual
├── script.js       # Lógica dos cálculos
└── img720.jpg      # Imagem de fundo (opcional)

🖥️ Como Usar

Abra o arquivo index.html em qualquer navegador.

Preencha todos os campos solicitados.

Clique em Calcular.

O resultado aparecerá automaticamente em uma área destacada abaixo do formulário.

📸 Preview da Interface

✔ Formulário limpo
✔ Fundo com imagem
✔ Resultado destacado

(Adicione aqui uma captura de tela caso deseje)

🔧 Tecnologias Utilizadas

HTML5

CSS3

JavaScript Vanilla

📌 Melhorias Futuras (Sugeridas)

Validação avançada dos campos

Sistema de histórico de cálculos

Versão responsiva mobile-first

Modo claro/escuro

Exportação do resultado em PDF

Cálculo alternativo (4 dobras, YMCA, etc.)

👨‍💻 Autor

Projeto desenvolvido por Leandro Chinale.
