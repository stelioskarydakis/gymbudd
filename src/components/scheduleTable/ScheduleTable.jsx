import styles from "./ScheduleTable.module.css";
import { Table } from "react-bootstrap";
import { columsData, scheduleData } from "../../data";

const ScheduleTable = () => {
  return (
    <div className={styles.tablecontainer}>
      <Table bordered size="sm" responsive>
        <thead>
          <tr>
            <th>#</th>
            {columsData.map(({ accessor, header }) => {
              return <th key={accessor}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {scheduleData.map(({ id, row }) => {
            return row.map((el) => {
              const col1 = el.col1;
              const col2 = el.col2;
              const col3 = el.col3;
              const col4 = el.col4;
              const col5 = el.col5;
              const col6 = el.col6;
              const col7 = el.col7;
              return (
                <tr data-id={id} key={id}>
                  <td dangerouslySetInnerHTML={{ __html: col1 }} />
                  <td dangerouslySetInnerHTML={{ __html: col2 }} />
                  <td dangerouslySetInnerHTML={{ __html: col3 }} />
                  <td dangerouslySetInnerHTML={{ __html: col4 }} />
                  <td dangerouslySetInnerHTML={{ __html: col5 }} />
                  <td dangerouslySetInnerHTML={{ __html: col6 }} />
                  <td dangerouslySetInnerHTML={{ __html: col7 }} />
                </tr>
              );
            });
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ScheduleTable;
