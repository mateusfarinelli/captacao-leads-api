import { CreateLead1664304520527 } from './migrations/1664304520527-CreateLead';
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "postgres",
  port: 5432,
  username: "postgres",
  password: "admin",
  database: "captacao_leads",
  synchronize: false,
  logging: false,
  entities: [],
  migrations: ["src/infra/database/migrations/*ts"],
});

export function createConnection(host = "localhost"): Promise<DataSource> {
  return dataSource.setOptions({ host }).initialize();
}

export default dataSource;
