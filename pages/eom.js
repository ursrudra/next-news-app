import { Toolbar } from '../components/toolbar'
import styles from '../styles/EOM.module.css'
const EOM = ({employee}) =>{
    const profile= 'https://media-exp1.licdn.com/dms/image/C5603AQGcc3JGRSvRlg/profile-displayphoto-shrink_800_800/0/1517234517216?e=1626912000&v=beta&t=jUSHeKaigu-rawU-uNTk2Sj3RzPHk40Ffm5E1UsK3Fk'
    return(
        <section className="page-container">
            <Toolbar/>
            <main className={styles.main}>
                <h1>Employee Of The Month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <img src={profile} loading="lazy" alt={employee.name} />
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <p>{employee.description}</p>
                </div>
            </main>
        </section>
    )
}

// to make this as server side component

export const getServerSideProps = async pageContext =>{
  const apiResponse = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth');
  const employee = await apiResponse.json();
  return {
      props: {
          employee
      }
  }
}

export default EOM;