"use server";

import { revalidatePath } from "next/cache";
import postgres from "postgres";
import { z } from "zod";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
  ssl: "allow",
});

export async function createUsuario(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    nome: z.string().min(1),
    email: z.string().min(1),
    senha: z.string().min(1),
    telefone: z.string().min(1),
    cpf: z.string().min(1)
  });
  const parse = schema.safeParse({
    nome: formData.get("nome"),
    email: formData.get("email"),
    senha: formData.get("senha"),
    telefone: formData.get("telefone"),
    cpf: formData.get("cpf")
  });

  if (!parse.success) {
    return { message: "Falha ao criar Usuário" };
  }

  const data = parse.data;

  try {
    await sql`INSERT INTO USUARIO(USU_STR_NOME, USU_STR_EMAIL, USU_STR_SENHA, USU_STR_TEL, USU_STR_CPF) VALUES(${data.nome}, ${data.email}, ${data.senha}, ${data.telefone}, ${data.cpf})`;

    revalidatePath("/");
    return { message: `Usuário ${data.nome} adicionado` };
  } catch (e) {
    return { message: "Falha ao criar usuario" };
  }
}

export async function deleteUsuario(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const schema = z.object({
    id: z.string().min(1),
    nome: z.string().min(1),
  });
  const data = schema.parse({
    id: formData.get("id"),
    nome: formData.get("nome"),
  });

  try {
    await sql`
      DELETE FROM USUARIO
      WHERE USU_INT_ID = ${data.id};
    `;

    revalidatePath("/");
    return { message: `Usuário ${data.nome} deletado` };
  } catch (e) {
    return { message: "Falha ao deletar usuário" };
  }
}