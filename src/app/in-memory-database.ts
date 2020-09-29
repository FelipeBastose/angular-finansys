import { Entry } from './pages/entries/shared/entry.model';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from './pages/categories/shared/category.model';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[]  = [
      { id: 1, name: "Moradia", description: "Pagamentos de Contas da Casa"},
      { id: 2, name: "Saúde", description: "Plano de saúde e Remédios"},
      { id: 3, name: "Lazer", description: "Cinema, parques, praias, etc"},
      { id: 4, name: "Salário", description: "Recebimento de salário"},
      { id: 5, name: "Freeelas", description: "Trabalhos como freelancer"},
    ];

    const entries: Entry[]  = [
      { id: 1, name: "Gas de Cozinha", categoryId: categories[0].id, category: categories[0], paid: true, date: "14/10/2018", amount: "70,80", type: "revenue"},
      { id: 2, name: "Suplementos", categoryId: categories[1].id, category: categories[1], paid: false, date: "14/10/2018", amount: "70,80", type: "revenue"},
      { id: 3, name: "Aluguel", categoryId: categories[2].id, category: categories[2], paid: true, date: "14/10/2018", amount: "70,80", type: "revenue"},
      { id: 4, name: "Uber", categoryId: categories[3].id, category: categories[3], paid: false, date: "14/10/2018", amount: "70,80", type: "expense"},
      { id: 5, name: "Game", categoryId: categories[4].id, category: categories[4], paid: true, date: "14/10/2018", amount: "70,80", type: "expense"}

    ];

    return { categories, entries }
  }
}
