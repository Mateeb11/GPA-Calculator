import Card from "../UI/Card";
import Header from "../UI/Header";
import Container from "../UI/Container";
import Table from '../UI/Table';
import classes from './Result.module.css'


const Result = props => {
    const cheackNaN = (element) => {
        if (isNaN(element)){
            return false
        }
        return true
    }
    return (
        <Container className={classes.input}>
        <Card>
            <Header>النتائج</Header>
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <th>التراكمي</th>
                            <th>الفصل الحالي</th>
                            <th>/</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{cheackNaN(props.GPAs[0]) ? props.GPAs[0] :props.GPAs[1] }</td>
                            <td>{cheackNaN(props.GPAs[1]) && props.GPAs[1]}</td>
                            <td>المعدل</td>
                        </tr>
                        <tr>
                            <td>{props.GPAs[2]}</td>
                            <td>{props.GPAs[3]}</td>
                            <td>التقدير</td>
                        </tr>
                        <tr>
                            <td>{cheackNaN(props.GPAs[4]) ? props.GPAs[4] : props.GPAs[5]}</td>
                            <td>{cheackNaN(props.GPAs[5]) && props.GPAs[5]}</td>
                            <td>النقاط</td>
                        </tr>
                        <tr>
                            <td>{cheackNaN(props.GPAs[6]) ? props.GPAs[6] : props.GPAs[7]}</td>
                            <td>{cheackNaN(props.GPAs[7]) && props.GPAs[7]}</td>
                            <td>الساعات</td>
                        </tr>
                    </tbody>

                </Table>
            </Container>
        </Card>
        </Container>
    )
}

export default Result;