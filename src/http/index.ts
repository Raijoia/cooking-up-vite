import type IReceita from './../interfaces/IReceita';
import type ICategoria from "@/interfaces/ICategoria"

const URLCATEGORIA ="https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json"

const URLRECEITA = "https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json"

export async function obterCategorias() {
  const resposta = await fetch(URLCATEGORIA)
  const categorias: ICategoria[] = await resposta.json()

  return categorias
}

export async function obterReceita() {
  const reposta = await fetch(URLRECEITA)
  const receitas: IReceita = await reposta.json()

  return receitas
}
