const Modal = {
  open() {
    // Abrir modal
    // Adcionar a class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // fecha o Modal
    // remover a class active do modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

// transaçoes

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Website",
    amount: 50000,
    date: "23/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -50000,
    date: "23/01/2021",
  },
];

// eu preciso somar as entradas
// depois eu preciso somar as saidas e
// remover das entradas o valor da saidas
// assim, eu terei o total

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    //somar as saidas
  },
  total() {},
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),

  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);
  },
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover Transação">
      </td>
    `;
    return html;
  },

  updateBalance() {
    document.getElementById("incomeDisplay").innerHTML = "Soma das Entradas";
    document.getElementById("expenseDisplay").innerHTML = "Soma das saidas";
    document.getElementById("totalDisplay").innerHTML = "Soma das saidas";
  },
};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return signal + value;
  },
};

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction);
});
