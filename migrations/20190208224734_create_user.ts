import * as Knex from "knex";

import { UserTable } from "@app/enums";


export async function up(knex: Knex) {
  return await knex.schema.createTable(UserTable.Table, table => {
    table.uuid(UserTable.Id).primary();
    table.string(UserTable.FirstName, 128).notNullable();
    table.string(UserTable.LastName, 128).notNullable();
    table.string(UserTable.EmailAddress, 255).notNullable();
  });
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable(UserTable.Table);
}