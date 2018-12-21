import { AnimalEntidade } from '../animal/animal-entidade.class';

export class ProprietarioEntidade{
	
	id: number;
	id_evento: number;
	nome: string;
	sobrenome: string;
	genero: number;
	data_de_nascimento: string;
	telefone_1: number;
	telefone_2: number;
	email: string;
	estado_civil: number;
	campanha_passada: number;
	conhece_exame_em_casa: number;
	como_soube_campanha: number;
	cep: number;
	rua: string;
	numero: number;
	complemento: string;
	bairro: string;
	cidade: string;
	estado:	string;
	pais: string;
	auto_contato: boolean;
	animal: AnimalEntidade;
	
}