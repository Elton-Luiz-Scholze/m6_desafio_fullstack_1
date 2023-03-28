import { getRounds, hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
  OneToMany,
} from "typeorm";
import { Contact } from "./contactsEntity";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 200, unique: true })
  email: string;

  @Column({ length: 150 })
  password: string;

  @Column()
  phone: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contact: Contact[];

  @BeforeUpdate()
  @BeforeInsert()
  hashPassWord() {
    const is_encrypted = getRounds(this.password);
    if (!is_encrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { Client };
