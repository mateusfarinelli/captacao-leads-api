import { Lead } from '@modules/leads/infra/entities/Lead';
import {
  Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';


@Entity('intentions')
class Intention {
  @PrimaryColumn()
  intention_id: string;

  @Column()
  lead_id: string;

  @ManyToOne(() => Lead)
  @JoinColumn({ name: 'lead_id' })
    lead: Lead;

  @Column()
    zipcode_start: string;

  @Column()
    zipcode_end: string;
  
  @CreateDateColumn()
    created_at: Date;
  
  @UpdateDateColumn()
    updated_at: Date;

  constructor() {
    if (!this!.intention_id) {
      this.intention_id = uuidV4();
    }
  }
}

export { Intention };