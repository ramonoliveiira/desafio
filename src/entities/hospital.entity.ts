
import { Field, ID, ObjectType } from "@nestjs/graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Leito from "./leito.entity";

@ObjectType()
@Entity({ name: 'hospitais'})
export default class Hospital {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Field()
  @Column()
  nome: string;

  @Field()
  @Column()
  cep: string;

  @Field(() => [Leito])
  @OneToMany(() => Leito, leito => leito.hospital) // Tinha essa config { cascade: true, }
  leitos: Promise<Leito[]>
}