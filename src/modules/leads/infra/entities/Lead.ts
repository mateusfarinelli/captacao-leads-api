import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';


@Entity('leads')
class Lead {
  @PrimaryColumn()
    lead_id!: string;

  @Column()
    name!: string;

  @Column()
    email!: string;
  
  @CreateDateColumn()
    created_at!: Date;

  constructor() {
    if (!this.lead_id) {
      this.lead_id = uuidV4();
    }
  }
}

export { Lead };