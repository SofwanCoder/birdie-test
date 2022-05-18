import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

export interface IEventAttributes {
  id: number;
  event_type: string;
  care_recipient_id: string;
  alert_id: string;
  task_instance_id: string;
  visit_id: string;
  caregiver_id: string;
  payload_as_text: string;
  rejected_event_id: string;
  observation_event_id: string;
  payload: string;
  timestamp: string;
}

export type IEventCreationAttributes = Partial<IEventAttributes>;

@Table({ tableName: "events" })
export class Event extends Model<IEventAttributes, IEventCreationAttributes> {
  @PrimaryKey
  @Column
  public id!: number;

  @Column
  public event_type!: string;

  @Column
  public care_recipient_id!: string;

  @Column
  public alert_id!: string;

  @Column
  public task_instance_id!: string;

  @Column
  public visit_id!: string;

  @Column
  public caregiver_id!: string;

  @Column
  public payload_as_text!: string;

  @Column
  public rejected_event_id!: string;

  @Column
  public observation_event_id!: string;

  @Column
  public payload!: string;

  @Column
  public timestamp!: string;

  public toJSON(): IEventAttributes {
    const {
      id,
      event_type,
      care_recipient_id,
      alert_id,
      task_instance_id,
      visit_id,
      payload_as_text,
      rejected_event_id,
      observation_event_id,
      payload,
      caregiver_id,
      timestamp,
    } = this;
    return {
      caregiver_id,
      timestamp,
      id,
      event_type,
      care_recipient_id,
      alert_id,
      task_instance_id,
      visit_id,
      payload_as_text,
      rejected_event_id,
      observation_event_id,
      payload,
    };
  }
}
